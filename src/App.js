import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <>
      <Layout/>
      {/* <About/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
