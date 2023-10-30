import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        {/* hwllo */}
      </Routes>
    </>
  );
}

export default App;
