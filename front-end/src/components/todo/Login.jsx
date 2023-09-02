import "./Login.css"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./security/AuthContext";
import { baseUrl, executeJwtAuthenticationService } from "./api/todosApi";

export default function Login() {

   const [username, setUsername] = useState("Shubham");
   const [password, setPassword] = useState("");
   const [loginFailure, setLoginFailure] = useState(false);
   const authContext = useContext(AuthContext);

   const navigate = useNavigate();

   function handleUsername(event){
      setUsername(event.target.value);
   }

   function handlePassword(event) {
      setPassword(event.target.value);
   }

   // async function handleLogin() {

   //    const token = 'Basic ' + window.btoa(username + ":" + password);
   //    try {
   //       const response = await executeBasicAuthenticationService(token);

   //       if(response.status === 200){
   //          navigate(`/welcome/${username}`);
   //          authContext.setIsAuthenticated(true);
   //          authContext.setUsername(username);
   //          authContext.setToken(token);
   //          setLoginFailure(false);

   //          baseUrl.interceptors.request.use(
   //             (config) => {
   //                console.log("using interceptor to set token");
   //                config.headers.Authorization = token;
   //                return config;
   //             }
   //          )

   //       }
   //       else{
   //          setLoginFailure(true);
   //          authContext.setIsAuthenticated(false);
   //          authContext.setUsername(null);
   //          authContext.setToken(token);
   //       }
   //    } catch(err) {
   //       console.log(`err=${err}`)
   //       setLoginFailure(true);
   //       authContext.setIsAuthenticated(false);
   //       authContext.setUsername(null);
   //       authContext.setToken(token);
   //    }
   // }

   async function handleLogin() {

      try {
         const response = await executeJwtAuthenticationService(username,password);

         console.log(response);

         if (response.status === 200) {
            const jwtToken = `Bearer ${response.data.token}`;

            navigate(`/welcome/${username}`);
            authContext.setIsAuthenticated(true);
            authContext.setUsername(username);
            authContext.setToken(jwtToken);
            setLoginFailure(false);

            baseUrl.interceptors.request.use(
               (config) => {
                  console.log("using interceptor to set jwtToken");
                  config.headers.Authorization = jwtToken;
                  return config;
               }
            )

         }
         else {
            setLoginFailure(true);
            authContext.setIsAuthenticated(false);
            authContext.setUsername(null);
            authContext.setToken(null);
         }
      } catch (err) {
         console.log(`err=${err}`)
         setLoginFailure(true);
         authContext.setIsAuthenticated(false);
         authContext.setUsername(null);
         authContext.setToken(null);
      }
   }

   return (
      <div className="login">
         <h2>Login</h2>
         {loginFailure && <div>Authentication Failed. Try again!!!</div>}
         <div className="loginForm">
            <div>
               <label htmlFor="username">Username:</label>
               <input id="username" type="text" name="username" value={username} onChange={handleUsername} />
            </div>
            <div>
               <label htmlFor="password">Password:</label>
               <input id="password" type="password" name="password" value={password} onChange={handlePassword}/>
            </div>
            <div>
               <button id="submit" onClick={handleLogin}>Login</button>
            </div>
         </div>
      </div>
   );
}