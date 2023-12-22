import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Pesquisar from './pages/Pesquisar';
import Review from './pages/Reviews';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Music Review"
  }, [])


  return (
    <main style={{display: "flex"}}>
      <BrowserRouter className="Layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesquisar" element={<Pesquisar />} />
          <Route path="/reviews" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
