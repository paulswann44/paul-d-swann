import './App.css';
import Header from "./components/header/header";
import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Contacts from "./components/contacts/contacts";
import Resume from "./components/resume/resume";
import 'bootstrap/dist/css/bootstrap.min.css';
import './img/bench.jpeg';
import Portfolio from "./components/portfolio/portfolio";
// import 'aos/dist/aos.css';




function App() {
  return (
      <div>

      <Header/>
          <Hero/>
          <About/>
          <Resume/>
          <Portfolio />
          <Contacts/>



      </div>
  );
}

export default App;
