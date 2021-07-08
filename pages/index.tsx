import BarChart from "../components/charts/barChart"
import DoughnutChart from "../components/charts/doughnutChart"
import LineChart from "../components/charts/lineChart"
import MapChart from "../components/charts/mapChart"
import PieChart from "../components/charts/pieChart"
import Layout from "../components/layout/layout"

export default function Home() {
    return (
        <Layout>
            <div className="bg-black h-full w-full pt-8 pl-8 grid grid-cols-2">
                <BarChart name="Sample Bar" />
                <LineChart name="Sample Line" />
                <DoughnutChart name="Sample Doughnut" />
                {/* <PieChart name="Sample Pie" /> */}
                <MapChart name="Sample Map" />
            </div>
        </Layout>
    )
}
