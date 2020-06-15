import React from "react"

import { darkGrey, green } from "../utils/color"
import Rate from "./Rate"

const Reviews = ({ name, date, star, body }) => {
    return (
        <div className="card" style={{ width: "432px", padding: "15px", margin: "15px", border: "none", borderRadius: 34 }}>
            <p style={{ color: darkGrey, padding: 0, margin: 0 }}>{name}</p>
            <p style={{ color: green, padding: 0, margin: 0 }}>{date}</p>
            <Rate count={star} />
            <p style={{ fontSize: 15 }}>{body}</p>
        </div>
    )
}

export default Reviews