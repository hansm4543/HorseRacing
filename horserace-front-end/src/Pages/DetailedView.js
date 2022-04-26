import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import {Context} from "../store";
//import {updatePosts, removePost, updateLoad, changePost} from "../store/actions"
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";
import './DetailedView.css';


let i;

function DetailedView(){
    let navigate = useNavigate(); 

    let element;
    const itemID = window.location.href.split("/item/")[1];
    console.log(itemID)
    const [state, dispatch] = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);

    const [detailedelement, setElement] = useState([]);

    useEffect(() =>{
        if(state.load.data[0]){
            axios.get('../Shipments.json')
            .then(data => {
                //dispatch(updatePosts(data.data))

            }).catch(err => console.log(err))

           //dispatch(updateLoad([false]))
        }


        //console.log(state);
        console.log(state.posts.data);

        for(i= 0; i<state.posts.data.length; i++){
            if(state.posts.data[i].orderNo == itemID){
                //element = state.posts.data[i];
                //console.log(element)
                setElement(state.posts.data[i])
                //console.log(detailedelement)
            }
        }
        setIsLoading(false)
        console.log(state)
    
    },[state, isLoading])

    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
      }

    const onSubmit= () => {
        let values = [document.querySelector("#Consignee").value, document.querySelector("#Customer").value,document.querySelector("#Date").value, document.querySelector("#OrderNo").value, document.querySelector("#Status").value, document.querySelector("#TrackingNo").value]
        //console.log(itemID)
        console.log(values)
        //dispatch(changePost(values));
        routeChange()
    };


    if(isLoading === true){
        return(
        <div>
            Loading...
        </div>);
    }

    return(
        <div>
            <h1>DetailedView</h1>
            <div className='detailedView'>
                <h4>OrderNo:
                <br></br>
                    <input readOnly type="text" id='OrderNo'  value={detailedelement.orderNo} size="50"/>
                </h4>
                <br></br>
                <br></br>
                <label>Date:
                <br></br>
                    <input type="text" id='Date'  defaultValue={detailedelement.date} size="50"/>
                </label>
                <br></br>
                <label>Customer:
                <br></br>
                    <input type="text" id='Customer' defaultValue={detailedelement.customer} size="50"/>
                </label>
                <br></br>
                <label>TrackingNo: 
                <br></br>
                    <input type="text" id='TrackingNo'  defaultValue={detailedelement.trackingNo} size="50"/>
                </label>
                <br></br>
                <label>Status:
                <br></br>
                    <input type="text" id='Status'  defaultValue={detailedelement.status} size="50"/>
                </label>
                <br></br>
                
                <label>Consignee:
                <br></br>
                    <input type="text" id='Consignee'   defaultValue={detailedelement.consignee} size="50"/>
                </label>
                <br></br>
                <br></br>
                <div id='UpdateButton'>
                <Button onClick={() => onSubmit()}> Update </Button>
                </div>
            </div>

        </div>
    )
}
export default DetailedView;