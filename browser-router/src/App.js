import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        {/* Importing the Footer component after nested routes */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
