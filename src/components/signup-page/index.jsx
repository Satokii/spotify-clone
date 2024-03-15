import { useState } from "react";

function SignupPage() {

    const [user, setUser] = useState({ username: '', password: '' });


    const handleSignup = async (e) => {
        e.preventDefault();

        console.log('signup')
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
                            <a className="login-page--forgot-password" href="#">Forgot Password</a>
                            <a className="login-page--signup" href="#">Sign up today</a> 
                        </div>
                        <div className="login-page--login-form-input-container"> 
                            <input className="login-page--login-form-input" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
                <p className="login-page--copyright">&#169; 2024 Codeify</p>
            </div>
        </section>
    )
}

export default SignupPage