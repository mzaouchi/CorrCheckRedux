import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react"

const ListTasks=()=>{
    const tasks = useSelector(state=> state.tasks)
    const [nemelaB,setnemelaB] = useState('ALL')
    return(
        <div>
            <button onClick={()=> setnemelaB("ALL")}>All</button>
            <button onClick={()=> setnemelaB("DONE")}>Done</button>
            <button onClick={()=> setnemelaB("NOTDONE")}>Not Done</button>
            {
                nemelaB == "ALL" ?
                tasks.map((el,i,t)=> <CardTask el={el}/>)
                :
                nemelaB == "DONE" ?
                tasks.filter((el,i,t)=> el.isDone == true).map((el,i,t)=> <CardTask el={el}/>)
                :
                tasks.filter((el,i,t)=> el.isDone == false).map((el,i,t)=> <CardTask el={el}/>)
            }
            {/* {
                tasks.map((el,i,t)=> <CardTask el={el}/>)
            } */}
        </div>
    )
}

export default ListTasks