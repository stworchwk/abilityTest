import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

class HeaderLayout extends Component {
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }} >
                Header
            </Header>
        )
    }
}

export default HeaderLayout;