import React, { useState } from "react"
import ReactTooltip from "react-tooltip";
import Map from "./map";

const MapChart = (props: any) => {
    const [content, setContent] = useState("");
    return (
        <div className="bg-gray-900 rounded-2xl p-8 mr-8 mb-8">
            <h1 className="text-white flex justify-center">{props.name}</h1>
            <Map setTooltipContent={setContent} />
            <ReactTooltip className="bg-black text-white">{content}</ReactTooltip>
        </div>
    );
}

export default MapChart