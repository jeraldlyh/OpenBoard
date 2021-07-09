import React, { useState } from "react"
import { Layout, Menu } from 'antd'
import { AiOutlineFundProjectionScreen, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsClipboardData } from 'react-icons/bs'
import { BiBookBookmark } from 'react-icons/bi'
import { VscSymbolMisc } from 'react-icons/vsc'
import { useRouter } from "next/router"

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function PageLayout(props: any) {
    const [collapsed, setCollapsed] = useState(false)
    const router = useRouter()
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
            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <Menu theme="dark" className="bg-gray-900" defaultSelectedKeys={defaultSelectedKey} mode="inline">
                    <Menu.Item className="hover:cursor-default" key="" icon={<BsClipboardData className="h-6 w-6 -mt-1"/>} >
                        <span className="text-xl text-white font-light">One<span className="font-bold">Board</span></span>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="1" icon={<AiOutlineFundProjectionScreen />} onClick={() => router.push('/')}>
                        Site Management
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AiOutlineShoppingCart />} onClick={() => router.push('/ecommerce')}>
                        E-commerce
                    </Menu.Item>
                    <Menu.Item key="3" icon={<BiBookBookmark />} onClick={() => router.push('/education')}>
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
            </Sider>
            <div className="w-full px-12 pt-6 pb-9 bg-black">
                {props.children}
            </div>
        </div>
    );
}

export default PageLayout