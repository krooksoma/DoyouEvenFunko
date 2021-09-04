import React from 'react';
import { Link} from 'react-router-dom';
import { useQuery } from '@apollo/client';
// eslint-disable-next-line
import {QUERY_ME} from '../utils/queries';
import  FunkoList  from './FunkoList'


import Auth from '../utils/auth';


export default function Dashboard (){  
    
    const { loading, data } = useQuery(QUERY_ME);

    const user = data?.me || {};
    // console.log("Here is the user variable value", user);
    // console.log("Auth.loggedIn(): ", Auth.loggedIn());
    // console.log("Auth.getUser().data._id : ", Auth.getUser().data._id)
    
    if(!Auth.loggedIn()){
        return (
            <h4>
                Login Necessary to visualize the Dashboard. Use link above to log in or sign up!!
            </h4>
        )
    } 
    if(Auth.loggedIn() && Auth.getUser().data._id === data?.me._id){
        // console.log(user.funkos);
        return (<>
        {/* implement to disply all items in current collection */}
            <h1>{user.username}'s collection</h1>
            {/* create component to render all funkos the user own or display that there are none */}
            <div className="container">
                <div className="row">
            {user.funkos && user.funkos.map((funko, index) => (
                <FunkoList key={index} id={funko._id} model={funko.model} 
                series= {funko.series} number ={funko.number}
                 price={funko.price} image={funko.image}/>                   
                ))}
                </div>
            </div>
            <div className="container" style={{ maxWidth: "10rem"}}>
                <div className="row">
            <Link  className="btn btn-danger" to="/dashboard/funko">
                <span style={{color: "black"}}>➕</span> Add Your Funko
            </Link>
                </div>
            </div>

        </>)
    }    
    if(loading){
        return <div>Loading....</div>
    }
    
    
}