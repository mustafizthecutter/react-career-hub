import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SocialLink = () => {

    const { googleLogIn, logOut } = useContext(AuthContext);

    const handleSocialLogin = (media) => {
        media()
            .then(result => {
                console.log(result.user);

                logOut()
                    .then(() => { })
                    .catch(error => console.error(error.message))
            })
            .catch(error => console.error(error.message))
    };

    return (
        <div>
            <div className="divider">Continue With</div>
            <div>
                <button onClick={() => handleSocialLogin(googleLogIn)} className="btn btn-primary btn-sm  btn-outline">Google</button>
            </div>
        </div>
    );
};

export default SocialLink;