import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate()
    const [user, setUser] = useState({ username: '', password: '' });

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
            console.log(err.response.data.error)
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
        <section>
            <form onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
                <button type="submit">Click here to log in</button>
            </form>  
        </section>
    )
}

export default LoginPage