import React, { useState, useEffect, Fragment } from "react"
import { AiOutlineFundProjectionScreen, AiOutlineShoppingCart, AiOutlineRead, AiOutlineSmile } from "react-icons/ai"
import { BsClipboardData, BsSearch } from "react-icons/bs"
import { VscSymbolMisc } from "react-icons/vsc"
import { useRouter } from "next/router"
import DarkModeToggle from "react-dark-mode-toggle"
import { useTheme } from "next-themes"
import Select from 'react-select'

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

    const inactive = "flex items-center font-normal pl-7 py-2 text-sm border-l-4 border-white cursor-pointer hover:bg-gray-100 hover:border-l-4 hover:border-blue-500"
    const active = "flex items-center font-semibold pl-7 py-2 text-sm bg-th-background border-l-4 border-blue-500 cursor-pointer"

    const themes = [{ name: 'Light' }, { name: 'Dark' }, { name: 'Emerald' }, { name: 'Pink' }];

    // const options = [
    //     { value: 'dark', label: 'Dark' },
    //     { value: 'light', label: 'Light' },
    //     { value: 'Red', label: 'Red' },
    //     { value: 'Blue', label: 'Blue' },
    //     { value: 'Rainbow', label: 'Rainbow' }
    // ]
    
    if (!mounted) return null

    return (
        <Fragment>
            <div className="border-b border-gray-600 z-50 py-4 px-8 flex sticky top-0 justify-between items-center bg-th-background dark:bg-gray-900">
                <div className="flex h-10 items-center">
                    <BsClipboardData className="text-purple-400 dark:text-green-600 h-7 w-7"/>
                    <span className="border-r border-gray-600 ml-2 pr-9 mr-8 text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-red-500 dark:from-green-400 dark:to-blue-500">One<span className="font-bold">Board</span></span>
                    <BsSearch className="text-gray-400 h-4 w-4" />
                    <input value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search..." className="dark:bg-gray-900 bg-white dark:text-white focus:outline-none text-sm tracking-wide px-3 w-96" />
                </div>
                {/* <DarkModeToggle
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                    size={50}
                    speed={4}
                /> */}
                {/* <Select options={options} defaultValue={options[0]} className="bg-none transform scale-90 w-28" /> */}

                <select
                    name="theme"
                    id="theme-select"
                    className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
                    onChange={e => setTheme(e.currentTarget.value)}
                    value={theme}
                    >
                    <option value="" disabled>Select Theme</option>
                    {themes.map((t) => (
                        <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
                        {t.name}
                        </option>
                    ))}
                </select>
            </div>
            
            {/* Menu bar */}
            <div className="overflow-y-scroll z-50 bg-th-background flex flex-col h-full w-60 fixed">
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
                    <AiOutlineRead className="h-5 w-5 mr-2" />
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
                    <AiOutlineSmile className="h-5 w-5 mr-2" />
                    Documentation
                </div>
            </div>
            <div className="ml-60 px-10 pb-10 pt-8 bg-th-background min-h-full">
                {props.children}
            </div>
        </Fragment>
    )
}

export default PageLayout