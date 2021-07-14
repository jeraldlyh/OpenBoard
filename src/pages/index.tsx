import BarChart from "../components/charts/barChart"
import DoughnutChart from "../components/charts/doughnutChart"
import LineChart from "../components/charts/lineChart"
import MapChart from "../components/charts/mapChart"
import PieChart from "../components/charts/pieChart"
import StatsCard from "../components/cards/statsCard"
import Layout from "../components/layout/layout"
import Head from "next/head"
import { Fragment } from "react"
import { GetServerSideProps } from "next"
import nookies from "nookies"
import { verifyIdToken } from "../../firebase/firebaseAdmin"
import useUser from "../hooks/useUser"
import { useAuthContext } from "../context/authContext"

function Home() {
    const { currentUser } = useAuthContext()
    const { users, isLoading, isError } = useUser(currentUser ? currentUser.uid : null)

    return (
        <Fragment>
            <Head>
                <title>OneBoard | Site Management</title>
            </Head>
            <Layout>
                <div className="min-h-screen w-full">
                    <div className="flex text-xl font-bold text-th-text">Site Management</div>
                    <div className="flex mb-5 text-sm font-light text-th-text opacity-50">User management, Page views, Session statistics</div>
                    <div className="flex flex-col gap-y-8">
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-8 gap-x-8">
                            <StatsCard name="Users" stats="45,324" change="45.3" />
                            <StatsCard name="Page Views" stats="635,468" change="-15.2" />
                            <StatsCard name="Bounce Rate" stats="43%" change="21.6" />
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-8">
                            <BarChart name="Sample Bar" />
                            <LineChart name="Sample Line" />
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-8 gap-x-8">
                            <DoughnutChart name="Sample Doughnut" />
                            <PieChart name="Sample Pie" />
                            <MapChart name="Sample Map" />
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const cookies = nookies.get(context)
        const token = await verifyIdToken(cookies.token)
        if (!token) {
            return {
                redirect: {
                    destination: "/login",
                    permanent: false
                }
            }
        }
        return { props: token }
    } catch (error) {
        return { props: {} }
    }
}

export default Home