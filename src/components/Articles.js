import React from "react"
import { ArrowRightIcon } from '@primer/octicons-react'
import { darkGrey, green, grey } from "../utils/color"

const Articles = ({ img, title, auther, body }) => {
    return (
        <div className="card" style={{ width: "20rem", margin: "15px", border: "none", borderRadius: 34 }}>
            <img alt="articl" src={`/imgs/${img}`} className="card-img-top" style={{ borderTopLeftRadius: 34, borderTopRightRadius: 34 }} />

            <div className="card-body">
                <p style={{ fontSize: 20, textAlign: "center", color: darkGrey }}><strong>{title} </strong></p>
                <p style={{ fontSize: 15, alignContent: "flex-start", color: green }}>{auther} </p>
                <p style={{ fontSize: 15, textAlign: "left", color: grey }}>{body} </p>
                <ArrowRightIcon size={24} />
            </div>
        </div>
    )
}

export default Articles
