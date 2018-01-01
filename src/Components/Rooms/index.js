import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import { connect } from 'react-redux';

import { roomTableColumn } from './../../tableColumns/roomTableColumn';
import { getRooms } from './../../store/actions/rooms';

class Rooms extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRooms()
    }

    render() {
        return (
            <Table columns={roomTableColumn} dataSource={this.props.rooms} />
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