import { Navigate } from "react-router-dom";

export default function NeedAuth({user, children}) {



    if(user){
        return children;
    }else{
        return <Navigate to="/not-authorized"/>
    }
}