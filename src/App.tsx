

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WhyChooseUs from './components/chooseUs';
import ClientsWeServe from './components/clientWeServe';
import Header from './components/header';
import Hero from './components/hero';
import MovingCompanyBanner from './components/movingCompany';
import SmoothMoveBlog from './components/smoothMove';
import OurTeam from './components/team';
import FreeQuote from './components/freeQuote';
import MoveAndClean from "./components/moveAndClean";
import Footer from "./components/footer";
import GeographicCoverage from "./components/geographicalCoverage";


function App() {


  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurTeam />
      <MovingCompanyBanner />
      <GeographicCoverage />
      <ClientsWeServe />
      <SmoothMoveBlog />
      <FreeQuote />
      <MoveAndClean />
      <Footer />
    </>
  );
}

export default App
