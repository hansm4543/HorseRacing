import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import {Context} from "../store";
//import {updatePosts, removePost, updateLoad, changePost} from "../store/actions"
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";
import './DetailedView.css';
import {addHorseRace, updateLoad, updateHorseRaces} from "../store/actions"
import AddHorse from '../component/AddHorse';
import HorseList from '../component/HorseList';
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

var dateTime = date+'T'+time;


function DetailedView(){
    let navigate = useNavigate(); 


    const raceID = window.location.href.split("/horseRace/")[1];
    //console.log(raceID)
    const [state, dispatch] = useContext(Context);

    const handler = () =>{ 
        let path = `/login`; 
        navigate(path);
    }

    if (!state.auth.token) {
        handler();
    }
    const [isLoading, setIsLoading] = useState(true);

    const [detailedelement, setElement] = useState([]);
    const [allHorses, setAllHorses] = useState([]);
    const [alreadyloaded, setAlreadyLoaded] = useState(true);

    useEffect(() =>{
        
        if(state.load.data[0]){
            fetch(href+'api/horseRace').then(res => {

                return res.json()

            }).then(data => {
                //console.log(data)
                //console.log(data[0]._id)
                //console.log(data.length)
                dispatch(updateHorseRaces(data))
                for (let m = 0; m < data.length; m++) {
                    if(data[m]._id == raceID){
                        let object = { 
                            _id: data[m]._id,
                            date: data[m].date,
                            horseracename: data[m].horseracename,
                            place: data[m].place,
                            status: data[m].status,
                            createdAt: data[m].createdAt
                        }
                        setElement([object]);
                        //setAlreadyLoaded(false);
                    }
                   
                }
            
            }).catch(err => console.log(err))

            fetch(href+'api/horse/').then(res => {

                return res.json()

            }).then(data => {
                //console.log(data)
                let horses = [];
                let number = 0;
                for (let m = 0; m < data.length; m++) {
                    if(data[m].horseRaceId == raceID){
                        let objectHorse = { 
                            key: data[m]._id,
                            _id: data[m]._id,
                            horseName: data[m].horseName,
                            color: data[m].color
                        }
                        horses.push(objectHorse);
                        number++;
                        
                    }
                    
                }
                setAllHorses([horses]);
            
            }).catch(err => console.log(err))

            dispatch(updateLoad([false]))
        }else if(alreadyloaded){
            for (let m = 0; m < state.horseRaces.data.length; m++) {
                if(state.horseRaces.data[m]._id == raceID){
                    let object = { 
                        _id: state.horseRaces.data[m]._id,
                        date: state.horseRaces.data[m].date,
                        horseracename: state.horseRaces.data[m].horseracename,
                        place: state.horseRaces.data[m].place,
                        status: state.horseRaces.data[m].status,
                        createdAt: state.horseRaces.data[m].createdAt
                    }
                    setElement([object]);
                    setAlreadyLoaded(false)
                }
               
            }

            fetch(href+'api/horse/').then(res => {

                return res.json()

            }).then(data => {
                //console.log(data)
                let horses = [];
                let number = 0;
                for (let m = 0; m < data.length; m++) {
                    if(data[m].horseRaceId == raceID){
                        let objectHorse = { 
                            key: data[m]._id,
                            _id: data[m]._id,
                            horseName: data[m].horseName,
                            color: data[m].color
                        }
                        horses.push(objectHorse);
                        number++;
                        
                    }
                    
                }
                setAllHorses([horses]);
            
            }).catch(err => console.log(err))
        }
        console.log(state);
        //setIsLoading(false)
        //console.log(detailedelement)
        //console.log(allHorses)


        
        
    
    },[state, detailedelement])



    
    if(alreadyloaded === false){
        if((dateTime+":00.000Z") > detailedelement[0].date){
            return (
                <div>
                    <div className='DetailedViewItems'>
                    <h1>DetailedView</h1>
                    <h2>Race ID: {detailedelement[0]._id}</h2>
                    <h4>Race was created at: {detailedelement[0].createdAt}</h4>
                    </div>
                    <div className="grid-containerDetailedView">
                        <p className='grid-itemDetailedView'><span className="makeBold">Name: </span>{detailedelement[0].horseracename}</p>
                        <p className='grid-itemDetailedViewEmpty'></p>
                        <p className='grid-itemDetailedView'><span className="makeBold">Date: </span>{detailedelement[0].date}</p>
                        <p className='grid-itemDetailedView'><span className="makeBold">Place: </span>{detailedelement[0].place}</p>
                        <p className='grid-itemDetailedViewEmpty'></p>
                        <p className='grid-itemDetailedView'><span className="makeBold">Status: </span>{detailedelement[0].status}</p>
                    </div>
                    <HorseList horses={allHorses[0]} raceID={raceID} date={detailedelement[0].date}/>
                    
        
                </div>
            );
        }else{
            return(
                <div>
                    <div className='DetailedViewItems'>
                    <h1>DetailedView</h1>
                    <h2>Race ID: {detailedelement[0]._id}</h2>
                    <h4>Race was created at: {detailedelement[0].createdAt}</h4>
                    </div>
                    <div className="grid-containerDetailedView">
                        <p className='grid-itemDetailedView'><span className="makeBold">Name: </span>{detailedelement[0].horseracename}</p>
                        <p className='grid-itemDetailedViewEmpty'></p>
                        <p className='grid-itemDetailedView'><span className="makeBold">Date: </span>{detailedelement[0].date}</p>
                        <p className='grid-itemDetailedView'><span className="makeBold">Place: </span>{detailedelement[0].place}</p>
                        <p className='grid-itemDetailedViewEmpty'></p>
                        <p className='grid-itemDetailedView'><span className="makeBold">Status: </span>{detailedelement[0].status}</p>
                    </div>
                    
                    <HorseList horses={allHorses[0]} raceID={raceID} date={detailedelement[0].date}/>
                    <AddHorse raceID={raceID}/>
                    
        
                </div>
            )
        }
    }
    return(
        <div>
            <h1>Something went wrong</h1>
            
        </div>
    )
    
}
export default DetailedView;