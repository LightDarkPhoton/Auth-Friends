import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {

    const [newUser, setNewUser] = useState({
        credentials: {
            username: "",
            password: "",
        }
    })

    const handleChange = (e) => {
        setNewUser( {
            credentials: {
                ...newUser.credentials,
                [e.target.name]: e.target.value
            }
        })

    }

    const history = useHistory();

    const login = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:5000/api/login', newUser.credentials)
            .then((res) => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)

                //Redirect to the logged in home page
                history.push('/protected')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={login}>

            <input
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleChange}
            />
            <button>Log In</button>
            </form>
        </div>
    )
}