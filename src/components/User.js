import React, { useState } from "react"
import {withRouter} from "react-router";
import Navbar from "./Navbar"

const User=({user , history ,isAuthenticated,changePassword})=>{
    //checking user
    if(!isAuthenticated){
        history.push('/login')
    }
    //creating state 
    const [state,setState]=useState(true)
    const [newPassword,setNewpassword]=useState("")
    
    //functions
    const onClick=e=>{
        history.push("/login")
    }
    const changetype =e=>{
        setState(false)
    }

    const createNewpassword = e=>{
        setNewpassword(e.target.value)
    }

    const savePassword=()=>{
        if(newPassword.trim()==""){
        return alert("enter password")
    }
    changePassword({...user,password: newPassword})
    setState(true)
    }

    //change and save password btns
    const savePasswordButton =<button className="btnchng" onClick={e=>savePassword()}>Save Password</button>
    const changePasswordButton = <button className="btnchng" onClick={e=>changetype()}> Change Password</button>

    return (
        <div>
        <Navbar />
        <div className="usercont">
        <div className="usercontainer">
        <label for="username"><b>Username:</b></label><label for="username"><b>{user.username}</b></label>
        <label for="password" ><h2>Password</h2></label>
        <input className="userinput"  type="password" value={state ?user.password :newPassword} disabled={state} onChange={e=>createNewpassword(e)}/>
        {state ? changePasswordButton:savePasswordButton}
        <button className="logoutbtn" onClick={e=>onClick(e)}>Logout</button>
        </div>
        </div>
        </div>
    )
}

export default withRouter(User)