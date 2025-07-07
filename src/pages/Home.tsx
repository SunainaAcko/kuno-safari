import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
import CtaSection from '../components/home/CtaSection';
import MoreInfo from '../components/home/MoreInfo';
import SpecializedPackages from '../components/home/SpecializedPackages';
import ExperienceSection from '../components/home/Experiences';
import SurpriseSection from '../components/home/SurpriseSection';
import MomentsSection from '../components/home/MomentsSection';

const Home = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Nivedya | Creative Digital Agency';
  }, []);

  return (
    <>
      <HeroSection />
      <MoreInfo />
      <SpecializedPackages />
      <ExperienceSection />
      <SurpriseSection />
      <MomentsSection />
      <TestimonialsSection />
      <ContactSection />
      <CtaSection />
    </>
  );
};

export default Home;