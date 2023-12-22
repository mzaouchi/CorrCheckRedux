import { ADDTASK, DELETETASK, FOURAT } from "./ActionTypes"

export const addTask=(payload)=>{
    return(
        {
            type : ADDTASK,
            payload
        }
    )
}


export const deleteTask=(payload)=>{
    return(
        {
            type : DELETETASK,
            payload
        }
    )
}

export const fourat=(payload)=>{
    return(
        {
            type : FOURAT,
            payload
        }
    )
}