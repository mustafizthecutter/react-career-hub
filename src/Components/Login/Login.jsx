import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, updateProfile } from "firebase/auth";
import auth from "../Fitrebase/firebase.config";
import SocialLink from "../SocialLink/SocialLink";
import useAuthHook from "../Hook/useAuthHook";

const Login = () => {

    const { signInUser } = useAuthHook();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [emailChange, setEmailChange] = useState('');
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setSuccess('');
        setError('');

        // Validation part of the Authentication-------

        if (password.length < 6) {
            return setError('Please input a password contains at least 6 characters!!');
        }
        else if (!/[A-Z]/.test(password)) {
            return setError('Please input at least one uppercase password');
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return setError('Please input a valid Email!!');
        }

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, { displayName: 'Mustafizur Rahman', photoURL: "https://example.com/jane-q-user/profile.jpg" })
                e.target.reset();
                navigate('/');

            })
            .catch(error => {
                console.error(error.message);
            });
    };

    const handleForgetPassword = () => {

        sendPasswordResetEmail(auth, emailChange)
            .then(() => { alert('please check email!!') })
            .catch(error => console.error(error.message));
    };

    const handleEmailChange = (e) => {
        setEmailChange(e.target.value);

    };

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">

                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" onChange={handleEmailChange} name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <button onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <p>New Here?? Please <button className="text-red-400 font-bold"><Link to={'/register'}>Register</Link></button> </p>
                    {
                        success && <p className="text-green-600 font-bold">{success}</p>
                    }
                    {
                        error && <p className="text-red-600 font-bold">{error}</p>
                    }
                    <SocialLink></SocialLink>

                </div>
            </div>
        </div>
    );
};

export default Login;