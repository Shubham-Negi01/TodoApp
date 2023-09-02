import { useContext } from "react";
import { AuthContext } from "./security/AuthContext";
import { Navigate } from "react-router-dom";

export default function AuthenticatedRoute({children}) {
   const authContext = useContext(AuthContext);
   if (authContext.isAuthenticated)
      return children;

   return <Navigate to="/login" />
}