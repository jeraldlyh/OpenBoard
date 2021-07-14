import "../../styles/globals.css"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import AuthProvider from "../context/authContext"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider defaultTheme="neon" themes={["neon", "soft", "ruby", "dark", "basic"]} >
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    )
}

export default MyApp
