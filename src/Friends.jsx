import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'
export default function Friends(){
    const[friends, setFriends]=useState([])

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data))
   },[])

    return(
        <div> 
            <h1>Frends : {friends.length}</h1>
            <div className='all'>
            {
                friends.map(friend=><Friend friend={friend} key={friend.id}></Friend>)
            }
            </div>
        </div>
    )
}