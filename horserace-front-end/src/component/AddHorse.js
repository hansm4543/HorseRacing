


import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import {updateLoad} from "../store/actions"
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import href from '../component/href'

function AddHorse(props){   
    const [state, dispatch] = useContext(Context);
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `/`+props.raceID+``; 
        navigate(path);
    }

    function addHorseHandler(){
        if(document.querySelector("#horsename").value === ""){
            console.log("add name")
        }else{
            console.log(props.raceID)
            axios.post(href+'api/horse/create', {
                horseRaceId: props.raceID,
                horseName: document.querySelector("#horsename").value,
                color: document.querySelector("#colorPicker").value,
                //status: document.querySelector("#status").value,

            }).then(response => {
                console.log(response);
                dispatch(updateLoad([true]))
                //routeChange()

            }).catch(error => {
                console.log(error);
            });
        }
        
    }


    return(
        <div className="addHorse">
            <h1>Add a Horse to the race</h1>

            <div>
                
             <form>   
                <label htmlFor="horsename">Horse's name:
                <br></br>
                    <input type="text" id='horsename' name='horsename'  size="50"/>
                </label>
                <br></br>   
                <br></br>   
                <label htmlFor="colorPicker">Select a color for the Horse:  </label>
                <br></br>
                <input type="color" id="colorPicker" name="colorPicker" defaultValue="#ff0000"/>
                <br></br>
                <div className='UpdateButton'>
                <Button id='UpdateButton' onClick={() => addHorseHandler()}> Add </Button>
                </div>
             </form>
            </div>
        </div>
    )
}

export default AddHorse