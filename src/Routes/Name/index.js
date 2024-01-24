import { useEffect, useState } from "react"
import store from "../../state/store"
console.log(store)
const Name = ()=>{
    const [name , setName] = useState({fname:store.getState().nameSlice.firstName , lname:store.getState().nameSlice.secondName})
    useEffect( ()=>{

    }, []);
    return <div>
        <p>The name is {name.fname} </p>
        <p>The Last name is {name.lname}</p>
    </div>
}

export default Name