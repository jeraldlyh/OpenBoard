import React, { useState } from "react"
import { Layout, Menu } from 'antd'
import {
    ShoppingCartOutlined,
    FundProjectionScreenOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { BsClipboardData } from 'react-icons/bs'
import { useRouter } from "next/router"

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function PageLayout(props: any) {
    const [collapsed, setCollapsed] = useState(false)
    const router = useRouter()

    return (
        <div className="min-h-screen w-full flex flex-row" >
            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <Menu theme="dark" className="bg-gray-900" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item className="" key="" icon={<BsClipboardData className="h-6 w-6 -mt-1"/>}>
                        <span className="text-xl text-white font-light">One<span className="font-bold">Board</span></span>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="1" icon={<FundProjectionScreenOutlined /> }>
                        Site Management
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                        E-commerce
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <div className="w-full px-12 pt-6 pb-9 bg-black">
                {props.children}
            </div>
        </div>
    );
}

export default PageLayout