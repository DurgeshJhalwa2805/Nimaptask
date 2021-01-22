import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'




const Navbar = () => {



    return (<Fragment>
        <ul>
            <li>
                <img src="https://www.logolynx.com/images/logolynx/62/625af92dc3f818b8dab5d3d96ecd6ae8.jpeg" alt="Nimap" />
            </li>

            <li >
                <Link to="/" > Home 
                </Link>
            </li>
            <li >
                <Link to="/task">
                    Task
                 </Link>
            </li>
            <li >
                <Link to="/user">
                    User
                 </Link>
            </li>
        </ul>
    </Fragment>)
}



export default withRouter(Navbar)