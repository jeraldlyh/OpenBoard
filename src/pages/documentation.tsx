import Layout from "../components/layout/layout"
import Head from "next/head"
import { Fragment } from "react"

function Documentation() {
    return (
        <Fragment>
            <Head>
                <title>OneBoard | Documentation</title>
            </Head>
            <Layout>
                <div className="min-h-screen w-full">
                    <div className="flex text-xl font-bold text-th-text">Documentation</div>
                </div>
            </Layout>
        </Fragment>
    )
}

export default Documentation