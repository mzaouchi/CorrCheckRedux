import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"

const AddTask=()=>{
    const [title,setTitle] = useState('')
    const dispatch = useDispatch()
    const handelAdd=()=>{
        dispatch(addTask({title,isDone : false,id : Math.random()}))
        setTitle('')
    }
    return(
        <div>
            <input value={title}  type="text" onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={handelAdd}>Add Task</button>
        </div>
    )
}

export default AddTask