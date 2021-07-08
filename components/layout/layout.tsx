import React, { useState } from "react"
import { Layout, Menu } from 'antd'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function PageLayout(props: any) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="min-h-full w-full flex flex-row" >
            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
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
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <div className="w-full">
                {props.children}
            </div>
        </div>
    );
}



export default PageLayout