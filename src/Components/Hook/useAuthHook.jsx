import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const useAuthHook = () => {
    const all = useContext(AuthContext)
    return all
};

export default useAuthHook;