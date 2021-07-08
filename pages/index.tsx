import { BarChart, LineChart, DoughnutChart, PieChart, Map } from "./chart"

export default function Home() {
    return (
        <div className="bg-black h-full w-screen pt-8 pl-8 grid grid-cols-2">
            <BarChart name="Sample Bar" />
            <LineChart name="Sample Line" />
            <DoughnutChart name="Sample Doughnut" />
            {/* <PieChart name="Sample Pie" /> */}
            <Map name="Sample Map" />
        </div>
    )
}
