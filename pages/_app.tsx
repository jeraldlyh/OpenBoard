import "../styles/globals.css"
import 'antd/dist/antd.css';
import Layout from "../components/layout/layout"
import { ThemeProvider } from 'next-themes'

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
