import React, { useEffect, useState }  from 'react'
import axios from 'axios'
const UserList = () => {
    
    const [persons, setpersons] = useState([])
    const [error, seterror] = useState(null)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        console.log(res);
        setpersons(res.data)});
    },[]);
    return (
        <div>
            <ul>
                {persons.map(person=> <li>{person.name}</li>)}
            </ul>
        </div>
    )
}

export default UserList
