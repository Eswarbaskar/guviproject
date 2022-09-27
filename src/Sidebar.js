import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <ul className="navbar-nav bg-success sidebar sidebar-dark accordion static-top" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fa-brands fa-google"></i>
                </div>
                <div className="sidebar-brand-text mx-3">GUVI <sup>2</sup></div>
            </a>

            <hr className="sidebar-divider my-0" />


            <li className="nav-item active">
                <Link className="nav-link" to={"/zen"}>
                   <i class="fa-solid fa-laptop-code"></i> 
                    <span>ZEN</span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to={"/courses"}>
                    <i className="fa-solid fa-briefcase"></i>
                    <span>Courses</span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to={"/codekata"}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Codekata</span></Link>
            </li>

            <hr className="sidebar-divider" />



            <li className="nav-item active">
                <Link className="nav-link" to={"/webkata"}>
                    <i className="fa-solid fa-code"></i>
                    <span>Webkata</span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to={"/debagging"}>
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    <span>Debugging</span></Link>
            </li>


            <hr className="sidebar-divider" />

            <li className="nav-item active">
                <Link className="nav-link" to={"/leaderboard"}>
                    <i className="fa-brands fa-android"></i>
                    <span>LeaderBoard</span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to={"/rewards"}>
                    <i className="fa-solid fa-gift"></i>
                    <span>Rewards</span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to={"/referral"}>
                    <i className="fa-solid fa-handshake"></i>
                    <span>Referral</span></Link>
            </li>

        </ul>





    )
}

export default Sidebar