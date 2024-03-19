import React from 'react'
import { Link } from "react-router-dom";

import "./nav.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                    <Link to="/IzakVillanueva2021103245" className="link">Izak</Link>
                    </li>
                    <li>
                    <Link to="/JesterCruzate2021102308" className="link">Jester</Link>
                    </li>
                    <li>
                        <Link to="/GhasuttPatarata2019135835" className="link">Ghasoot</Link>
                    </li>
                    <li>
                        <Link to="/JurichCeleste2021102215" className="link">Jurich</Link>
                    </li>
                    <li>
                        <Link to="/IvanneYabut2021107696" className="link">IC</Link>
                    </li>
                    <li>
                        <Link to="/JoseKam2021101249" className="link">Kam</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav