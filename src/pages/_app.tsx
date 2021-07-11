import "../../styles/globals.css"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider defaultTheme="neon" themes={["neon", "soft", "ruby", "dark", "basic"]} >
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
