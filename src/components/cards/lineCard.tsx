import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"

function LineCard(props: any) {
    const [ chartData, setChartData ]  = useState({})

    const Chart = () => {
        setChartData({
            labels: ["22/03", "23/03", "24/03", "25/03", "26/03", "27/03"],
            datasets: [{
                label: "# of Votes",
                data: [4,2,6,2,3,6,2,5,9,6],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
            }]
        })
    }

    useEffect(() => {
        Chart()
    }, [])

    return (
        <div className="border border-th-outline bg-th-background-secondary rounded-2xl px-8 py-6 shadow-th-shadow">
            <div className="px-3 text-center relative z-10">
                <h4 className="text-sm uppercase text-th-text">{props.name}</h4>
                <h3 className="text-3xl text-th-text font-semibold my-3">{props.stats}</h3>
                {
                    props.change[0] === "-" ?
                    <p className="text-xs text-red-500">▼ {props.change}%</p>
                    :
                    <p className="text-xs text-green-500">▲ {props.change}%</p>
                }
                
            </div>
            <div className="absolute bottom-0 inset-x-0">
                <canvas id="chart1" height="70"></canvas>
            </div>
        </div>
    )
}

export default LineCard