import React, { useState } from "react";
import '../style/register-page.css'

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState('password');
    const [showEyeSlash, setShowEyeSlash] = useState(true);


    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    async function register() {
        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        if (response.status === 200) {
            alert("Register successfull");
        } else {
            alert("Register failed");
        }
    }

    return (
        <div className="registerForm-wrap">
            <div className="registerForm-contain">
                <div className="register-welcome">
                    <div className="register-welcome-contain">
                        <div className="register-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="user-astronaut" className="svg-inline--fa fa-user-astronaut fa-w-14" role="img"
                                viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z" />
                            </svg>
                        </div>
                        <div className="register-welcome-astronaut">Chào các phi hành gia ! </div>
                        <div className="register-welcome-text">Đăng ký</div>
                    </div>
                </div>
                <div className="register-form">
                    <form className="register-form-contain" >
                        <div className="input-group">
                            <label htmlFor="registerUser">Tài khoản:</label>
                            <input type="text" id="registerUser" name="registerUser" placeholder='Enter Username' size={30}
                                value={username}
                                onChange={e => setUserName(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="registerPassword">Mật khẩu:</label>
                            <input type={showPassword} id="registerPassword" name="registerPassword" size={30}
                                value={password}
                                onChange={e => { setPassWord(e.target.value) }} />
                            <div className="icon-eye" onClick={() => setShowEyeSlash(!showEyeSlash)} id="iconEye">
                                {showEyeSlash
                                    ? <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                                        data-prefix="fas" data-icon="eye-slash" className="svg-inline--fa fa-eye-slash fa-w-20"
                                        role="img" viewBox="0 0 640 512"
                                        onClick={() => setShowPassword("text")}>
                                        <path fill="currentColor"
                                            d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                                        data-prefix="fas" data-icon="eye" className="svg-inline--fa fa-eye fa-w-18" role="img"
                                        viewBox="0 0 576 512"
                                        onClick={() => setShowPassword("password")}>
                                        <path fill="currentColor"
                                            d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                                    </svg>
                                }
                            </div>
                        </div>

                        <div className="register-submit">
                            <button onClick={register} type='button' className="submit-btn" id="submitBtn">ĐĂNG KÝ</button>
                        </div>

                        <div className="messageregister">
                            <div id="sregister" className="successregister">Đăng ký thành công !!!</div>
                            <div id="eregister" className="Errregister">Tên đăng nhập và mật khẩu không đúng !!!</div>
                            <div id="cregister" className="Catchregister">Kiểm tra lại kết nối mạng !!!</div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
