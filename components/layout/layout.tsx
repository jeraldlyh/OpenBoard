import React, { useState, useEffect } from "react"
import { Layout, Menu, Switch } from "antd"
import { AiOutlineFundProjectionScreen, AiOutlineShoppingCart } from "react-icons/ai"
import { BsClipboardData } from "react-icons/bs"
import { HiOutlineBookOpen } from "react-icons/hi"
import { VscSymbolMisc } from "react-icons/vsc"
import { useRouter } from "next/router"
import DarkModeToggle from "react-dark-mode-toggle"
import { useTheme } from "next-themes"
import { BsSearch } from "react-icons/bs";

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function PageLayout(props: any) {
    const router = useRouter()
    const [ collapsed, setCollapsed ] = useState(false)
    const { theme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        setMounted(true)
        setTheme("dark")
    }, [])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    let defaultSelectedKey

    switch(router.pathname) {
        case "/":
            defaultSelectedKey = ["1"]
            break
        case "/ecommerce":
            defaultSelectedKey = ["2"]
            break
        case "/education":
            defaultSelectedKey = ["3"]
            break
        case "/misc":
            defaultSelectedKey = ["4"]
            break
    }

    if (!mounted) return null

    return (
        <div className="min-h-screen w-full flex flex-col" >
            <div className="z-50 py-4 px-8 justify-between flex items-center sticky top-0 bg-white dark:bg-gray-900">
                <div className="flex items-center">
                    <BsClipboardData className="text-purple-400 dark:text-green-600 h-5 w-5 mr-2"/>
                    <span className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-red-500 dark:from-green-400 dark:to-blue-500">One<span className="font-bold">Board</span></span>
                    
                    <div className="border-r border-gray-primary h-6 ml-10 mr-9"></div>
                    <BsSearch className="text-gray-400" />
                    <input autoFocus={router.pathname == "/search"} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="input" name="" id="" placeholder="Search..." className="dark:bg-gray-900 bg-none dark:text-white focus:outline-none text-sm tracking-wide font-normal px-3 leading-3 w-96 h-10 py-1" />
                </div>
                <DarkModeToggle
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                    size={50}
                    speed={4}
                />
            </div>
            <div className="flex">
            <Sider className="h-screen overflow-y-scroll" theme={theme as any} collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <Menu theme={theme as any} defaultSelectedKeys={defaultSelectedKey} mode="inline">
                    <Menu.Item key="1" icon={<AiOutlineFundProjectionScreen />} onClick={() => router.push("/")}>
                        Site Management
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AiOutlineShoppingCart />} onClick={() => router.push("/ecommerce")}>
                        E-commerce
                    </Menu.Item>
                    <Menu.Item key="3" icon={<HiOutlineBookOpen />} onClick={() => router.push("/education")}>
                        Education
                    </Menu.Item>
                    <Menu.Item key="4" icon={<VscSymbolMisc />} onClick={() => router.push("/miscellaneous")}>
                        Miscellaneous
                    </Menu.Item>
                    {/* <SubMenu key="sub1" icon={<VscSymbolMisc />} title="Team">
                        <Menu.Item key="">Team 1</Menu.Item>
                        <Menu.Item key="">Team 2</Menu.Item>
                    </SubMenu> */}
                </Menu>
                <div className="flex justify-center mt-5">
                    {/* <Switch
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    /> */}
                    
                </div>
            </Sider>
            <div className="w-full h-screen overflow-y-scroll px-12 pt-6 dark:bg-black bg-gray-100">
                {props.children}
            </div>
            </div>
        </div>
    )
}

export default PageLayout