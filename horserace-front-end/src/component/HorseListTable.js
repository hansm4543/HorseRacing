import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';



function HorseListTable(props) {
  //let navigate = useNavigate(); 

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
        dataIndex: 'horseName',
        key: 'horseName',
        
        //fixed: 'left',
      },
        {
          title: 'Color',
          dataIndex: 'color',
          key: 'color',
          width: 150,
          render(text, record) {
            return {
              props: {
                style: { background: text }
              },
              children: <div>{text}</div>
            };
            }
        }
        /*
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          render: (record) => 
          <div>
            <Button onClick={() => routeChange(record)}> View race details </Button>
            </div>,
          
        },*/
    ];

    

  const routeChange = (record) =>{ 
    console.log(record);
  }

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);

  }


  return (
    <div>
        <Table columns={columns} dataSource={props.horses} scroll={{ x: 1500, y: 700 }}  onChange={onChange}/>
    </div>
  );
}

export default HorseListTable;