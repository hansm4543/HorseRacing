import { useNavigate } from "react-router-dom";
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import axios from 'axios'


function HorseListTable(props) {
  const [state, dispatch] = useContext(Context);
  console.log(props)
  let horseid = props.bets.horseId
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
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          render: (record) => 
          <div>
            <Button onClick={() => onBet(record)}> Bet on this horse </Button>
            </div>,
          
        },
    ];
    const columns2 = [
      
      {
        title: 'Id',
        dataIndex: '_id',
        key: '_id',
        width: 100,
        render(text, record) {
          return {
            props: {
              style: { background: text === horseid ? "orange" : "white" }
            },
            children: <div>{text}</div>
          };
        },
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

    
  const onBet= (record) => {
    console.log(record);
    axios.post('http://localhost:5000/api/betting/create', {
        raceId: props.raceID,
        horseId: record._id,
        userEmail: state.auth.email,
        //status: document.querySelector("#status").value,

    }).then(response => {
        console.log(response);
        props.eventHandler();

    }).catch(error => {
        console.log(error);
    });


    
};

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);

  }

  if(props.bets.hasOwnProperty('horseId') === true){
    return(
      <div>
        <Table columns={columns2} dataSource={props.horses} scroll={{ x: 1500, y: 700 }}  onChange={onChange}/>
      </div>
    )
  }

  return (
    <div>
        <Table columns={columns} dataSource={props.horses} scroll={{ x: 1500, y: 700 }}  onChange={onChange}/>
    </div>
  );
}

export default HorseListTable;