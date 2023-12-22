import { useDispatch } from "react-redux"
import { deleteTask, fourat } from "../Redux/Actions"

const CardTask=({el})=>{
    const dispatch = useDispatch()
    return(
        <div>
            
            <h2 className={el.isDone == true && "dali"}>{el.title}</h2>
            <h3>{el.isDone == true ? "TRUE" : "FALSE"}</h3>
            <button onClick={()=> dispatch(fourat(el.id))}>Done</button>
            <button onClick={()=> dispatch(deleteTask(el.id))}>Delete</button>
        </div>
    )
}

export default CardTask