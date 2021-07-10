import BarChart from "../components/charts/barChart"
import DoughnutChart from "../components/charts/doughnutChart"
import LineChart from "../components/charts/lineChart"
import MapChart from "../components/charts/mapChart"
import PieChart from "../components/charts/pieChart"
import Layout from "../components/layout/layout"

export default function Site() {
    return (
        <Layout>
            <div className="h-full w-full">
                <div className="flex text-xl font-bold text-th-text">Site Management</div>
                <div className="flex mb-5 text-sm font-light text-th-text opacity-50">User management, Page views, Session statistics</div>
                <div className="flex flex-col gap-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8">
                    <BarChart name="Sample Bar" />
                    <LineChart name="Sample Line" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-8">
                    <DoughnutChart name="Sample Doughnut" />
                    <PieChart name="Sample Pie" />
                    <MapChart name="Sample Map" />
                </div>
                </div>
            </div>
        </Layout>
    )
}
