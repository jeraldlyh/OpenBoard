import React, { useState } from "react"
import ReactTooltip from "react-tooltip"
import Map from "./map"

function MapChart(props: any) {
    const [ content, setContent ] = useState("")
    
    return (
        <div className="border border-th-outline bg-th-background-secondary rounded-2xl px-8 pt-6 pb-7 shadow-th-shadow">
            <h1 className="text-th-text flex justify-center pb-5 font-semibold">{props.name}</h1>
            <Map setTooltipContent={setContent} />
            <ReactTooltip className="bg-black text-th-text">{content}</ReactTooltip>
        </div>
    )
}

export default MapChart