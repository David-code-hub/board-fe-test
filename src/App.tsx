import Banner from "./components/Banner.component";
import GameCarouselSection from "./components/GameCarousel.component";
import CallToActionSection from "./components/CallToAction.component";
import FiltersSection from "./components/Filters.component";
import TestimonialsSection from "./components/Testimonials.components";
import FooterSection from "./components/layout/Footer.component";
import "./App.css";

function App() {
  return (
    <>
      <Banner />
      <GameCarouselSection />
      <CallToActionSection />
      <FiltersSection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}

export default App;
