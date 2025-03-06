import React from 'react';
import { Spotlight } from "@/components/ui/spotlight";
import {
  IconBrandNodejs,
  IconBrandJavascript,
  IconHeart,
  IconTimeDuration15
} from '@tabler/icons-react';

export default function Spot() {
  return (
    <div className="h-[50rem] sm:h-dvh w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 left-60 -top-20"
        fill="white"
      />
      <div className="flex-col">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-900 to-sky-400">
          Why should you join us?
        </h1>
        <div className="text-white text-xl m-10">
          <p><IconBrandNodejs stroke={2} className="inline-block m-2" />Work with smart people.</p>
          <p><IconHeart stroke={2} className="inline-block m-2" />Friendly and enthusiastic team members.</p>
          <p><IconBrandJavascript stroke={2} className="inline-block m-2" />Work with experts, become an expert in your field of interest.</p>
          <p><IconTimeDuration15 stroke={2} className="inline-block m-2" />Team of engineers with over 15 years of experience working in Earth.</p>
          </div>
      </div>
    </div>
  );
}
