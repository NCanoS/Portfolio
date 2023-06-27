import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <Header/>
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
