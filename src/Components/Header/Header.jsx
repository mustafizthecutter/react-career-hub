import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/job'>Jobs</NavLink></li>
        <li><NavLink to='blog'>Blogs</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/applied'>Applied Jobs</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        {
            user && <>
                <li><NavLink to='/orders'>Orders</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/dashboard'>DashBoard</NavLink></li>
            </>

        }
    </>;

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-5xl">CarerHub</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <><span> {user.email} </span> <button onClick={handleLogOut} className="btn btn-ghost">SignOut</button></> : <Link to={'/login'}> <button className="btn btn-ghost">LogIn</button> </Link>
                }

            </div>
        </div>
    );
};

export default Header;