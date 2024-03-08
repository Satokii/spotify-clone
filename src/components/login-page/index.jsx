import axios from "axios"
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate()

    const handleLogin = async () => {
        const { data } = await axios.post(`http://localhost:4000/login`,
        {
            username: 'User',
            password: 'Password123'
        },
        {
            headers: { 'Content-Type': 'application/json' },
        }
        );
            console.log(data)

        if (!data.token) {
          throw new Error(data.error)
        }
    
        localStorage.setItem("login-token", data.token)
        navigate('/spotify-login')
    }

    return (
        <section onClick={handleLogin}>Click here to log in</section>
    )
}

export default LoginPage