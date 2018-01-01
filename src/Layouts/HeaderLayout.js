import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

class HeaderLayout extends Component {
    render() {
        return (
            <Header className="stw-header">
                ระบบห้องพัก
            </Header>
        )
    }
}

export default HeaderLayout;