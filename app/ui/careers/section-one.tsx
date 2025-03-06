import Spot from '@/app/ui/spot';
import {
  IconArtboard,
  IconBrandVscode,
  IconBrandTabler,
  IconCalculator,
  IconCheckbox,
  IconChartDonut,
  IconPlane,
  IconUsersGroup
} from '@tabler/icons-react';

export default function SectionOne() {
  return (
  <>

    <div>
      <div id="learn">
        <Spot />
      </div>

      <div className="w-dvw bg-[url('/globe-bg.png')] bg-no-repeat bg-cover">
        <div className="flex items-center justify-center mt-12">
          <div className="flex-col text-2xl sm:text-4xl flex items-center justify-center m-8 text-center">
            <h1 className="flex justify-center font-bold text-sky-500">Our culture</h1>
            <p>These behaviors show what it means to be a true <label className="text-sky-500 font-bold">TN Technology.</label></p>
            <p>It&apos;s what we strive for and celebrate as a team.</p>
          </div>
        </div>
        <div className="sm:ml-[15%] sm:mr-[15%] shadow-xl shadow-sky-500 rounded-xl sm:p-12 p-3">
        <div className="grid grid-cols-2 text-center gap-8 sm:gap-16">
          <div className="bg-neutral-100 rounded-xl sm:hover:shadow-xl sm:hover:shadow-sky-500 transition-all">
            <h1 className="font-bold text-sky-500 text-xl"><IconArtboard stroke={2} className="inline-block" />Own it</h1>
            <p>Have pride in the work you do and own it from start to finish. </p>
            <p>Do what you say you&apos;re gonna do without being nudged.</p>
          </div>

          <div className="bg-neutral-100 rounded-xl sm:hover:shadow-xl sm:hover:shadow-sky-500 transition-all">
            <h1 className="font-bold text-sky-500 text-xl"><IconBrandVscode stroke={2} className="inline-block" />Prove it</h1>
            <p>Know your numbers.</p>
            <p>Show evidence for decisions and proof later that they worked.</p>
            <p>This earns respect.</p>
          </div>

          <div className="bg-neutral-100 rounded-xl sm:hover:shadow-xl sm:hover:shadow-sky-500 transition-all">
            <h1 className="font-bold text-sky-500 text-xl"><IconBrandTabler stroke={2} className="inline-block" />Trim it</h1>
            <p>Work efficiently, and recognize when time is being wasted.</p>
            <p>Identify opportunities for improvement.</p>
          </div>

          <div className="bg-neutral-100 rounded-xl sm:hover:shadow-xl sm:hover:shadow-sky-500 transition-all">
            <h1 className="font-bold text-sky-500 text-xl"><IconCalculator stroke={2} className="inline-block" />Solve it</h1>
            <p>Present solutions not problems, and think for yourself.</p>
            <p>You have permission to create. Creation adds value.</p>
          </div>

          <div className="bg-neutral-100 rounded-xl sm:hover:shadow-xl sm:hover:shadow-sky-500 transition-all">
            <h1 className="font-bold text-sky-500 text-xl"><IconCheckbox stroke={2} className="inline-block" />Mean it</h1>
            <p>Share opinions honestly and respectfully.</p>
            <p>Don&apos;t be afraid to pick a side and defend it.</p>
          </div>

          <div className="bg-neutral-100 rounded-xl sm:hover:shadow-xl sm:hover:shadow-sky-500 transition-all">
            <h1 className="font-bold text-sky-500 text-xl"><IconChartDonut stroke={2} className="inline-block" />Feel it</h1>
            <p>Start with empathy. Not an assembly line.</p>
            <p>Take initiative and think with the customer in mind.</p>
          </div>

          <div className="bg-neutral-100 rounded-xl sm:hover:shadow-xl sm:hover:shadow-sky-500 transition-all">
            <h1 className="font-bold text-sky-500 text-xl"><IconPlane stroke={2} className="inline-block" />Ship it</h1>
            <p>Act with urgency and choose simple over complex.</p>
            <p>It&apos;s better to release something early and iterate on it than perfect it first.</p>
          </div>

          <div className="bg-neutral-100 rounded-xl sm:hover:shadow-xl sm:hover:shadow-sky-500 transition-all">
            <h1 className="font-bold text-sky-500 text-xl"><IconUsersGroup stroke={2} className="inline-block" />Team it</h1>
            <p>We&apos;re in this together and we&apos;re all on the same team.</p>
            <p>Take time to appreciate each other.</p>
          </div>
        </div>
        </div>
      </div>
    </div>

  </>
  );
}
