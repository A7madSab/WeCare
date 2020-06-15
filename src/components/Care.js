import React from "react"
import { green, grey } from "../utils/color"

const Care = ({ img, title, subtitle }) => (
    <div className="card" style={{ width: "16rem", margin: "15px", border: "none", borderRadius: 34 }}>
        <img alt="Care" src={`/imgs/${img}`} className="card-img-top" />

        <div className="card-body">
            <p style={{ fontSize: 25, textAlign: "center", color: green }}>{title}</p>
            <p style={{ fontSize: 14, textAlign: "center", color: grey }}>{subtitle}</p>
            <hr className="hr" />
        </div>

    </div>
)

export default Care
