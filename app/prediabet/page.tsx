import Hero from '@/app/prediabet/components/Hero';
import QuizCTA from '@/app/prediabet/components/QuizCTA';
import DoctorIntro from '@/app/prediabet/components/DoctorIntro';
import ProgramBenefits from '@/app/prediabet/components/ProgramBenefits';
import ProgramSteps from '@/app/prediabet/components/ProgramSteps';
import Testimonials from '@/app/prediabet/components/Testimonials';
import FAQ from '@/app/prediabet/components/FAQ';
import FinalCTA from '@/app/prediabet/components/FinalCTA';
import TrustIndicators from '@/app/prediabet/components/TrustIndicators';
import Footer from '@/components/Footer';

export default function PrediabetProgram() {
  return (
    <main>
      <Hero />
      <QuizCTA />
      <DoctorIntro />
      <ProgramBenefits />
      <ProgramSteps />
      <Testimonials />
      <FAQ />
      <TrustIndicators />
      <FinalCTA />
      <Footer />
    </main>
  );
}