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
        <section className="login-page-container grid">
            <form onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
                <button type="submit">Click here to log in</button>
            </form>  
            {loginMessage && <p>{loginMessage}</p>}
        </section>
    )
}

export default LoginPage