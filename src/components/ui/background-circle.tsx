'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface BackgroundCirclesProps {
  title?: string;
  description?: string;
  className?: string;
  variant?: keyof typeof COLOR_VARIANTS;
}

const COLOR_VARIANTS = {
  primary: {
    border: ['border-emerald-500/60', 'border-cyan-400/50', 'border-slate-600/30'],
    gradient: 'from-lime-500/30',
  },
  secondary: {
    border: ['border-violet-500/60', 'border-fuchsia-400/50', 'border-slate-600/30'],
    gradient: 'from-violet-500/30',
  },
  tertiary: {
    border: ['border-orange-500/60', 'border-yellow-400/50', 'border-slate-600/30'],
    gradient: 'from-orange-500/30',
  },
  quaternary: {
    border: ['border-purple-500/60', 'border-pink-400/50', 'border-slate-600/30'],
    gradient: 'from-purple-500/30',
  },
  quinary: {
    border: ['border-red-500/60', 'border-rose-400/50', 'border-slate-600/30'],
    gradient: 'from-red-500/30',
  }, // red
  senary: {
    border: ['border-blue-500/60', 'border-sky-400/50', 'border-slate-600/30'],
    gradient: 'from-blue-500/30',
  }, // blue
  septenary: {
    border: ['border-gray-500/60', 'border-gray-400/50', 'border-slate-600/30'],
    gradient: 'from-gray-500/30',
  },
  octonary: {
    border: ['border-red-500/60', 'border-rose-400/50', 'border-slate-600/30'],
    gradient: 'from-red-500/30',
  },
  lime: {
    border: ['border-lime-500/60', 'border-lime-400/50', 'border-lime-300/30'],
    gradient: 'from-lime-500/30',
  },
} as const;

const AnimatedGrid = () => (
  <motion.div
    className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
    animate={{
      backgroundPosition: ['0% 0%', '100% 100%'],
    }}
    transition={{
      duration: 40,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'linear',
    }}
  >
    <div className="h-full w-full [background-image:repeating-linear-gradient(100deg,#64748B_0%,#64748B_1px,transparent_1px,transparent_4%)] opacity-20" />
  </motion.div>
);

export function BackgroundCircles({
  title = 'Background Circles',
  className,
  variant = 'octonary',
}: BackgroundCirclesProps) {
  const variantStyles = COLOR_VARIANTS[variant];

  return (
    <div
      className={clsx(
        'relative flex h-screen w-full items-center justify-center overflow-hidden',
        'bg-white dark:bg-black/5',
        className,
      )}
    >
      <AnimatedGrid />
      <motion.div className="absolute h-[280px] w-[280px]">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={clsx(
              'absolute inset-0 rounded-full',
              'border-2 bg-gradient-to-br to-transparent',
              variantStyles.border[i],
              variantStyles.gradient,
            )}
            animate={{
              rotate: 360,
              scale: [1.5, 1.05 + i * 0.05, 1.5],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            <div
              className={clsx(
                'absolute inset-0 rounded-full mix-blend-screen',
                `bg-[radial-gradient(ellipse_at_center,${variantStyles.gradient.replace(
                  'from-',
                  '',
                )}/10%,transparent_70%)]`,
              )}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1
          className={clsx(
            'text-3xl font-medium tracking-tight md:text-5xl',
            'bg-gradient-to-b from-slate-950 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent',
            'drop-shadow-[0_0_32px_rgba(94,234,212,0.4)]',
          )}
        >
          {title}
        </h1>

        <motion.p
          className="mt-6 text-lg md:text-xl dark:text-white text-slate-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm md:text-lg dark:text-neutral-400 text-neutral-700 max-w-2xl mx-auto py-4">
            This isn&apos;t just another LMS. It&apos;s built for solo creators, coaches, or anyone
            who wants to teach in their own style.
            <span className="dark:text-lime-300 font-medium">
              {' '}
              No gatekeepers, no limitations
            </span>{' '}
            – just you and your students.
          </p>
        </motion.p>
      </motion.div>

      <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0F766E/30%,transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2DD4BF/15%,transparent)] blur-[80px]" />
      </div>
    </div>
  );
}
