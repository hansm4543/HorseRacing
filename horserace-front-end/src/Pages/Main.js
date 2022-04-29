import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import {updateHorseRaces, updateLoad} from "../store/actions"

import MyTable from '../component/MyTable'
import AddHorseRaceForm from '../component/AddHorseRaceForm'
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

function Main(){
    let navigate = useNavigate(); 
    const [state, dispatch] = useContext(Context);
    console.log(state.load.data[0])

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        if(state.load.data[0]){
            fetch('http://localhost:5000/api/horseRace').then(res => {

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
            <h1>HorseRaces</h1>
            <Button onClick={onClick}>Add a Horse Race</Button>
            <MyTable horseRaces={state.horseRaces.data} />
        </div>
    )
}
export default Main;