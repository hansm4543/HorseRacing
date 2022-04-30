import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import {addHorseRace, updateLoad, updateHorseRaces} from "../store/actions"
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
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

if((today.getHours()+1)< 10){
    var time2 = "0"+ (today.getHours()+1) + ":" + today.getMinutes();

}else if((today.getHours()+1) && (today.getMinutes()< 10)){
    var time2 = "0"+ (today.getHours()+1) + ":0" + today.getMinutes();

}else if(today.getMinutes()< 10){
    var time2 = (today.getHours()+1) + ":0" + today.getMinutes();

}else{
    var time2 = (today.getHours()+1) + ":" + today.getMinutes();

}

var dateTime = date+'T'+time;
var dateTime2 = date+'T'+time2;

function AddHorseRaceForm(){
    let navigate = useNavigate(); 
    const [state, dispatch] = useContext(Context);
    console.log(state)
    const [isLoading, setIsLoading] = useState(true);
    console.log(today)
    console.log(dateTime)
    useEffect(() =>{
        if(state.load.data[0]){
            fetch(href+'api/horseRace').then(res => {

                return res.json()

            }).then(data => {
                //console.log(data)
                dispatch(updateHorseRaces(data))
            
            }).catch(err => console.log(err))

            dispatch(updateLoad([false]))
        }

        console.log(state);
        setIsLoading(false)
    
    },[ isLoading])

    const routeChange = () =>{ 
        let path = `/main`; 
        navigate(path);
    }

    const onSubmit= () => {
        let timestamp =(document.querySelector("#date").value) +":00.000Z"
        console.log(timestamp);
        /**/
        axios.post(href+'api/horseRace/create', {
            horseracename: document.querySelector("#horseracename").value,
            place: document.querySelector("#place").value,
            date: timestamp,
            //status: document.querySelector("#status").value,

        }).then(response => {
            console.log(response);
            dispatch(updateLoad([true]))
            routeChange()

        }).catch(error => {
            console.log(error);
        });

    
        
    };

    if(isLoading === true){
        return(
        <div>
            Loading...
        </div>);
    }
    


    return(
        <div>
            <h1>Add a Horse Race Form</h1>

            <div className='detailedView'>
                
                
                <label>Name:
                <br></br>
                    <input type="text" id='horseracename'  size="50"/>
                </label>
                <br></br>
                
                <label>Place: 
                <br></br>
                    <input type="text" id='place'  size="50"/>
                </label>
                <br></br>
                <label>Date:
                <br></br>
                <input type="datetime-local" id="date" name="meeting-time" defaultValue={dateTime2} min={dateTime} max="2023-01-01T00:00"/>
                </label>
                <br></br>
                <br></br>
                <div id='UpdateButton'>
                <Button onClick={() => onSubmit()}> Submit </Button>
                </div>
            </div>
        </div>
    )
}
export default AddHorseRaceForm;