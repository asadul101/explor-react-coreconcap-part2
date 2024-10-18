import { useState } from "react"

export default function Count(){

    const[count, setCount]=useState(0);

    const handleClickAdd=()=>{
        const newCount=count+1;
        setCount(newCount);
    }
    const handleClickReduse=()=>{
        const newCount=count-1;
        setCount(newCount)
    }
    return(
        <div style={{border:"2px solid red"}}>
            <h1>Count={count}</h1>
            <button onClick={handleClickAdd}>Add</button>
            <button onClick={handleClickReduse}>reduse</button>
        </div>
    )
}