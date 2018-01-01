import React from 'react';

export const roomTableColumn = [
    {
        title: 'หมายเลขห้อง',
        dataIndex: 'number',
        key: 'number',
        render: text => <a href="#">ห้อง {text}</a>,
    }, {
        title: 'ราคา / เดือน',
        dataIndex: 'price',
        key: 'price',
    }, {
        title: 'ค่าไฟ / หน่วย',
        dataIndex: 'electric_rate',
        key: 'electric_rate',
    }, {
        title: 'ค่าน้ำ / เดือน',
        dataIndex: 'water_rate',
        key: 'water_rate',
    }];