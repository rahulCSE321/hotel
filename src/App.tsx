import Header from './components/Header';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/WhyChooseUs';
import Rooms from './components/Rooms';
import Offers from './components/Offers';
import VacationPlan from './components/VacationPlan';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Facilities />
      <WhyChooseUs />
      <Rooms />
      <Offers />
      <VacationPlan />
      <Packages />
      <Testimonials />
      <Blog />
      <ImageGrid />
      <Footer />
    </div>
  );
}
