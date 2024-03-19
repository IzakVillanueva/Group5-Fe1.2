import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      
        {/* Importing the Footer component after nested routes */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
