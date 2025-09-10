import { Navigate } from "react-router-dom";
import { useState } from "react";
import Account from "./Account";


export default function PrivateRouter(props:any) {
  const isLogin=false;
  if(!isLogin){
    return <Navigate to="/login"></Navigate>
  }
//  const [isAuthenticated] = useState<boolean>(false); 

//  return isAuthenticated ? <Account /> : <Navigate to="/login" replace />;
return props.element;
}
