import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Profile = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);
    return (
        <div>

        </div>
    );
};

export default Profile;