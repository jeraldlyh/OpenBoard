import React, { useState } from "react"
import { Layout, Menu, Switch } from 'antd'
import { AiOutlineFundProjectionScreen, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsClipboardData } from 'react-icons/bs'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { VscSymbolMisc } from 'react-icons/vsc'
import { useRouter } from "next/router"
import DarkModeToggle from "react-dark-mode-toggle"
import { useTheme } from 'next-themes'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function PageLayout(props: any) {
    const router = useRouter()
    const [collapsed, setCollapsed] = useState(false)
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    let defaultSelectedKey

    switch(router.pathname) {
        case '/':
            defaultSelectedKey = ['1']
            break
        case '/ecommerce':
            defaultSelectedKey = ['2']
            break
        case '/education':
            defaultSelectedKey = ['3']
            break
        case '/misc':
            defaultSelectedKey = ['4']
            break
    }

    return (
        <div className="min-h-screen w-full flex flex-row" >
            <Sider theme={theme as any} collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <Menu theme={theme as any} defaultSelectedKeys={defaultSelectedKey} mode="inline">
                    <Menu.Item icon={<BsClipboardData className="transform scale-150 -mt-1 mr-1"/>} >
                        <span className="text-xl dark:text-white font-light">One<span className="font-bold">Board</span></span>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="1" icon={<AiOutlineFundProjectionScreen />} onClick={() => router.push('/')}>
                        Site Management
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AiOutlineShoppingCart />} onClick={() => router.push('/ecommerce')}>
                        E-commerce
                    </Menu.Item>
                    <Menu.Item key="3" icon={<HiOutlineBookOpen />} onClick={() => router.push('/education')}>
                        Education
                    </Menu.Item>
                    <Menu.Item key="4" icon={<VscSymbolMisc />} onClick={() => router.push('/misc')}>
                        Misc
                    </Menu.Item>
                    {/* <SubMenu key="sub1" icon={<VscSymbolMisc />} title="Team">
                        <Menu.Item key="">Team 1</Menu.Item>
                        <Menu.Item key="">Team 2</Menu.Item>
                    </SubMenu> */}
                </Menu>
                <div className="flex justify-center mt-5">
                    {/* <Switch
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    /> */}
                    <DarkModeToggle
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                        size={50}
                        speed={4}
                    />
                </div>
            </Sider>
            <div className="w-full px-12 pt-6 pb-9 dark:bg-black bg-white">
                {props.children}
            </div>
        </div>
    );
}

export default PageLayout