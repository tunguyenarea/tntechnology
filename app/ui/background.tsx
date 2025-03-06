'use client';

import React from 'react';
import { BackgroundLines } from '@/components/ui/background-lines';
import { TextGenerateEffect } from '@/components/ui/text-generate';
import Link from 'next/link';

const words = `We use digital technology and AI to support business growth through high quality system development`;

export function Background() {
  return (
  <>
    <BackgroundLines className="flex items-center justify-center w-full h-dvh flex-col px-4">
      <div className="bg-clip-text text-transparent text-center py-2 md:py-10 relative z-20 tracking-tight">
        <TextGenerateEffect words={words} />
      </div>
      <p className="max-w-xl mx-auto text-sm md:text-xl text-neutral-700 dark:text-neutral-400 text-center">
        Explore your career with <label className="text-sky-500 font-bold">TN Technology.</label>
      </p>
      <Link href="#learn" className="z-30">
      <button className="bg-black hover:shadow-xl hover:shadow-sky-300 dark:bg-white hover:bg-sky-500 hover:text-white rounded-full w-fit text-white dark:text-black px-4 py-2 m-2">
        Learn more
      </button>
      </Link>
    </BackgroundLines>
  </>
  );
}
