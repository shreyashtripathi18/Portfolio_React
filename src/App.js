import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Layout/>
      {/* <About/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
