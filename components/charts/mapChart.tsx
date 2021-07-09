import React, { useState } from "react"
import ReactTooltip from "react-tooltip"
import Map from "./map"

function MapChart(props: any) {
    const [content, setContent] = useState("")
    return (
        <div className="dark:bg-gray-900 bg-white rounded-2xl p-8">
            <h1 className="dark:text-white flex justify-center">{props.name}</h1>
            <Map setTooltipContent={setContent} />
            <ReactTooltip className="bg-black dark:text-white">{content}</ReactTooltip>
        </div>
    )
}

export default MapChart