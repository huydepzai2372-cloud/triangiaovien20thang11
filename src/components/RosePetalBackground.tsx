'use client';

import { useEffect, useRef } from 'react';

type Petal = {
  x: number;
  y: number;
  size: number;
  speed: number;
  sway: number;
  swaySpeed: number;
  phase: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
};

const PETAL_COLORS = ['#FDA4AF', '#BE123C'] as const;
const MAX_PETALS = 24;
const SMALL_SCREEN_BREAKPOINT = 640;

function createPetal(width: number, height: number, startAbove = false): Petal {
  return {
    x: Math.random() * width,
    y: startAbove ? -Math.random() * height : Math.random() * height,
    size: 8 + Math.random() * 10,
    speed: 10 + Math.random() * 17,
    sway: 8 + Math.random() * 17,
    swaySpeed: 0.6 + Math.random() * 0.8,
    phase: Math.random() * Math.PI * 2,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.7,
    color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    opacity: 0.4 + Math.random() * 0.3,
  };
}

function drawPetal(
  context: CanvasRenderingContext2D,
  petal: Petal,
  time: number,
) {
  const drift = Math.sin(time * petal.swaySpeed + petal.phase) * petal.sway;

  context.save();
  context.translate(petal.x + drift, petal.y);
  context.rotate(petal.rotation + Math.sin(time + petal.phase) * 0.18);
  context.globalAlpha = petal.opacity;
  context.fillStyle = petal.color;
  context.beginPath();
  context.moveTo(0, -petal.size);
  context.bezierCurveTo(
    petal.size * 0.75,
    -petal.size * 0.55,
    petal.size * 0.65,
    petal.size * 0.6,
    0,
    petal.size,
  );
  context.bezierCurveTo(
    -petal.size * 0.65,
    petal.size * 0.6,
    -petal.size * 0.75,
    -petal.size * 0.55,
    0,
    -petal.size,
  );
  context.fill();
  context.restore();
}

export default function RosePetalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let petals: Petal[] = [];
    let animationFrame = 0;
    let previousTime = 0;
    let elapsed = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = width < SMALL_SCREEN_BREAKPOINT ? 8 : MAX_PETALS;
      petals = Array.from({ length: count }, () => createPetal(width, height));
      draw(0);
    };

    const draw = (deltaSeconds: number) => {
      if (!context) {
        return;
      }

      elapsed += deltaSeconds;
      context.clearRect(0, 0, width, height);

      for (const petal of petals) {
        if (!reducedMotion.matches) {
          petal.y += petal.speed * deltaSeconds;
          petal.rotation += petal.rotationSpeed * deltaSeconds;

          if (petal.y - petal.size > height) {
            Object.assign(petal, createPetal(width, height, true));
          }
        }

        drawPetal(context, petal, elapsed);
      }
    };

    const animate = (time: number) => {
      if (document.hidden) {
        animationFrame = 0;
        return;
      }

      const deltaSeconds = previousTime
        ? Math.min((time - previousTime) / 1000, 0.05)
        : 0;
      previousTime = time;
      draw(deltaSeconds);

      if (!reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(animate);
      } else {
        animationFrame = 0;
      }
    };

    const startAnimation = () => {
      if (!document.hidden && !animationFrame) {
        previousTime = 0;
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      } else {
        startAnimation();
      }
    };

    const handleMotionChange = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      draw(0);
      startAnimation();
    };

    resize();
    startAnimation();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    reducedMotion.addEventListener('change', handleMotionChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedMotion.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FFFDFD]"
    >
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#FFE4E6] opacity-70 blur-[100px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#FFE4E6] opacity-70 blur-[100px]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
