

import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import {Context} from "../store";
//import {updatePosts, removePost, updateLoad, changePost} from "../store/actions"
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";
import './DetailedView.css';
import {addHorseRace, updateLoad, updateHorseRaces} from "../store/actions"

function RaceParticipants(){
    let navigate = useNavigate(); 
    const [state, dispatch] = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() =>{
        
        
        
    
    },[state, isLoading, ])



    if(isLoading === true){
        return(
        <div>
            Loading...
        </div>);
    }

    
    return(
        <div>
            <h1>Something went wrong</h1>
            
        </div>
    )
    
}
export default RaceParticipants;