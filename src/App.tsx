import React,{useEffect} from "react";
import Hero from './components/Hero';
import './assets/fonts/KallistoBold.otf';
import './assets/fonts/AeonikTRIAL-Regular.otf';
import './styles/style.scss';
import Service from './components/Service';
import About from './components/About';
import MarqueeText from './components/MarqueeText';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Hero />
      <MarqueeText />
      <Service />
      <About />
      <Footer />
    </>
  );
}

export default App;
