import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Izak from "./components/pages/IzakVillanueva2021103245/Izak";
import Ghasutt from "./components/pages/GhasuttPatarata2019135835/Ghasutt";
import Ivanne from "./components/pages/IvanneYabut2021107696/Ivanne";
import Jester from "./components/pages/JesterCruzate2021102308/Jester";
import Jose from "./components/pages/JoseKam2021101249/Jose";
import Jurich from "./components/pages/JurichCeleste2021102215/Jurich";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/IzakVillanueva2021103245" element={<Izak />} />
            <Route path="/GhasuttPatarata2019135835" element={<Ghasutt />} />
            <Route path="/IvanneYabut2021107696" element={<Ivanne />} />
            <Route path="/JesterCruzate2021102308" element={<Jester />} />
            <Route path="/JoseKam2021101249" element={<Jose />} />
            <Route path="/JurichCeleste2021102215" element={<Jurich />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
