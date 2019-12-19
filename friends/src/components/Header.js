import React from "react"
import { Link } from "react-router-dom"

export default function Header (){
    return(
        <div className = "header-div">
            <Link to = "/friends"><h1>F.R.I.E.N.D.S.</h1></Link>
            <div className = "nav-div">
                <Link to = "/friends"><button>Friends</button></Link>
                <Link to = "/add"><button>Add New Friend</button></Link>
                <Link to = "/login"><button className = "login-btn">Log In</button></Link>

            </div>
        </div>
    )
}