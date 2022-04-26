import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import {addHorseRace, updateLoad, updateHorseRaces} from "../store/actions"
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AddHorseRaceForm(){
    let navigate = useNavigate(); 
    const [state, dispatch] = useContext(Context);
    console.log(state)
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
    
    },[ isLoading])

    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
    }

    const onSubmit= () => {
        
        axios.post('http://localhost:5000/api/horseRace/create', {
            horseracename: document.querySelector("#horseracename").value,
            place: document.querySelector("#place").value,
            date: document.querySelector("#date").value,
            status: document.querySelector("#status").value,
          })
          .then(function (response) {
            console.log(response);
            dispatch(updateLoad([true]))
            routeChange()
          })
          .catch(function (error) {
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
                <label>Date:
                <br></br>
                    <input type="text" id='date'   size="50"/>
                </label>
                <br></br>
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
                <label>Status:
                <br></br>
                    <input type="text" id='status'  size="50"/>
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