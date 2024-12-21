 import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Testimonail from './components/Testimonail'

import { ToastContainer } from 'react-toastify';
 function App() {
   return (
  <>
  <ToastContainer/>  
  <Header />
  <About/>
  <Projects/>
  <Testimonail/>
  <Contact/>
  <Footer/>
 
  </>
   )
 }
 
 export default App