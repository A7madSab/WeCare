import React from "react"
import { Link } from "react-scroll"

const NavButton = ({ to }) => (
    <li className="nav-item">
        <Link to={to} spy={true} smooth={true} duration={250} offset={-70} className="nav-link" >
            <button type="button" className="btn" style={{ color: "white", border: "none" }}>
                {to}
            </button>
        </Link>
    </li>
)

export default NavButton
