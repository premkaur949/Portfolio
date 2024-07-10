import Navbar from "./components/navbar/navbar";
import Intro from  "./components/Intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/Works/works";
import Certifications from "./components/Certifications/certifications";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Menu from "./components/Menu/menu";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Skills />
      <Works />
      <Certifications />
      <Contact />
      <Footer />
      <Menu />
      
    </div>
  );
}

export default App;


