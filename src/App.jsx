import Navbar from "./components/nav-bar/NavBar";
import Hero from "./components/hero/Hero";
import Services from "./components/my-services/Services";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Music from "./components/my-music/Music";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Services" title="What I Offer" />
        <Services />
        <About />
        <Title subTitle="Music" title="Latest Work" />
        <Music />
        <Title subTitle="Contact Me" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
