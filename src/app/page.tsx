'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Flower2, Search } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import RosePetalBackground from '@/components/RosePetalBackground';
import BackgroundMusic from '@/components/BackgroundMusic';
import { teachers, type Teacher } from '@/data/teachers';

type Recipient = {
  name: string;
  teacher: Teacher | null;
};

type GreetingStage = 'input' | 'envelope' | 'reading';

type Celebration = {
  id: number;
  symbol: string;
  x: number;
  y: number;
  rotation: number;
  delay: number;
};

const celebrationSymbols = ['✿', '♡', '♥', '✧'];

function normalizeVietnamese(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('vi')
    .replace(/đ/g, 'd')
    .trim()
    .replace(/\s+/g, ' ');
}

function withoutHonorific(name: string) {
  return name.replace(/^(thầy|cô)\s+/i, '');
}

export default function Home() {
  const [name, setName] = useState('');
  const [recipient, setRecipient] = useState<Recipient | null>(null);
  const [stage, setStage] = useState<GreetingStage>('input');
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [isOpening, setIsOpening] = useState(false);
  const [flapOpened, setFlapOpened] = useState(false);
  const [paperReady, setPaperReady] = useState(false);
  const [letterRevealed, setLetterRevealed] = useState(false);
  const [celebrations, setCelebrations] = useState<Celebration[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const celebrationId = useRef(0);

  const suggestions = useMemo(() => {
    const query = normalizeVietnamese(name);

    if (!query) {
      return [];
    }

    return teachers
      .filter((teacher) => {
        const fullName = normalizeVietnamese(teacher.name);
        const shortName = normalizeVietnamese(withoutHonorific(teacher.name));

        return fullName.includes(query) || shortName.includes(query);
      })
      .sort((first, second) => {
        const firstStartsWithQuery = normalizeVietnamese(
          withoutHonorific(first.name),
        ).startsWith(query);
        const secondStartsWithQuery = normalizeVietnamese(
          withoutHonorific(second.name),
        ).startsWith(query);

        return Number(secondStartsWithQuery) - Number(firstStartsWithQuery);
      })
      .slice(0, 5);
  }, [name]);

  const openGreeting = () => {
    const enteredName = name.trim().replace(/\s+/g, ' ');

    if (!enteredName) {
      return;
    }

    const normalizedName = normalizeVietnamese(enteredName);
    const teacher =
      teachers.find(
        (candidate) =>
          normalizeVietnamese(candidate.name) === normalizedName ||
          normalizeVietnamese(withoutHonorific(candidate.name)) ===
            normalizedName,
      ) ?? null;

    setRecipient({
      name: teacher?.name ?? enteredName,
      teacher,
    });
    setStage('envelope');
    setIsOpening(false);
    setFlapOpened(false);
    setPaperReady(false);
    setLetterRevealed(false);
    setSuggestionsOpen(false);
    setActiveSuggestion(-1);
  };

  const openEnvelope = () => {
    if (isOpening) {
      return;
    }

    setIsOpening(true);
    setStage('reading');
  };

  const selectSuggestion = (teacher: Teacher) => {
    setName(teacher.name);
    setSuggestionsOpen(false);
    setActiveSuggestion(-1);
  };

  const handleNameKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown' && suggestions.length > 0) {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveSuggestion((index) => (index + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp' && suggestions.length > 0) {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveSuggestion(
        (index) => (index <= 0 ? suggestions.length : index) - 1,
      );
    } else if (
      event.key === 'Enter' &&
      suggestionsOpen &&
      activeSuggestion >= 0 &&
      suggestions[activeSuggestion]
    ) {
      event.preventDefault();
      selectSuggestion(suggestions[activeSuggestion]);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      openGreeting();
    } else if (event.key === 'Escape') {
      setSuggestionsOpen(false);
      setActiveSuggestion(-1);
    }
  };

  const celebrateOpening = () => {
    if (shouldReduceMotion) {
      return;
    }

    const burst = Array.from({ length: 12 }, (_, index) => {
      const id = celebrationId.current++;

      return {
        id,
        symbol: celebrationSymbols[id % celebrationSymbols.length],
        x: Math.random() * 200 - 100,
        y: 120 + Math.random() * 90,
        rotation: Math.random() * 100 - 50,
        delay: index * 0.035,
      };
    });

    setCelebrations((current) => [...current, ...burst].slice(-24));
  };

  const startOver = () => {
    setRecipient(null);
    setStage('input');
    setName('');
    setIsOpening(false);
    setFlapOpened(false);
    setPaperReady(false);
    setLetterRevealed(false);
    setSuggestionsOpen(false);
    setActiveSuggestion(-1);
    setCelebrations([]);
  };

  const revealLetter = () => {
    setLetterRevealed(true);
    celebrateOpening();
  };

  const fallbackMessage = recipient
    ? `Nhân ngày Nhà giáo Việt Nam 20/11, em xin gửi đến ${recipient.name} lời tri ân chân thành nhất. Cảm ơn ${recipient.name} đã luôn tận tâm chia sẻ tri thức, kiên nhẫn động viên và truyền cho học trò niềm tin để trưởng thành. Kính chúc ${recipient.name} thật nhiều sức khỏe, niềm vui và luôn tìm thấy hạnh phúc trong hành trình gieo chữ.`
    : '';

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden text-[#4A1722]">
      <RosePetalBackground />
      <BackgroundMusic />

      <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full border border-[#BE123C]/15 bg-white/80 text-[#BE123C] shadow-sm">
            <Flower2 size={20} strokeWidth={1.6} />
          </span>
          <span className="font-serif text-lg font-semibold tracking-wide text-[#63162A]">
            Nét phấn
          </span>
        </div>
        <span className="rounded-full border border-[#BE123C]/15 bg-white/60 px-3 py-1.5 text-xs tracking-[0.16em] text-[#BE123C]">
          20 · 11
        </span>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        {stage === 'input' ? (
          <motion.section
            key="tribute-gate"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -14 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
            className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 pb-12 pt-6 sm:px-8"
          >
            <article className="relative w-full overflow-hidden rounded-[2rem] border border-[#E8C9CD] bg-white/90 px-6 py-9 text-center shadow-[0_24px_80px_-40px_rgba(113,28,49,0.3)] backdrop-blur-sm sm:px-12 sm:py-12">
              <span className="absolute -right-14 -top-20 size-56 rounded-full border border-[#F1DADD] opacity-70" />
              <span className="absolute -right-5 -top-11 size-36 rounded-full border border-[#F1DADD] opacity-70" />
              <span className="relative mx-auto flex size-14 items-center justify-center rounded-full border border-[#BE123C]/20 bg-[#FFF1F2] text-[#BE123C]">
                <Flower2 size={24} strokeWidth={1.4} />
              </span>
              <p className="relative mt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#A55C6C]">
                Ngày Nhà giáo Việt Nam · 20.11
              </p>
              <h1 className="relative mt-4 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] text-[#5A1428] sm:text-5xl">
                Một lời tri ân
                <br />
                <span className="font-normal italic text-[#BE123C]">
                  gửi người gieo chữ.
                </span>
              </h1>
              <div className="relative mx-auto my-6 h-px w-14 bg-[#BE123C]/35" />
              <p className="relative mx-auto max-w-xl font-serif text-lg leading-8 text-[#651A2E]">
                Kính gửi Ban Giám hiệu và toàn thể Hội đồng Sư phạm
                <br />
                <span className="font-sans text-sm leading-7 text-[#795A60] sm:text-base">
                  Trường TH&THCS Bình Sơn
                </span>
              </p>
              <p className="relative mx-auto mt-3 max-w-xl text-sm leading-7 text-[#795A60] sm:text-base">
                Nhân ngày 20/11, xin gửi thầy cô lòng biết ơn chân thành vì
                những bài học, sự tận tâm và yêu thương đã nâng đỡ chúng em
                trên hành trình trưởng thành.
              </p>
            </article>

            <div className="relative mt-7 w-full max-w-xl">
              <label
                htmlFor="teacher-name"
                className="mb-2 block pl-1 text-left text-xs font-medium uppercase tracking-[0.14em] text-[#8A626A]"
              >
                Thiệp này xin gửi đến
              </label>
              <div className="relative">
                <div className="flex items-center gap-3 rounded-2xl border border-[#E7CDD1] bg-white/95 px-4 py-3 shadow-sm shadow-[#BE123C]/5 transition focus-within:border-[#BE123C]/45 focus-within:ring-4 focus-within:ring-[#BE123C]/5">
                  <Search size={18} className="shrink-0 text-[#A55C6C]" />
                  <input
                    id="teacher-name"
                    type="text"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded={suggestionsOpen && suggestions.length > 0}
                    aria-controls="teacher-suggestions"
                    aria-activedescendant={
                      activeSuggestion >= 0
                        ? `teacher-option-${suggestions[activeSuggestion]?.id}`
                        : undefined
                    }
                    autoComplete="off"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setSuggestionsOpen(true);
                      setActiveSuggestion(-1);
                    }}
                    onFocus={() => {
                      if (name.trim()) {
                        setSuggestionsOpen(true);
                      }
                    }}
                    onBlur={() => {
                      window.setTimeout(() => setSuggestionsOpen(false), 120);
                    }}
                    onKeyDown={handleNameKeyDown}
                    placeholder="Nhập họ tên thầy hoặc cô..."
                    className="w-full bg-transparent py-1 text-sm text-[#4A1722] outline-none placeholder:text-[#B4959B] sm:text-base"
                  />
                </div>

                <AnimatePresence>
                  {suggestionsOpen && name.trim() && (
                    <motion.div
                      id="teacher-suggestions"
                      role="listbox"
                      aria-label="Gợi ý thầy cô"
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
                      className="mt-2 overflow-hidden rounded-2xl border border-[#E7CDD1] bg-[#FFFDFD] p-1.5 text-left shadow-xl shadow-[#5A1428]/10"
                    >
                      {suggestions.length > 0 ? (
                        suggestions.map((teacher, index) => (
                          <button
                            id={`teacher-option-${teacher.id}`}
                            key={teacher.id}
                            type="button"
                            role="option"
                            aria-selected={activeSuggestion === index}
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => selectSuggestion(teacher)}
                            className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                              activeSuggestion === index
                                ? 'bg-[#FFF1F2]'
                                : 'hover:bg-[#FFF7F8]'
                            }`}
                          >
                            <span>
                              <span className="block text-sm font-medium text-[#5A1428]">
                                {teacher.name}
                              </span>
                              <span className="mt-0.5 block text-xs text-[#A0787F]">
                                {teacher.role} · {teacher.department}
                              </span>
                            </span>
                            <ArrowRight
                              size={15}
                              className="shrink-0 text-[#BE123C]/60"
                            />
                          </button>
                        ))
                      ) : (
                        <p className="px-3 py-3 text-xs leading-5 text-[#8A626A]">
                          Chưa có tên phù hợp trong danh sách. Bạn vẫn có thể
                          mở thiệp với tên vừa nhập.
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={openGreeting}
                disabled={!name.trim()}
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#BE123C] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#BE123C]/20 transition hover:-translate-y-0.5 hover:bg-[#A40F34] hover:shadow-xl hover:shadow-[#BE123C]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BE123C] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
              >
                Mở Thiệp Tri Ân
                <ArrowRight size={16} />
              </button>
              <p className="mt-3 text-center text-xs text-[#A0787F]">
                Có thể nhập tên có dấu hoặc không dấu.
              </p>
            </div>
          </motion.section>
        ) : !letterRevealed && recipient ? (
          <motion.section
            key="sealed-envelope"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.32 }}
            className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 pb-10 pt-5 sm:px-8"
          >
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="mb-9 text-center"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#A55C6C]">
                Một lời thương đang chờ được mở
              </p>
              <h1 className="mt-3 font-serif text-3xl font-medium text-[#5A1428] sm:text-4xl">
                Thiệp gửi riêng đến
              </h1>
              <p className="mt-2 text-base text-[#8A626A]">{recipient.name}</p>
            </motion.div>

            <div
              className="relative w-[min(84vw,26rem)]"
              style={{ perspective: 1200 }}
            >
              <div className="relative aspect-[1.42/1]">
                <div className="absolute inset-0 rounded-[1.25rem] border-2 border-[#BE123C] bg-[#FFE4E6] shadow-[0_24px_70px_-35px_rgba(113,28,49,0.42)]" />

                <motion.button
                  type="button"
                  disabled={!paperReady}
                  onClick={revealLetter}
                  aria-label={`Chạm vào tờ thư để đọc lời tri ân gửi ${recipient.name}`}
                  initial={{ y: '120%', scale: 0.82, opacity: 0 }}
                  animate={
                    flapOpened
                      ? { y: '-37%', scale: 0.96, opacity: 1 }
                      : { y: '120%', scale: 0.82, opacity: 0 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onAnimationComplete={() => {
                    if (flapOpened) {
                      setPaperReady(true);
                    }
                  }}
                  className="absolute left-[8%] top-[13%] z-[1] flex h-[82%] w-[84%] flex-col items-center rounded-lg border border-[#E8C9CD] bg-[#FFFDFD] px-3 py-4 text-center shadow-lg shadow-[#5A1428]/10 transition-shadow enabled:cursor-pointer enabled:hover:shadow-xl enabled:focus-visible:outline-2 enabled:focus-visible:outline-offset-2 enabled:focus-visible:outline-[#BE123C] disabled:cursor-default sm:px-5 sm:py-5"
                >
                  <Flower2 size={20} className="text-[#BE123C]/70" />
                  <span className="mt-2 font-serif text-sm italic text-[#651A2E] sm:text-base">
                    Một lời tri ân dành riêng
                  </span>
                  <span className="mt-2 text-[10px] tracking-wide text-[#A0787F]">
                    {paperReady ? 'Chạm để đọc thư' : '20 tháng 11'}
                  </span>
                </motion.button>

                <div className="absolute inset-0 z-[2] overflow-hidden rounded-[1.15rem]">
                  <div
                    className="absolute inset-x-0 bottom-0 h-[78%] border-b border-[#BE123C]/70 bg-[#FFE4E6]"
                    style={{
                      clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                    }}
                  />
                </div>

                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: isOpening ? 180 : 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.85,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  onAnimationComplete={() => {
                    if (isOpening) {
                      setFlapOpened(true);
                    }
                  }}
                  style={{
                    transformOrigin: 'top center',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  }}
                  className="absolute inset-x-0 top-0 z-[4] h-[68%] rounded-t-[1.1rem] border-t-2 border-[#BE123C] bg-[#FFD0D8] shadow-sm"
                />

                {!isOpening && (
                  <button
                    type="button"
                    onClick={openEnvelope}
                    aria-label={`Chạm để mở thư gửi ${recipient.name}`}
                    className="absolute left-1/2 top-[56%] z-10 flex size-[4.25rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[3px] border-[#FFFDFD]/80 bg-[#BE123C] text-white shadow-[0_5px_18px_rgba(113,28,49,0.35)] transition hover:scale-105 hover:bg-[#A40F34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BE123C] sm:size-[4.75rem]"
                  >
                    <Flower2 size={19} strokeWidth={1.5} />
                    <span className="mt-0.5 text-[8px] font-medium leading-tight">
                      Chạm để
                      <br />
                      mở thư
                    </span>
                  </button>
                )}

                <p className="pointer-events-none absolute bottom-[14%] left-1/2 z-[5] max-w-[85%] -translate-x-1/2 truncate font-serif text-xs text-[#8F1937] sm:text-sm">
                  Kính gửi: {recipient.name}
                </p>
              </div>
            </div>

            <motion.p
              key={isOpening ? 'opening' : 'sealed'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center text-xs tracking-wide text-[#A0787F]"
            >
              {isOpening
                ? paperReady
                  ? 'Tờ thư đã sẵn sàng — chạm vào giấy để đọc lời tri ân.'
                  : 'Một lời tri ân đang được gửi đến người thương mến…'
                : 'Phong thư nhỏ gói ghém lòng biết ơn.'}
            </motion.p>
          </motion.section>
        ) : (
          <motion.section
            key="personal-letter"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 pb-20 pt-6 sm:px-8"
          >
            <motion.article
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 28,
                scale: shouldReduceMotion ? 1 : 0.92,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full overflow-hidden rounded-[2rem] border border-[#E8C9CD] bg-white/90 px-6 py-8 shadow-[0_24px_80px_-40px_rgba(113,28,49,0.3)] backdrop-blur-sm sm:px-12 sm:py-11"
            >
              <span className="absolute -right-14 -top-20 size-56 rounded-full border border-[#F1DADD] opacity-70" />
              <span className="absolute -right-5 -top-11 size-36 rounded-full border border-[#F1DADD] opacity-70" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#EAD5D8] bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#A55C6C]">
                    <Flower2 size={13} />
                    {recipient?.teacher?.department ?? 'Thiệp tri ân 20/11'}
                  </span>
                  <span className="font-serif text-2xl text-[#BE123C]/75">
                    20/11
                  </span>
                </div>
                <div className="my-7 h-px w-14 bg-[#BE123C]/40" />
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A0787F]">
                  {recipient?.teacher?.role ?? 'Một lời chúc gửi riêng'}
                </p>
                <h1 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-[-0.025em] text-[#5A1428] sm:text-4xl">
                  Kính gửi {recipient?.name},
                </h1>
                <blockquote className="mt-7 border-l-2 border-[#BE123C]/50 pl-4 font-serif text-lg italic leading-7 text-[#9B4C5E]">
                  “
                  {recipient?.teacher?.quote ??
                    'Cảm ơn người đã gieo những hạt mầm tri thức và yêu thương.'}
                  ”
                </blockquote>
                <p className="mt-7 text-[15px] leading-8 text-[#694C53] sm:text-base">
                  {recipient?.teacher?.message ?? fallbackMessage}
                </p>
                <p className="mt-7 font-serif text-base italic leading-7 text-[#A55C6C]">
                  Với tất cả lòng biết ơn,
                  <br />
                  những người học trò của thầy cô
                </p>
              </div>
            </motion.article>

            <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
              <AnimatePresence>
                {celebrations.map((celebration) => (
                  <motion.span
                    key={celebration.id}
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 text-xl text-[#BE123C]"
                    initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0.6, 1.15, 0.9],
                      x: celebration.x,
                      y: -celebration.y,
                      rotate: celebration.rotation,
                    }}
                    transition={{
                      duration: 1.65,
                      delay: celebration.delay,
                      ease: 'easeOut',
                    }}
                    onAnimationComplete={() =>
                      setCelebrations((current) =>
                        current.filter((item) => item.id !== celebration.id),
                      )
                    }
                  >
                    {celebration.symbol}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={startOver}
              className="fixed bottom-5 right-5 z-20 inline-flex items-center gap-1.5 rounded-full border border-[#BE123C]/20 bg-[#FFFDFD]/90 px-4 py-2.5 text-xs font-medium text-[#8F1937] shadow-sm backdrop-blur-sm transition hover:border-[#BE123C]/45 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BE123C] sm:bottom-7 sm:right-8"
            >
              <ArrowLeft size={14} />
              Nhập lại tên khác
            </button>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="relative z-10 px-5 pb-5 pt-2 text-center">
        <p className="text-[11px] tracking-wide text-[#A0787F]">
          Với lòng biết ơn · 20 tháng 11
        </p>
      </footer>
    </main>
  );
}
