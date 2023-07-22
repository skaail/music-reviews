import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Pesquisar from './pages/Pesquisar';
import Reviews from './pages/Reviews';
import Sugestao from './pages/Sugestao';

function App() {
  return (
    <main style={{display: "flex"}}>
      <BrowserRouter className="Layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesquisar" element={<Pesquisar />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/sugestao" element={<Sugestao />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
