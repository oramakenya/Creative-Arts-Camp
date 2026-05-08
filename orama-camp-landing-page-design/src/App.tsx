import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProgramSchedule from './components/ProgramSchedule';
import Showcase from './components/Showcase';
import Safety from './components/Safety';
import Testimonials from './components/Testimonials';
import ParentSection from './components/ParentSection';
import VolunteerSection from './components/VolunteerSection';
import DonorSection from './components/DonorSection';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <ProgramSchedule />
      <Showcase />
      <Safety />
      <Testimonials />
      <ParentSection />
      <VolunteerSection />
      <DonorSection />
      <Footer />
    </div>
  );
}
