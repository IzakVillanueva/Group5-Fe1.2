import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Template />}>
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
