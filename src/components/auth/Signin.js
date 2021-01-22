import React, { useState } from "react"
import {withRouter} from "react-router"

const Signin =({setNewUser ,setAuthentication ,history })=>{

    const [value,setValue]=useState({
        username:"",
        password:""
    })

const {username,password}=value

const onSubmit = e => {
    e.preventDefault();
    console.log(username,password)
    if (username.trim() == "" || password.trim() == "") {
        return alert("please enter credentials properly")
    }
    setNewUser({
        username:value.username,
        password:value.password
    })
    setAuthentication(true)
    history.push('/')
}
  
const onChange=e=>{
    setValue({...value,[e.target.name]:e.target.value})
    if (username.trim() == "" || password.trim() == "") {
        return    
    }
}

    return (
        <div className="logincont">
        <form className="loginform" onSubmit={e=>onSubmit(e)}>
        <label>Username</label>
        <input  type="text" className="loginusername" name="username" value={username} onChange={e=>onChange(e)} placeholder="Enter username" />
        <label>Password</label>
        <input type="password" className="loginpassword" name="password" value={password} onChange={e=>onChange(e)} placeholder="Enter Password"/>
        <button type="submit" className="signIn">SignIn</button>    
        </form>
        </div>
    )
}

export default withRouter(Signin)