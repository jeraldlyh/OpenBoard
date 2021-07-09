import BarChart from "../components/charts/barChart"
import LineChart from "../components/charts/lineChart"
import MapChart from "../components/charts/mapChart"

export default function Misc() {
    return (
        <div className="h-full w-full">
            <div className="flex text-xl font-bold dark:text-white">Miscellaneous</div>
            <div className="flex mb-5 text-sm font-light dark:text-white opacity-50">Reviews, Posts, Comments</div>
            <div className="flex flex-col gap-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8">
                <BarChart name="Sample Bar" />
                <LineChart name="Sample Line" />
            </div>
            <div className="grid grid-cols-1 gap-x-8 mb-9">
                <MapChart name="Sample Map" />
            </div>
            </div>
        </div>
    )
}
