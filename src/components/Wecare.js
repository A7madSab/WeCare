import React from 'react'
import {
    green,
    grey
} from "../utils/color"

const Wecare = ({ size }) => {
    return (
        <span>
            <span style={{ color: green, fontSize: size, border: "none" }}>
                We
            </span>
            <span style={{ color: grey, fontSize: size, border: "none" }}>
                Care
            </span>
        </span>
    )
}

export default Wecare
