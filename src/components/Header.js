import '../style/header.css'
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useContext, useEffect, useState } from 'react';


export default function Header() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    useEffect(() => {  //run everytime when mount this component
        fetch('https://outer-space-api.vercel.app/profile',
            {
                credentials: 'include',
            }).then(response => {
                response.json().then(userInfo => {
                    setUserInfo(userInfo);
                })
            })
    }, []);

    async function logout() {
        await fetch('https://outer-space-api.vercel.app/logout', {
            credentials: 'include',
            method: 'POST'
        });
        setUserInfo(null);
    }

    const username = userInfo?.username; //returns undefined if an object is undefined or null (instead of throwing an error)


    return (
        <header>
            <Logo />
            <Navbar />
            {(username) && (

                <div className="login-contain">
                    <Link to='/create' className='create-new-post-btn'>Create new post</Link>
                    <div className='logout-btn' onClick={logout}>Logout</div>
                    <div className='profile-user'><p> {username}</p></div>
                </div>
            )}

            {!username && (
                <div className="login-contain">
                    <div className="btn-login">
                        <Link to="/login">
                            <div className="login-btn">đăng nhập</div>
                            <i className='bx bx-chevron-right-circle'></i>
                        </Link>
                    </div>
                    <div className="btn-register">
                        <Link to="/register">
                            <div className="register-btn">đăng ký</div>
                            <i className='bx bx-chevron-down-circle'></i>
                        </Link>
                    </div>
                </div>
            )
            }
        </header>
    )
}

function Logo() {
    return (
        <Link to="/" href="#banner-home" className='logo'>
            <i className='bx bx-atom'></i>
        </Link>
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
                    <li><a href="/#about-home">về outerspace</a></li>
                    <li><a href="/#news-home">tin tức</a></li>
                    <li><a href="/#discover-home">khám phá</a></li>
                    <li><a href="/#event-home">sự kiện</a></li>
                    <li><a href="/#contact-home">liên hệ</a></li>
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



//Collapse header navbar
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    }
});
