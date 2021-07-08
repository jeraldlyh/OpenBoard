import React, { memo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num: any) => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const Map = ({ setTooltipContent }: { setTooltipContent: any }) => {
    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const { NAME, POP_EST } = geo.properties;
                                        setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "rgba(75, 192, 192, 0.2)",
                                            stroke: "rgba(75, 192, 192, 0.6)",
                                        },
                                        hover: {
                                            fill: "rgba(255, 99, 132, 0.2)",
                                            stroke: "rgba(255, 99, 132, 0.6)"
                                        },
                                        pressed: {
                                            fill: "rgba(255, 99, 132, 0.5)",
                                            stroke: "rgba(255, 99, 132, 0.6)"
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
            </ComposableMap>
        </>
    );
};

export default memo(Map);