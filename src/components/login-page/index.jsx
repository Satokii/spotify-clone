import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './styles/login-page.css'

function LoginPage() {
    const navigate = useNavigate()
    const [user, setUser] = useState({ username: '', password: '' });
    const [loginMessage, setLoginMessage] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(`http://localhost:4000/login`,
                {
                    username: user.username,
                    password: user.password
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            if (!data.token) {
                throw new Error(data.error)
            }
        
            localStorage.setItem("login-token", data.token)
            navigate('/spotify-login')
            setUser({ username: '', password: '' })
        }
        catch (err) {
            setLoginMessage(err.response.data.error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    return (
        <section className="login-page--container">
            <div className="login-page--subcontainer">
                <div className="login-page--content"> 
                    <h2>Welcome to Codeify</h2> 
                    <h2 className="login-page--header">Sign In</h2> 
                    <form className="login-page--login-form" onSubmit={handleLogin}> 
                        <div className="login-page--login-form-input-container"> 
                            <input className="login-page--login-form-input" type="text" name="username" value={user.username} onChange={handleChange} required />
                            <i>Username</i>
                        </div>
                        <div className="login-page--login-form-input-container"> 
                            <input className="login-page--login-form-input" type="password" name="password" value={user.password} onChange={handleChange} required />
                            <i>Password</i>
                        </div>
                        <div className="login-page--links">
                            <a className="login-page--forgot-password" href="#">Forgot Password</a>
                            <a className="login-page--signup" href="#">Sign up today</a> 
                        </div>
                        <div className="login-page--login-form-input-container"> 
                            <input className="login-page--login-form-input" type="submit" value="Login" />
                        </div>
                    </form>
                    {loginMessage && <p className="login-page--error-message">{loginMessage}</p>}
                </div>
                <p className="login-page--copyright">&#169; 2024 Codeify</p>
            </div>
        </section>
    )
}

export default LoginPage