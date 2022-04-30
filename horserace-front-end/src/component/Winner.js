


import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import {updateLoad} from "../store/actions"
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
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


function Winner(props){   
    //console.log("winnercomponent")  
    //console.log(props)  
    //console.log(dateTime)  
    const [state, dispatch] = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const [winner, setWinner] = useState([]);

    useEffect(() =>{

        if(isLoading){
           
            axios.post('http://localhost:5000/api/winner/isWinner', {
                raceId: props.raceID,

            }).then(response => {
                console.log(response)

                if(response.data.length === 0) {
                // console.log(response.data);
                    
                    setWinner(response.data)
                    setIsLoading(false);
                }else{
                    
                    setWinner(response.data[0])
                    setIsLoading(false);

                }

            }).catch(error => {
                console.log(error);
            });

        }
        
        
        //setIsLoading(false);
        //console.log(winner)
        //console.log(bettings.hasOwnProperty('horseId'))
        //console.log(props.horses)
    },[isLoading, winner])


    const onDrawWinner = () => {
        //console.log(props.horses)
        let amount = props.horses.length;
        const rndInt = Math.floor(Math.random() * amount) + 1
        //console.log(rndInt)
        let winner = props.horses[rndInt - 1]._id;
        axios.post('http://localhost:5000/api/winner/create', {
            raceId: props.raceID,
            horseId: winner,
        }).then(response => {
            console.log(response)
            setIsLoading(true);
        }).catch(error => {
            console.log(error);
        });

        axios.put('http://localhost:5000/api/horseRace/update/'+ props.raceID.toString(), {
            status: "ended",
        }).then(response => {
            console.log(response)
            dispatch(updateLoad([false]))
        }).catch(error => {
            console.log(error);
        });

    };

    if(isLoading){
        return <div>
            Loading...
        </div>
        
    }
    if(winner.hasOwnProperty('horseId') === true){
        if(props.yes === true){
            if(props.userHorse === winner.horseId){
                return(
                    <div className="">
                        <h1>You Won</h1>
                        <p>Horse that won's id is: {winner.horseId}</p>
                    </div>
                    )
            }else{
                return(
                <div className="">
                    <h1>You Lost</h1>
                    <p>Horse that won's id is: {winner.horseId}</p>
                </div>
                )
            }

        }else{
            return(
                <div className="">
                    <h1>You did not bet on this race</h1>
                    <p>Horse that won's id is: {winner.horseId}</p>
                </div>
            )
        }
        

    }else{
        //console.log(dateTime+":00.000Z")
        //console.log(props.date)
        if((dateTime+":00.000Z") > props.date){
            return(
                <div className="">
                    <h1>Time to pull a winner</h1>
                    <Button onClick={() => onDrawWinner()}> Submit </Button>
                    
                </div>
            )
        }else{
            return(
                <div className="">
                    <h1>Race has not started yet.</h1>
                    <p>Race will start at: {props.date}</p>
                    
                </div>
            )
        }
    }
}

export default Winner