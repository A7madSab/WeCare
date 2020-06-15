import React from "react"

import { offWhite } from "../utils/color"

const DealCard = ({ img, title }) => (
    <div className="card" style={{ width: "20rem", margin: "15px", border: "none", borderRadius: 34, background: 'linear-gradient(0deg, #7CC576 85%, #ffffff 50%)' }}>
        <img alt="DealCard" src={`/imgs/${img}`} className="card-img-top" />

        <div className="card-body">
            <p style={{ fontSize: 25, textAlign: "center", color: "white" }}>{title}</p>
            <p style={{ fontSize: 20, textAlign: "center", color: offWhite }}>Add To Cart</p>
        </div>
    </div>
)

export default DealCard
