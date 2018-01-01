import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

const { Sider } = Layout;

const logo = {
    height: '32px',
    background: 'rgba(255,255,255,.2)',
    margin: '16px'
};

class SiderLayout extends Component {
    render() {
        return (
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
                <div style={logo} >Logo</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="dashboard" />
                            <span className="nav-text">Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/rooms">
                            <Icon type="appstore-o" />
                            <span className="nav-text">Rooms</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default SiderLayout;