import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Layout
import SiderLayout from './SiderLayout';
import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';
//Layout

//Components
import Dashboard from './../Components/Dashboard';
import Rooms from './../Components/Rooms';
//Components

const { Header, Content, Footer, Sider } = Layout;

class MasterLayout extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <SiderLayout />
                    <Layout>
                        <HeaderLayout />
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/rooms" component={Rooms} />
                            </div>
                        </Content>
                        <FooterLayout />
                    </Layout>
                </Layout>
            </Router>
        )
    }
}

export default MasterLayout;