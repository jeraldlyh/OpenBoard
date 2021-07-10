import React, { useState } from "react"
import ReactTooltip from "react-tooltip"
import Map from "./map"

function MapChart(props: any) {
    const [content, setContent] = useState("")
    return (
        <div className="bg-th-background-secondary rounded-2xl p-8">
            <h1 className="text-th-text flex justify-center">{props.name}</h1>
            <Map setTooltipContent={setContent} />
            <ReactTooltip className="bg-black text-th-text">{content}</ReactTooltip>
        </div>
    )
}

export default MapChart