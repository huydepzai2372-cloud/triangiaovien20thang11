'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play, Volume2 } from 'lucide-react';

const MUSIC_SOURCE = '/music/cogiaovungcao.m4a';
const MUSIC_TYPE = 'audio/mp4; codecs="mp4a.40.2"';
const MP3_FALLBACK_SOURCE = '/music/cogiaovungcao.mp3';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const firstInteractionCleanupRef = useRef<(() => void) | null>(null);
  const hasInteractedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [errorMessage, setErrorMessage] = useState('');

  const startPlayback = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

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
    <aside className="fixed bottom-5 left-5 z-30 w-[min(13rem,calc(100vw-2.5rem))] rounded-2xl border border-[#E8C9CD] bg-[#FFFDFD]/95 p-3 shadow-lg shadow-[#5A1428]/10 backdrop-blur-sm sm:bottom-7 sm:left-8">
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

      <div className="flex items-center gap-2.5">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FFE4E6] text-[#BE123C]">
          <Music2 size={17} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-[#651A2E]">
            Nhạc nền
          </p>
          <p className="text-[10px] text-[#A0787F]">
            {isPlaying ? 'Đang phát' : 'Nhấn để phát'}
          </p>
        </div>
        <button
          type="button"
          data-music-toggle
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Tạm dừng nhạc nền' : 'Phát nhạc nền'}
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#BE123C] text-white transition hover:bg-[#A40F34] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BE123C]"
        >
          {isPlaying ? <Pause size={15} /> : <Play size={15} />}
        </button>
      </div>

      <label className="mt-3 flex items-center gap-2 text-[#8A626A]">
        <Volume2 size={14} className="shrink-0" />
        <span className="sr-only">Âm lượng nhạc nền</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(event) => {
            const nextVolume = Number(event.target.value);
            setVolume(nextVolume);

            if (audioRef.current) {
              audioRef.current.volume = nextVolume;
            }
          }}
          className="h-1 w-full cursor-pointer accent-[#BE123C]"
        />
      </label>

      {errorMessage && (
        <p aria-live="polite" className="mt-2 text-[10px] leading-4 text-[#9F2341]">
          {errorMessage}
        </p>
      )}
    </aside>
  );
}
