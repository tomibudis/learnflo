/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { cn } from '@/lib/utils';

import { motion } from 'framer-motion';

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: {
    regular: string;
    gradient: string;
  };
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  bottomImage?: {
    light: string;
    dark: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = 'Build products for everyone',
      subtitle = {
        regular: 'Designing your projects faster with ',
        gradient: 'the largest figma UI kit.',
      },
      description = 'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
      ctaText = 'Browse courses',
      ctaHref = '#',
      bottomImage = {
        light:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        dark: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      },
      ...props
    },
    ref,
  ) => {
    const [titleNumber, setTitleNumber] = React.useState(0);
    const titles = React.useMemo(
      () => ['amazing knowledge', 'wonderful user interface', 'beautiful digital experience'],
      [],
    );

    React.useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (titleNumber === titles.length - 1) {
          setTitleNumber(0);
        } else {
          setTitleNumber(titleNumber + 1);
        }
      }, 2000);
      return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
      <div className={cn('relative', className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen dark:bg-lime-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(132,204,22,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(163,230,53,0.3),rgba(255,255,255,0))]" />
        <section className="relative max-w-full mx-auto z-1">
          <div className="max-w-screen-xl z-10 mx-auto px-4 pt-48 pb-20 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
              <h1 className="gap-1 text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit flex items-center">
                {title}
              </h1>
              <h1
                className="text-4xl 
              md:text-6xl tracking-tighter text-center font-regular"
              >
                <span className="text-spektr-cyan-50">{subtitle.regular}</span>
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold"
                      initial={{ opacity: 0, y: '-100' }}
                      transition={{ type: 'spring', stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                      }
                    >
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-lime-300 dark:from-lime-300 dark:to-lime-500">
                        {title}
                      </span>
                    </motion.span>
                  ))}
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">{description}</p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bef264_0%,#84cc16_50%,#bef264_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-lime-200/20 via-lime-400/30 to-transparent dark:from-lime-300/5 dark:via-lime-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-lime-300/30 hover:via-lime-500/40 hover:to-transparent dark:hover:from-lime-400/10 dark:hover:via-lime-500/30 transition-all sm:w-auto py-4 px-10"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
              </div>
            </div>
            {bottomImage && (
              <div className="mt-32 mx-10 relative z-10">
                <img
                  src={bottomImage.light}
                  className="w-full shadow-lg rounded-lg border border-gray-200 dark:hidden"
                  alt="Dashboard preview"
                />
                <img
                  src={bottomImage.dark}
                  className="hidden w-full shadow-lg rounded-lg border border-gray-800 dark:block"
                  alt="Dashboard preview"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    );
  },
);
HeroSection.displayName = 'HeroSection';

export { HeroSection };
