import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './Routes/Home';
import PortFolio from './Routes/PortFolio';
import Show from './Routes/Show';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-portfolio" element={<PortFolio />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
