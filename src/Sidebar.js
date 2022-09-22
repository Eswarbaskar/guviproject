import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <ul class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion static" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class=""></i>
                </div>
                <div class="sidebar-brand-text mx-3">GUVI <sup>2</sup></div>
            </a>

            <hr class="sidebar-divider my-0" />


            <li class="nav-item active">
                <Link class="nav-link" to={"/zen"}>
                    <i class="fa-brands fa-youtube"></i>
                    <span>ZEN</span></Link>
            </li>

            <li class="nav-item active">
                <Link class="nav-link" to={"/courses"}>
                    <i class="fa-solid fa-briefcase"></i>
                    <span>Courses</span></Link>
            </li>

            <li class="nav-item active">
                <Link class="nav-link" to={"/codekata"}>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Codekata</span></Link>
            </li>

            <hr class="sidebar-divider" />



            <li class="nav-item active">
                <a class="nav-link" href="https://www.guvi.in/webkata">
                    <i class="fa-solid fa-code"></i>
                    <span>Webkata</span></a>
            </li>

            <li class="nav-item active">
                <Link class="nav-link" to={"/debagging"}>
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    <span>Debugging</span></Link>
            </li>

            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fa-solid fa-caret-up"></i>
                    <span>IDE</span></a>
            </li>
            <hr class="sidebar-divider" />

            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fa-brands fa-android"></i>
                    <span>LeaderBoard</span></a>
            </li>

            <li class="nav-item active">
                <Link class="nav-link" to={"/rewards"}>
                    <i class="fa-solid fa-gift"></i>
                    <span>Rewards</span></Link>
            </li>

            <li class="nav-item active">
                <Link class="nav-link" to={"/referral"}>
                    <i class="fa-solid fa-handshake"></i>
                    <span>Referral</span></Link>
            </li>



        </ul>
    )
}

export default Sidebar