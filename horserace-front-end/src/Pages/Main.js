import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import {updateHorseRaces, updateLoad} from "../store/actions"
import './Main.css';

import MyTable from '../component/MyTable'
import href from '../component/href'
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

function Main(){
    console.log(href)
    let navigate = useNavigate(); 
    const [state, dispatch] = useContext(Context);
    console.log(state.load.data[0])

    const [isLoading, setIsLoading] = useState(true);

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

        
        
    
    },[state, isLoading])
    
    const routeChange = () =>{ 
        let path = `/addHorseRaceForm`; 
        navigate(path);
    }

    const onClick= () => {
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
            <div className='mainPage'>
            <h1>HorseRaces Page</h1>
            <Button id="goToAddRaceBtn" onClick={onClick}>Click here to insert a Horse Race</Button>
            </div>
            <MyTable horseRaces={state.horseRaces.data} />
        </div>
    )
}
export default Main;