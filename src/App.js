import Home from './home';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Skills from './skills';
import About from './about';
import Portflio from './portflio';
import Contact from './contact';

  export default function App() {

  return (
  <>
 <Home/>
 <Skills/>
 <About/>
 <Portflio/>
 <Contact/>
  </>
  )
}