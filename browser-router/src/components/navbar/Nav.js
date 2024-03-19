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
                    <Link to="/izak" className="link">Izak</Link>
                    </li>
                    <li>
                    <Link to="/effect" className="link">Jester</Link>
                    </li>
                    <li>
                        <Link to="/map" className="link">Ghasoot</Link>
                    </li>
                    <li>
                        <Link to="/hooks" className="link">Jurich</Link>
                    </li>
                    <li>
                        <Link to="/hooks" className="link">IC</Link>
                    </li>
                    <li>
                        <Link to="/hooks" className="link">Kam</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav