import BarChart from "../components/charts/barChart"
import DoughnutChart from "../components/charts/doughnutChart"
import LineChart from "../components/charts/lineChart"
import MapChart from "../components/charts/mapChart"
import PieChart from "../components/charts/pieChart"

export default function Home() {
    return (
        <div className="h-full w-full">
            <div className="flex justify-center mb-6 text-lg text-white">Site Management</div>
            <div className="flex flex-col gap-y-8">
            <div className="grid grid-cols-2 gap-x-8">
                <BarChart name="Sample Bar" />
                <LineChart name="Sample Line" />
            </div>
            <div className="grid grid-cols-3 gap-x-8">
                <DoughnutChart name="Sample Doughnut" />
                <PieChart name="Sample Pie" />
                <MapChart name="Sample Map" />
            </div>
            </div>
        </div>
    )
}
