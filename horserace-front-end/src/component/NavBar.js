import './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useContext } from 'react';
import { Context } from "../store";
import { logoutUser} from "../store/actions";

function Navbar (){
    const [state, dispatch] = useContext(Context)


    if (!state.auth.token) {
        
        return (
            <div className="Navbar">
                
            </div>
        );
    
    } else {
        return (
            <div className="Navbar">

                <Link to ="/main">
                    <img id='logoke' className="logo" src="/horse.png" alt="Veebilehe logo"></img>
                </Link>

            </div>
        );
    }

}

export default Navbar;