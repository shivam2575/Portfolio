import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
