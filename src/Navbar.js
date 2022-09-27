import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-success border border-success font-weight-bold signup" to={"/login"}>
                            Login</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link bg-success font-weight-bold signup" to={"/"}>
                             Sign up</Link>
                    </li>
                 </ul>

            </nav>
        </>
    )
}

export default Navbar



