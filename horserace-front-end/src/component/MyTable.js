import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';



function MyTable(props) {
  let navigate = useNavigate(); 

    const columns = [
      
      {
        title: 'Id',
        dataIndex: '_id',
        key: '_id',
        width: 150,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: 75,
      },
        {
          title: 'Name',
          width: 100,
          dataIndex: 'horseracename',
          key: 'horseracename',
          //fixed: 'left',
          sorter: (a, b) => a.customer.localeCompare(b.customer),
        },
        {
          title: 'Place',
          dataIndex: 'place',
          key: 'place',
          width: 150,
          sorter: (a, b) => a.trackingNo.localeCompare(b.trackingNo),
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          width: 150,
          sorter: (a, b) => a.status.localeCompare(b.status),
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          render: (record) => 
          <div>
            <Button onClick={() => routeChange(record)}> View race details </Button>
            </div>,
          
        },
    ];

    

  const routeChange = (record) =>{ 
    let path = `/horseRace/${record._id}`; 
    navigate(path);
  }

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
    console.log(props.horseRaces)
  }


  return (
    <div>
        <Table columns={columns} dataSource={props.horseRaces} scroll={{ x: 1500, y: 700 }}  onChange={onChange}/>
    </div>
  );
}

export default MyTable;