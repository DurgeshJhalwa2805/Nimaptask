import React, { Fragment, useState } from "react"
import {BrowserRouter ,withRouter} from "react-router-dom"
import Dropdown from "./Dropdown"
import Info from "./Info"
import Navbar from "./Navbar"

const Home=({history ,isAuthenticated})=>{

    //checking user
    if(!isAuthenticated){
        history.push('/login')
    }
    
    //Dropdown State
    const [selectDrop,setSelectDrop]=useState(null)

    return (
        <Fragment>
        <Navbar  />
        <Dropdown  setSelectDrop={setSelectDrop}/>
        <Info selectedValue={selectDrop}/>
        </Fragment>
    )
}

export default withRouter(Home)