import { useState } from "react"

export default function Team(){

    const [team, setTeam]=useState(11);
    const handleAdd=()=>{
        setTeam(team+1)
    }
    const handleRemove=()=>{setTeam(team-1)}

    const TeamStyle={
        border:'2px solid purple',
        margine:'20px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={TeamStyle}>
            <h1>playes:{team} </h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}