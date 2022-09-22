import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static shadow navbar-fixed-top">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link text-success border border-success font-weight-bold signup" to={"/login"}>
                            Login</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link bg-gradient-success font-weight-bold signup" to={"/signup"}>
                             Sign up</Link>
                    </li>
                 </ul>

            </nav>
        </>
    )
}

export default Navbar



