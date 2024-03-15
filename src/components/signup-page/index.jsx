import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
    const navigate = useNavigate()
    const [user, setUser] = useState({ username: '', password: '' });
    const [signupMessage, setSignupMessage] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:4000/sign-up`,
                {
                    username: user.username,
                    password: user.password
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            navigate('/')
            setUser({ username: '', password: '' })
        }
        catch (err) {
            setSignupMessage(err.response.data.error)
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
                    <h2 className="login-page--header">Sign Up</h2> 
                    <form className="login-page--login-form" onSubmit={handleSignup}> 
                        <div className="login-page--login-form-input-container"> 
                            <input className="login-page--login-form-input" type="text" name="username" value={user.username} onChange={handleChange} required />
                            <i>Username</i>
                        </div>
                        <div className="login-page--login-form-input-container"> 
                            <input className="login-page--login-form-input" type="password" name="password" value={user.password} onChange={handleChange} required />
                            <i>Password</i>
                        </div>
                        <div className="login-page--links">
                            <p className="login-page--signup" onClick={() => navigate('/')}>Already have an account? Sign in</p> 
                        </div>
                        <div className="login-page--login-form-input-container"> 
                            <input className="login-page--login-form-input" type="submit" value="Login" />
                        </div>
                    </form>
                    {signupMessage && <p className="login-page--error-message">{signupMessage}</p>}
                </div>
                <p className="login-page--copyright">&#169; 2024 Codeify</p>
            </div>
        </section>
    )
}

export default SignupPage