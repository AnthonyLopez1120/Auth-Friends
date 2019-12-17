import React, { useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"

export default function Login(props) {
    const [ credentials, setCredentials ] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post("/api/login", credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload)
            props.history.push("/friends")
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    return (
        <div className = "login_div">
            <form className = "form-div" onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} value={credentials.username}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={credentials.password}/>
                <button type="submit">Log In</button>
            </form>       

        </div>
    )
}