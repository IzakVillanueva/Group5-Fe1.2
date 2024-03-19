import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Izak from "./components/pages/izak/Izak";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/izak" element={<Izak />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
