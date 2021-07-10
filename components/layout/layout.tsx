import React, { useState, useEffect, Fragment } from "react"
import { AiOutlineFundProjectionScreen, AiOutlineShoppingCart } from "react-icons/ai"
import { BsClipboardData, BsSearch } from "react-icons/bs"
import { FiHelpCircle } from "react-icons/fi"
import { HiOutlineBookOpen } from "react-icons/hi"
import { VscSymbolMisc } from "react-icons/vsc"
import { useRouter } from "next/router"
import DarkModeToggle from "react-dark-mode-toggle"
import { useTheme } from "next-themes"

function PageLayout(props: any) {
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)
    const [ searchValue, setSearchValue ] = useState("")

    useEffect(() => {
        setMounted(true)
        setTheme("dark")
    }, [])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const inactive = "flex items-center font-normal pl-7 py-2 text-sm border-l-4 border-white cursor-pointer hover:bg-blue-900 hover:border-l-4 hover:border-blue-500"
    const active = "flex items-center font-semibold pl-7 py-2 text-sm bg-blue-900 border-l-4 border-blue-500 cursor-pointer"

    if (!mounted) return null

    return (
        <Fragment>
            <div className="border-b border-gray-600 z-50 py-4 px-8 flex sticky top-0 justify-between items-center bg-white dark:bg-gray-900">
                <div className="flex h-10 items-center">
                    <BsClipboardData className="text-purple-400 dark:text-green-600 h-7 w-7"/>
                    <span className="border-r border-gray-600 ml-2 pr-9 mr-8 text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-red-500 dark:from-green-400 dark:to-blue-500">One<span className="font-bold">Board</span></span>
                    <BsSearch className="text-gray-400 h-4 w-4" />
                    <input value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search..." className="dark:bg-gray-900 bg-none dark:text-white focus:outline-none text-sm tracking-wide px-3 w-96" />
                </div>
                <DarkModeToggle
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                    size={50}
                    speed={4}
                />
            </div>
            
            {/* Menu bar */}
            <div className="overflow-y-scroll z-50 bg-gray-900 flex flex-col h-full w-60 fixed">
                <div className="pl-8 pt-5 pb-3 text-gray-400">
                    MENU
                </div>
                <div className={router.pathname === '/' ? active : inactive} onClick={() => router.push("/")}>
                    <AiOutlineFundProjectionScreen className="h-5 w-5 mr-2" />
                    Site Management
                </div>
                <div className={router.pathname === '/ecommerce' ? active : inactive} onClick={() => router.push("/ecommerce")}>
                    <AiOutlineShoppingCart className="h-5 w-5 mr-2" />
                    E-commerce
                </div>
                <div className={router.pathname === '/education' ? active : inactive} onClick={() => router.push("/education")}>
                    <HiOutlineBookOpen className="h-5 w-5 mr-2" />
                    Education
                </div>
                <div className={router.pathname === '/miscellaneous' ? active : inactive} onClick={() => router.push("/miscellaneous")}>
                    <VscSymbolMisc className="h-5 w-5 mr-2" />
                    Miscellaneous
                </div>
                <div className="pl-8 pt-8 pb-3 text-gray-400">
                    HELP
                </div>
                <div className={inactive}>
                    <FiHelpCircle className="h-5 w-5 mr-2" />
                    Documentation
                </div>
            </div>
            <div className="ml-60 px-10 pb-10 pt-8 dark:bg-black bg-gray-100 min-h-full">
                {props.children}
            </div>
        </Fragment>
    )
}

export default PageLayout