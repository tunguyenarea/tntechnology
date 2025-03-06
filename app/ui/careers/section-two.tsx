'use client';

import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/grid';
import {
  IconBrandHtml5,
  IconDeviceMobileMessage,
  IconAi,
  IconMailCheck,
  IconDeviceGamepad2,
  IconRobot,
  IconBrandAws,
} from '@tabler/icons-react';
import { TypewriterEffectSmooth } from '@/components/ui/text-type';
import {
  webImage,
  mobileImage,
  aiImage,
  erpcrmImage,
  devopsImage,
  rpaImage
} from '@/app/lib/placeholder-data';
import styles from '@/app/utils/slide.module.css';
import Image from 'next/image';

const webbrands = [ ...webImage, ...webImage, ...webImage ];
const mobilebrands = [ ...mobileImage, ...mobileImage, ...mobileImage ];
const aibrands = [ ...aiImage, ...aiImage, ...aiImage ];
const erpcrmbrands = [ ...erpcrmImage, ...erpcrmImage, ...erpcrmImage ];
const devopsbrands = [ ...devopsImage, ...devopsImage, ...devopsImage ];
const rpabrands = [ ...rpaImage, ...rpaImage, ...rpaImage ];

const WebSlide = () => (
      <div className={`${styles.slideFlex} ${styles.slideSlip}`}>
        {webbrands.map((brand) => {
          return (
            <Image className="w-16 sm:w-24 m-1"
              key={`${brand.name} ${Math.random()}`}
              src={brand.url}
              width={120}
              height={2}
              alt={`${brand.name} image`}
            />
          );
        })}
      </div>
);

const MobileSlide = () => (
      <div className={`${styles.slideFlex} ${styles.slideSlip}`}>
        {mobilebrands.map((brand) => {
          return (
            <Image className="w-16 sm:w-24 m-2 sm:m-6"
              key={`${brand.name} ${Math.random()}`}
              src={brand.url}
              width={120}
              height={2}
              alt={`${brand.name} image`}
            />
          );
        })}
      </div>
);

const AiSlide = () => (
      <div className={`${styles.slideFlex} ${styles.slideSlip}`}>
        {aibrands.map((brand) => {
          return (
            <Image className="w-16 sm:w-24 m-1"
              key={`${brand.name} ${Math.random()}`}
              src={brand.url}
              width={120}
              height={2}
              alt={`${brand.name} image`}
            />
          );
        })}
      </div>
);

const ErpCrmSlide = () => (
      <div className={`${styles.slideFlex} ${styles.slideSlip}`}>
        {erpcrmbrands.map((brand) => {
          return (
            <Image className="w-16 sm:w-24 m-1 sm:m-3"
              key={`${brand.name} ${Math.random()}`}
              src={brand.url}
              width={120}
              height={2}
              alt={`${brand.name} image`}
            />
          );
        })}
      </div>
);

const UnitySlide = () => (
  <div className="flex justify-center m-6">
    <Image
      src="/unity.svg"
      width={300}
      height={2}
      alt="Unity"
    />
  </div>
);

const RpaSlide = () => (
      <div className={`${styles.slideFlex} ${styles.slideSlip}`}>
        {rpabrands.map((brand) => {
          return (
            <Image className="w-16 sm:w-24 m-1 sm:m-3"
              key={`${brand.name} ${Math.random()}`}
              src={brand.url}
              width={120}
              height={2}
              alt={`${brand.name} image`}
            />
          );
        })}
      </div>
);

const DevopsSlide = () => (
      <div className={`${styles.slideFlex} ${styles.slideSlip}`}>
        {devopsbrands.map((brand) => {
          return (
            <Image className="w-16 sm:w-24 m-1 sm:m-3"
              key={`${brand.name} ${Math.random()}`}
              src={brand.url}
              width={120}
              height={2}
              alt={`${brand.name} image`}
            />
          );
        })}
      </div>
);

const items = [
  {
    title: "Web developer",
    description: "Explore the birth of groundbreaking ideas and inventions in Web technology.",
    header: <WebSlide />,
    icon: <IconBrandHtml5 stroke={2} className="h-4 w-4 text-neutral-500" />,
    link: "#web",
  },
  {
    title: "Mobile developer",
    description: "Dive into the transformative power of mobile technology.",
    header: <MobileSlide />,
    icon: <IconDeviceMobileMessage stroke={2} className="h-4 w-4 text-neutral-500" />,
    link: "#mobile",
  },
  {
    title: "AI engineer and AI developer",
    description: "Discover the beauty of thoughtful design and functionality in AI technology.",
    header: <AiSlide />,
    icon: <IconAi stroke={2} className="h-4 w-4 text-neutral-500" />,
    link: "#ai",
  },
  {
    title: "ERP/CRM Systems, Decision Support Systems Engineer and Developer",
    description:
      "Build the impact of technology in communication and effective management in our lives.",
    header: <ErpCrmSlide />,
    icon: <IconMailCheck stroke={2} className="h-4 w-4 text-neutral-500" />,
    link: "#erpcrm",
  },
  {
    title: "Unity developer",
    description: "Join the quest for understanding and enlightenment about game and graphics.",
    header: <UnitySlide />,
    icon: <IconDeviceGamepad2 stroke={2} className="h-4 w-4 text-neutral-500" />,
    link: "#unity",
  },
  {
    title: "Robotic process automation",
    description: "Experience the thrill of turning ideas into reality automatically.",
    header: <RpaSlide />,
    icon: <IconRobot stroke={2} className="h-4 w-4 text-neutral-500" />,
    link: "#rpa",
  },
  {
    title: "DevOps Systems Engineer and DX Developer",
    description: "Embark on exciting journeys and discoveries with cloud computing and databases.",
    header: <DevopsSlide />,
    icon: <IconBrandAws stroke={2} className="h-4 w-4 text-neutral-500" />,
    link: "#devops",
  },
];

const words = [
  { text: "Open" },
  { text: "positions" },
  { text: "at" },
  {
    text: "TN Technology",
    className: "text-sky-500",
  },
];

export default function SectionTwo() {
  return (
  <>

    <div className="flex justify-center mt-32">
      <TypewriterEffectSmooth words={words} />
    </div>
    <BentoGrid className="max-w-4xl mx-auto shadow-xl shadow-sky-500 rounded-xl">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          link={item.link}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>

  </>
  );
}
