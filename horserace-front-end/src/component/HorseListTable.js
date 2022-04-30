import { useNavigate } from "react-router-dom";
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import axios from 'axios'
import Winner from '../component/Winner';
import href from '../component/href'

var today = new Date();
if((today.getMonth()+1) < 10){
    var date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();
}else if(((today.getMonth()+1) < 10) && ((today.getDate()) < 10)){
    var date = today.getFullYear()+'-0'+(today.getMonth()+1)+'- 0'+today.getDate();
}else if(today.getDate() < 10){
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'- 0'+today.getDate();
}else{
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
}

if(today.getHours()< 10){
    var time = "0"+ today.getHours() + ":" + today.getMinutes();

}else if((today.getHours()< 10) && (today.getMinutes()< 10)){
    var time = "0"+ today.getHours() + ":0" + today.getMinutes();

}else if(today.getMinutes()< 10){
    var time = today.getHours() + ":0" + today.getMinutes();

}else{
    var time = today.getHours() + ":" + today.getMinutes();

}

var dateTime = date+'T'+time;

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
        width: 100,
        dataIndex: 'horseName',
        key: 'horseName',
        
        //fixed: 'left',
      },
        {
          title: 'Color',
          dataIndex: 'color',
          key: 'color',
          width: 100,
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
    const columns3 = [
      
      {
        title: 'Id',
        dataIndex: '_id',
        key: '_id',
        width: 100,
      },
      {
        title: 'Name',
        width: 100,
        dataIndex: 'horseName',
        key: 'horseName',
        
        //fixed: 'left',
      },
        {
          title: 'Color',
          dataIndex: 'color',
          key: 'color',
          width: 100,
          render(text, record) {
            return {
              props: {
                style: { background: text }
              },
              children: <div>{text}</div>
            };
            }
        },
        /*
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
        */
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
        width: 100,
        dataIndex: 'horseName',
        key: 'horseName',
        
        //fixed: 'left',
      },
        {
          title: 'Color',
          dataIndex: 'color',
          key: 'color',
          width: 100,
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
    axios.post(href+'api/betting/create', {
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
        <Winner raceID={props.raceID} date={props.date} userHorse={props.bets.horseId} horses={props.horses} yes={true}/>
        <Table columns={columns2} dataSource={props.horses} scroll={{ x: 1500, y: 700 }}  onChange={onChange}/>
      </div>
    )
  }

  if((dateTime+":00.000Z") > props.date){
    return (
      <div>
          <Winner raceID={props.raceID} date={props.date} horses={props.horses}/>
          <Table columns={columns3} dataSource={props.horses} scroll={{ x: 1500, y: 700 }}  onChange={onChange}/>
      </div>
    );
  }else{
    return (
      <div>
          <Winner raceID={props.raceID} date={props.date} horses={props.horses} yes={false}/>
          <Table columns={columns} dataSource={props.horses} scroll={{ x: 1500, y: 700 }}  onChange={onChange}/>
      </div>
    );
  }
  
}

export default HorseListTable;