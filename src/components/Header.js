import { useState } from 'react';
import '../style/header.css'

export default function Header() {
    return (
        <header>
            <Logo />
            <Navbar />
            <LoginButton />
        </header>
    )
}

function Logo() {
    return (
        <a className="logo" href="#banner-home">
            <i className='bx bx-atom'></i>
        </a>
    )
}

function Navbar() {
    const [showNav, setShowNav] = useState(true);

    function handleClick() {
        setShowNav(!showNav);
    }
    return (
        <nav>
            <div className="nav-wrap">
                <ul id="nav-menu" className={showNav ? "nav-menu" : "nav-menu active"}>
                    <li><a href="#about-home">về outerspace</a></li>
                    <li><a href="#news-home">tin tức</a></li>
                    <li><a href="#discover-home">khám phá</a></li>
                    <li><a href="#event-home">sự kiện</a></li>
                    <li><a href="#contact-home">liên hệ</a></li>
                </ul>
            </div>
            <button id="btn-nav" onClick={handleClick}>
                {
                    showNav
                        ? <div id="btn-nav-open" className='bx bx-menu'></div>
                        : <div id="btn-nav-close" className='bx bxs-checkbox-minus'></div>
                }
            </button>
        </nav>
    )
}

function LoginButton() {
    return (
        <div className="login-contain">
            <div className="btn-login">
                <a href="./login/login.html">
                    <div className="login-btn">đăng nhập</div>
                    <i className='bx bx-chevron-right-circle'></i>
                </a>
            </div>
            <div className="btn-register">
                <a href="./login/login.html">
                    <div className="register-btn">đăng ký</div>
                    <i className='bx bx-chevron-down-circle'></i>
                </a>
            </div>
        </div>
    )
}

//Collapse header navbar
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    }
});
