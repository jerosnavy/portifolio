import './App.css';
import AboutUs from './Components/Body/AboutUs';
import Contact from './Components/Body/Contact';
import Portifolio from './Components/Body/Portifolio';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="">
       <Header/>
       <AboutUs/>
       <Portifolio/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
