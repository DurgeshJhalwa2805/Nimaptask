import  { Fragment, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { withRouter } from 'react-router'


const Task=({isAuthenticated,history})=>{

    //creating state
    const [tasks,setTask]=useState([])
    const [count,setCount]=useState(1)

const getTask= async ()=>{
   const alldata= await axios.get(`http://jsonplaceholder.typicode.com/todos/${count}`)
    setCount(count+1)
    setTask(tasks=>[...tasks,alldata.data])
    }

    //checking user
    if(!isAuthenticated){
        history.push('/login')
    }

    //delete func
    const Deletefunc=(e,index)=>{
        setTask(arr=>[...arr.slice(0,index),...arr.slice(index+1)])

    }

    return (<Fragment>
        <Navbar />
        <div className="tablecont">   
        <table id="task">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Delete</th>
            </tr>
            {
                tasks.map((task,index)=><tr><td>{index+1}</td>
                <td>{task.title}</td>
                <td>{(task.completed).toString()}</td>
                <td><button type="onClick" className="delete" onClick={e=>Deletefunc(e,index)}>Delete</button></td>
                </tr>)
            }
        </table>
        <button className="addtask" onClick={e=> getTask()}>Add task</button>
        </div>
        </Fragment>
    )
}

export default withRouter(Task)