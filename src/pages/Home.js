import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import Testimonials from "../components/Testimonials";
import WhyJoinUs from "./WhyJoinUs";
import ContactForm from "./Contact";

function Home() {
  return (
    <div>
      
      <HeroSection />
      <AboutSection />
      <WhyJoinUs />
      <EventsSection />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default Home;
