'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Music2, Pause } from 'lucide-react';

const MUSIC_SOURCE = '/music/cogiaovungcao.m4a';
const MUSIC_TYPE = 'audio/mp4; codecs="mp4a.40.2"';
const MP3_FALLBACK_SOURCE = '/music/cogiaovungcao.mp3';
const DEFAULT_VOLUME = 0.35;

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const firstInteractionCleanupRef = useRef<(() => void) | null>(null);
  const hasInteractedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const startPlayback = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = DEFAULT_VOLUME;
    hasInteractedRef.current = true;
    firstInteractionCleanupRef.current?.();
    firstInteractionCleanupRef.current = null;

    if (
      !audio.canPlayType(MUSIC_TYPE) &&
      !audio.canPlayType('audio/mpeg')
    ) {
      setErrorMessage(
        'Trình duyệt này không hỗ trợ định dạng M4A hoặc MP3.',
      );
      return;
    }

    try {
      await audio.play();
      setErrorMessage('');
    } catch (error) {
      setIsPlaying(false);

      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        setErrorMessage('Trình duyệt chưa cho phép phát nhạc.');
      } else {
        setErrorMessage(
          'Không thể phát file nhạc. Hãy kiểm tra định dạng âm thanh bên trong file.',
        );
      }
    }
  }, []);

  useEffect(() => {
    const handleFirstInteraction = (event: PointerEvent) => {
      const target = event.target;

      if (
        target instanceof Element &&
        target.closest('[data-music-toggle]')
      ) {
        return;
      }

      if (hasInteractedRef.current) {
        return;
      }

      void startPlayback();
    };

    document.addEventListener('pointerdown', handleFirstInteraction);
    firstInteractionCleanupRef.current = () =>
      document.removeEventListener('pointerdown', handleFirstInteraction);

    return () => {
      document.removeEventListener('pointerdown', handleFirstInteraction);
      firstInteractionCleanupRef.current = null;
    };
  }, [startPlayback]);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (!audio.paused) {
      audio.pause();
      return;
    }

    await startPlayback();
  };

  return (
    <aside className="fixed bottom-5 right-5 z-30 sm:bottom-7 sm:right-8">
      <audio
        ref={audioRef}
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setErrorMessage('Không tải được file nhạc. Hãy kiểm tra thư mục public/music.');
        }}
      >
        <source src={MUSIC_SOURCE} type={MUSIC_TYPE} />
        <source src={MP3_FALLBACK_SOURCE} type="audio/mpeg" />
      </audio>

      <button
        type="button"
        data-music-toggle
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền'}
        aria-pressed={isPlaying}
        title={errorMessage || (isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền')}
        className="flex size-12 items-center justify-center rounded-full border border-white/80 bg-[#BE123C] text-white shadow-lg shadow-[#5A1428]/25 transition hover:scale-105 hover:bg-[#A40F34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BE123C] sm:size-14"
      >
        {isPlaying ? <Pause size={20} /> : <Music2 size={21} />}
      </button>
      {errorMessage && (
        <p
          aria-live="polite"
          className="absolute bottom-full right-0 mb-3 w-max max-w-[min(18rem,calc(100vw-2rem))] rounded-xl border border-[#E8C9CD] bg-[#FFFDFD] px-3 py-2 text-xs leading-5 text-[#9F2341] shadow-lg"
        >
          {errorMessage}
        </p>
      )}
    </aside>
  );
}
