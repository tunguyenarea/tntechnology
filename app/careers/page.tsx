import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import BarNav from '@/app/ui/bar-nav';
import SectionOne from '@/app/ui/careers/section-one';
import SectionTwo from '@/app/ui/careers/section-two';
import SectionThree from '@/app/ui/careers/section-three';
import { Background } from '@/app/ui/background';

export default function Page() {
  return (
  <>

    <div className="">
      <div className="">
        <Background />
      </div>
      <Header />
      <BarNav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>

  </>
  );
}
