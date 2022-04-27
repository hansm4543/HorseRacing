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
        width: 100,
      },
      {
        title: 'Name',
        width: 150,
        dataIndex: 'horseracename',
        key: 'horseracename',
        
        //fixed: 'left',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: 150,
        sorter: (a, b) => a.date.localeCompare(b.date),
      },
        
        {
          title: 'Place',
          dataIndex: 'place',
          key: 'place',
          width: 150,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          width: 100,
          filters: [
            {
              text: 'initialized',
              value: 'initialized',
            },
            {
              text: 'ended',
              value: 'ended',
            },
          ],
          onFilter: (value, record) => record.status.indexOf(value) === 0,
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