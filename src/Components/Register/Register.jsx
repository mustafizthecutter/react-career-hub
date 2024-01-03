import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";



const Register = () => {
    const { createUser, logOut } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setSuccess('');
        setError('');
        if (password.length < 6) {
            return setError('Please input a password contains at least 6 characters!!')

        }
        else if (!/[A-Z]/.test(password)) {
            return setError('Please input at least one uppercase password')
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return setError('Please input a valid Email!!')
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                sendEmailVerification(result.user)
                    .then(() => { alert('Please check your Email!!!') })
                e.target.reset();
                setSuccess('User Created Successfully!!!');
                logOut()
                    .then(() => { })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => setError(error.message));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p>New Here?? Please <button className="text-red-400 font-bold"><Link to={'/login'}>Login</Link></button> </p>
                    {
                        success && <p className="text-green-600 font-bold">{success}</p>
                    }
                    {
                        error && <p className="text-red-600 font-bold">{error}</p>
                    }

                </div>
            </div>
        </div>
    );
};

export default Register;