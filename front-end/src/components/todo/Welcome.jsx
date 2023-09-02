import { getHelloWorldRestAPI } from "./api/todosApi";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Welcome() {

   const params = useParams();

   const [message, setMessage] = useState(null);

   const callHelloWorld= () => {

      getHelloWorldRestAPI()
           .then((response) => handleSuccessResponse(response))
           .catch((error) => handleErrorResponse(error))
   }

   function handleSuccessResponse(response) {
      console.log(response.data);
      setMessage(response.data);
   }

   function handleErrorResponse(error) {
      console.log(error);
   }

   return (
      <div>
         <h1>My Todo Application</h1>
         <p>Welcome {params.username}</p>
         <p>Manage you todos <Link to="/todos">here</Link></p>
         <div>
            <button className="btn btn-success" onClick={callHelloWorld}>Call Hello World API</button>
         </div>
         <p>{message}</p>
      </div>
   );
}