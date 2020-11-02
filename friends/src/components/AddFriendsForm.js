import React, { useState } from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

export const AddFriendsForm = () => {

    const [newFriend, setNewFriend] = useState({});

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()

        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log(res.data)

            //Redirect to the logged in home page
            history.push('/protected')
        })
        .catch(err => {
            console.log(err)
        })

        setNewFriend({
            ...newFriend, [e.target.name]: e.target.value
        })
    }

    const changeHandler = (e) => {
        e.preventDefault()

        setNewFriend({
            ...newFriend, [e.target.name]: e.target.value
        })

        
    }

    return (

        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={changeHandler}
                    placeholder="Name"
                >
                </input>

                <input
                    type="text"
                    name="age"
                    value={newFriend.age}
                    onChange={changeHandler}
                    placeholder="Age"
                >
                </input>

                <input
                    type="text"
                    name="email"
                    value={newFriend.email}
                    onChange={changeHandler}
                    placeholder="Email"
                >
                </input>

                <button>Add new friend</button>
            </form>
        </div>
    )

}