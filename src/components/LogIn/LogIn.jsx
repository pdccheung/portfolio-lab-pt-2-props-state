import React from 'react';


function LogIn (props){
    return (
        <div>
            User: {props.username} <br/>
            email: {props.email}
        </div>
    )
}

export default LogIn;