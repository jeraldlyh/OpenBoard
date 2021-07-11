import BarChart from "../components/charts/barChart"
import LineChart from "../components/charts/lineChart"
import MapChart from "../components/charts/mapChart"
import Layout from "../components/layout/layout"
import Head from "next/head"
import { Fragment } from "react"

export default function Education() {
    return (
        <Fragment>
            <Head>
                <title>OneBoard | Education</title>
            </Head>
            <Layout>
                <div className="min-h-screen w-full">
                    <div className="flex text-xl font-bold text-th-text">Education</div>
                    <div className="flex mb-5 text-sm font-light text-th-text-secondary opacity-50">Courses, Professors, Books</div>
                    <div className="flex flex-col gap-y-8">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-8">
                        <BarChart name="Sample Bar" />
                        <LineChart name="Sample Line" />
                    </div>
                    <div className="grid grid-cols-1 gap-x-8">
                        <MapChart name="Sample Map" />
                    </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}
