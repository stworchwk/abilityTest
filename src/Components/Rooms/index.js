import React, { Component } from 'react';
import { Table, Row, Col, Button, Modal, Form, Input, Radio, Icon } from 'antd';
import { connect } from 'react-redux';

import { roomTableColumn } from './../../tableColumns/roomTableColumn';
import { getRooms } from './../../store/actions/rooms';

import CreateUserForm from './forms/CreateUserForm';

class Rooms extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRooms()
    }

    state = {
        visible: false,
    };
    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }

    render() {
        return (
            < div >
            <Row style={{
                marginBottom: '15px',
                textAlign: 'right'
            }}>
                <Col span={24}>
                    <Button type="primary" onClick={this.showModal}><Icon type="plus" /> เพิ่มห้องพัก</Button>
                </Col>
            </Row>

            <CreateUserForm
                ref={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
            />
            <Table columns={roomTableColumn} dataSource={this.props.rooms} />
            </div >
        )
    }
}

const mapStateToProps = state => ({
    rooms: state.rooms
})

const mapDispatchToProps = dispatch => ({
    getRooms: () => dispatch(getRooms())
})

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);