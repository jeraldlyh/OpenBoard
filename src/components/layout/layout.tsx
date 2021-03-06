import React, { useState, useEffect, Fragment } from "react"
import { AiOutlineFundProjectionScreen, AiOutlineShoppingCart, AiOutlineRead, AiOutlineSmile, AiOutlineFormatPainter } from "react-icons/ai"
import { BsClipboardData, BsSearch } from "react-icons/bs"
import { VscSymbolMisc } from "react-icons/vsc"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"
import { useAuthContext } from "../../context/authContext"


function Layout(props: any) {
    const router = useRouter()
    const { logoutFirebase, currentUser } = useAuthContext()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const inactive = "flex items-center font-normal pl-7 py-2 text-sm border-l-4 border-th-background-secondary text-th-text cursor-pointer hover:bg-th-background hover:text-th-accent hover:border-l-4 hover:border-th-accent"
    const active = "flex items-center font-semibold pl-7 py-2 text-sm bg-th-background border-l-4 border-th-accent text-th-accent cursor-pointer"
    const themes = [{ name: "Neon" }, { name: "Soft" }, { name: "Ruby" }, { name: "Dark" }, { name: "Basic" }];

    useEffect(() => {
        setMounted(true)

        if (currentUser) {                  // To remove later
            console.log(currentUser.uid)
        }
    }, [])

    const logoutUser = () => {
        logoutFirebase()
            .then(() => router.push("/login"))
    }

    if (!mounted) return null

    return (
        <Fragment>
            {/* Menu header */}
            <div className="z-50 border-b border-th-accent-secondary py-4 px-8 top-0 sticky flex justify-between items-center bg-th-background-secondary">
                <div className="flex items-center">
                    <BsClipboardData className="text-th-from h-7 w-7" />
                    <span className="cursor-default ml-2 pr-7 mr-10 text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-th-from to-th-to">One<span className="font-bold">Board</span></span>
                    <div className="flex items-center border border-th-accent-secondary rounded-full py-2 px-5">
                        <BsSearch className="text-th-text h-3 w-3" />
                        <input value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search..." className="bg-th-background-secondary text-th-text focus:outline-none text-sm tracking-wide pl-3 w-96" />
                    </div>
                </div>

                <div className="flex items-center gap-x-9">
                    <div className="flex items-center">
                        <label className="py-2 pl-4 pr-1 h-9 border border-th-accent-secondary rounded-l-full border-r-0 text-th-accent"><AiOutlineFormatPainter className="h-5 w-5" /></label>
                        <select
                            name="theme"
                            className="border-l-0 -ml-1 h-9 text-sm cursor-pointer focus:outline-none hover:border-th-accent hover:bg-th-accent hover:text-th-background bg-th-background-secondary border border-th-accent-secondary rounded-r-full text-th-text pl-2 pr-5"
                            onChange={e => setTheme(e.currentTarget.value)}
                            value={theme}
                        >
                            {themes.map(th => (
                                <option key={th.name.toLowerCase()} value={th.name.toLowerCase()}>
                                    {th.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div
                        className="cursor-pointer flex items-center border border-th-accent-secondary hover:border-th-accent hover:bg-th-accent hover:text-th-background text-th-text text-sm rounded-full h-9 px-5"
                        onClick={() => logoutUser()}
                    >
                        Logout
                    </div>
                </div>
            </div>

            <div>
                {/* Menu bar */}
                <div className="text-th-text border-r border-th-accent-secondary overflow-y-scroll scrollbar-hide bg-th-background-secondary h-full w-56 fixed">
                    <div className="cursor-default pl-8 pt-5 pb-2 text-th-accent text-sm">
                        MENU
                    </div>
                    <div className={router.pathname === "/" ? active : inactive} onClick={() => router.push("/")}>
                        <AiOutlineFundProjectionScreen className="h-5 w-5 mr-2" />
                        Site Management
                    </div>
                    <div className={router.pathname === "/ecommerce" ? active : inactive} onClick={() => router.push("/ecommerce")}>
                        <AiOutlineShoppingCart className="h-5 w-5 mr-2" />
                        E-commerce
                    </div>
                    <div className={router.pathname === "/education" ? active : inactive} onClick={() => router.push("/education")}>
                        <AiOutlineRead className="h-5 w-5 mr-2" />
                        Education
                    </div>
                    <div className={router.pathname === "/miscellaneous" ? active : inactive} onClick={() => router.push("/miscellaneous")}>
                        <VscSymbolMisc className="h-5 w-5 mr-2" />
                        Miscellaneous
                    </div>
                    <div className="cursor-default pl-8 pt-8 pb-2 text-th-accent text-sm">
                        HELP
                    </div>
                    <div className={router.pathname === "/documentation" ? active : inactive} onClick={() => router.push("/documentation")}>
                        <AiOutlineSmile className="h-5 w-5 mr-2" />
                        Documentation
                    </div>
                </div>
                <div className="ml-56 px-10 pb-10 pt-8 bg-th-background h-full overflow-y-scroll scrollbar-hide">
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}

export default Layout