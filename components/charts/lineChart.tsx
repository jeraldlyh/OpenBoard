import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"

function LineChart(props: any) {
    const [chartData, setChartData]  = useState({})    

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
        <div className="bg-th-background-secondary rounded-2xl p-8">
            <h1 className="text-th-text flex justify-center">{props.name}</h1>
            <div className="h-full">
                <Line
                    data={chartData}
                    options={{
                        responsive:true,
                        scales:{
                            yAxes:[ {
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                            ]
                        },
                        elements: {
                            line: {
                                tension: 0.35
                            }
                        }
                    }}
                    type="line"
                />
            </div>
        </div>
    )
}

export default LineChart