


import React, { useEffect, useState, useContext } from 'react'
import {Context} from "../store";
import {updateLoad} from "../store/actions"
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
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
            axios.post('http://localhost:5000/api/horse/create', {
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
            <h1>Add a Horse Form</h1>

            <div>
                
             <form>   
                <label htmlFor="horsename">Horse's name:
                <br></br>
                    <input type="text" id='horsename' name='horsename'  size="50"/>
                </label>
                <br></br>   
                <label htmlFor="colorPicker">Select color of the Horse:</label>
                <br></br> 
                <input type="color" id="colorPicker" name="colorPicker" defaultValue="#ff0000"/>
                <br></br>
                <br></br>
                <div id='UpdateButton'>
                <Button onClick={() => addHorseHandler()}> Add </Button>
                </div>
             </form>
            </div>
        </div>
    )
}

export default AddHorse