import LogInForm from "../component/LogInForm";
import './Login.css';
import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons'
import { useContext } from 'react';
import { Context } from "../store";
import { loginUser } from "../store/actions";
import { useNavigate } from "react-router-dom";

function LogIn(){
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `/main`; 
        navigate(path);
    }



    const [state, dispatch] = useContext(Context)
    console.log(state);

    function itemSubmitHandler(number, data){
        if(number === 1){
            document.getElementById("numbrike").innerHTML = "Õnnestus";
            dispatch(loginUser(data));
            routeChange();
        }else{
            document.getElementById("numbrike").innerHTML = "Failed";
        }

    }

    return(
       <div className="loginPage">
            <div className="grid-container">
                <div className="grid-item1">
                    <h1 id="tervitus">Login</h1>
                </div>
                <LogInForm onLogInUser={itemSubmitHandler}/>
                <div className="grid-item">
                    <Link to="/register">
                        <Button type="default" id="loginlehenupp2"><UserAddOutlined/>Register</Button>
                    </Link>
                </div>
                <div className="grid-item">
                <span id="numbrike"></span>
                </div>
            </div>
        </div>

    )
}

export default LogIn