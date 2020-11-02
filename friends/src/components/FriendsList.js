import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { AddFriendsForm } from './AddFriendsForm'
import { Link } from 'react-router-dom'

export const FriendsList = () => {
    
    const [friendsList, setFriendsList] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res.data)
                setFriendsList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div>
            <p>Friends List</p>
        {friendsList.map(elem => {
            console.log("We're in friends list!")
            console.log(elem.name)
            return (
                <div>{elem.name} {elem.age} {elem.email}</div>
            )
        })}

        {/* <AddFriendsForm /> */}
        <Link to="/add-friend">Add Friend</Link>

        </div>
    )


}