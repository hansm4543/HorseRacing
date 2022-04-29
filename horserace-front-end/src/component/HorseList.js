


import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import {updateLoad} from "../store/actions"
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import HorseListTable from './HorseListTable';
function HorseList(props){   
    const [state, dispatch] = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);

   
    useEffect(() =>{
        console.log(props.horses)
        setIsLoading(false);
    },[isLoading])

    if(isLoading){
        return <div>
            Loading...
        </div>
        
    }

    return(
        <div className="">
            <h1>HorseList</h1>
            <HorseListTable horses={props.horses}/>
        </div>
    )
}

export default HorseList