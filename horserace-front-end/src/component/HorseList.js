


import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import {updateLoad} from "../store/actions"
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import HorseListTable from './HorseListTable';

function HorseList(props){ 
    console.log(props.raceID)  
    const [state, dispatch] = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const [bettings, setBettings] = useState([]);

    useEffect(() =>{
        if(isLoading){
           
            axios.post('http://localhost:5000/api/betting/hasBetted', {
                raceId: props.raceID,
                userEmail: state.auth.email,
                //userEmail: "annpit@hot.ee",
                //userEmail: "kringel@gmail.com",

            }).then(response => {
                console.log(response)

                if(response.data.length === 0) {
                // console.log(response.data);
                    
                    setBettings(response.data)
                    setIsLoading(false);
                }else{
                    
                            setBettings(response.data[0])
                            setIsLoading(false);

                }
                    
                    
                    

            }).catch(error => {
                console.log(error);
            });

        }
        
        //setIsLoading(false);
        console.log(bettings)
        console.log(bettings.hasOwnProperty('horseId'))
    },[isLoading, bettings])


    const eventHandler = () => {
        setIsLoading(true);
    };

    if(isLoading){
        return <div>
            Loading...
        </div>
        
    }
    if(bettings.hasOwnProperty('horseId') === true){
        return(
        <div className="">
            <h1>Horses in the race</h1>
            <p>Your bet is on horse that is shown in orange</p>
            <HorseListTable horses={props.horses} bets={bettings}/>
        </div>
        )

    }else{
        return(
            <div className="">
                <h1>Horses in the race</h1>
                <HorseListTable horses={props.horses} bets={bettings} eventHandler={eventHandler} raceID={props.raceID}/>
            </div>
        )
    }
}

export default HorseList