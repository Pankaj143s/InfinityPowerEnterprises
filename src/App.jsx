import Header from "./components/Header";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Services from "./sections/Services";
import About from "./sections/About";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
