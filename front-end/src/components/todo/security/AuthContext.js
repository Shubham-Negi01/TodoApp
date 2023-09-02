import { createContext, useState } from "react";


export const AuthContext = createContext();

export default function AuthProvider ({children}) {

   const [isAuthenticated, setIsAuthenticated] = useState(false);

   const [username, setUsername] = useState(null);

   const [token, setToken] = useState(null);

   return (

      <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, username, setUsername, token, setToken}}>
         {children}
      </AuthContext.Provider>
      
   );
}