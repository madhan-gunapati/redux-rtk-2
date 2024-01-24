import store from "../../state/store"
import { increment, decrement , increment_with_value } from "../../state/slices/countSlice"
import { useEffect } from "react"
import Sample from "../../components/Sample"
const Home = ()=>{
    const viewStore = ()=>{
        console.log(store.getState())
    }
    const dispatchIncrement = ()=>{
        
        store.dispatch(increment())
    }
    const dispatchDecrement = ()=>{
        store.dispatch(decrement())
    }
    const dispatchIncrement_with_value = ()=>{
        store.dispatch(increment_with_value({value:10}))
    }
    useEffect( ()=>{
        const unSubscribe = store.subscribe(()=>{console.log(store.getState())})

        return unSubscribe
    }, [])
    return <div>
        From Home....
       <Sample name='susisi' />
        <button type='button' onClick={viewStore}>View Store</button>
        <button type='button' onClick={dispatchIncrement}>increment</button>
        <button type='button' onClick={dispatchDecrement}>decrement</button>
        <button type='button' onClick={dispatchIncrement_with_value}>increment_with_value</button>
        

    </div>
}


export default Home