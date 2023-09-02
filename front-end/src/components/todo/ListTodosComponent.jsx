import { useContext, useEffect, useState } from "react";
import { getTodosByUsername, deleteTodosById } from "./api/todosApi";
import { AuthContext } from "./security/AuthContext";
import "./ListTodosComponent.css";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {

   const authContext = useContext(AuthContext);

   const [todos,setTodos] = useState([]);

   const [message, setMessage] = useState(null);

   const navigate = useNavigate();

   useEffect(() => refreshTodos(), [])
   
   const username = authContext.username;

   function refreshTodos() {
   
      getTodosByUsername(username)
      .then((resp) => {
         console.log(resp.data)
         setTodos(resp.data)
      })
      .catch((err) => console.log(err));
   }

   function deleteTodo(username, id){
      deleteTodosById(username, id)
         .then(() => {
            refreshTodos();
            setMessage(`Todo with id=${id} is deleted successfully`);
            setTimeout(()=>setMessage(null),3000);
         })
         .catch((err) => console.log(err));
   }

   function updateTodo(id) {
      console.log(`in update with id=${id}`)
      navigate(`/todo/${id}`)
   }

   function addNewTodo(id) {
      navigate(`/todo/-1`)
   }

   return (
      <div className="container">
         <h3>Here is Your Todo List:</h3>
         {message && <div className="alert alert-success">{message}</div>}
         <table className="table">
            <thead>
               <tr>
                  <th>Id</th>
                  <th>Description</th>
                  <th>Target Date</th>
                  <th>Done?</th>
                  <th>Delete</th>
                  <th>Update</th>
               </tr>
            </thead>
            <tbody>
               {
                  todos.map( 
                     todo => (                  //we use () instead of {} because we are returning this value
                        <tr key = {todo.id}>
                           <td>{todo.id}</td>
                           <td>{todo.description}</td>
                           <td>{todo.targetDate}</td>
                           <td>{todo.done.toString()}</td>
                           <td>
                              <button className="btn btn-warning" onClick={() => deleteTodo(authContext.username, todo.id)}>
                                 DELETE
                              </button>
                           </td>
                           <td>
                              <button className="btn btn-info" onClick={() => updateTodo(todo.id)}>
                                 UPDATE
                              </button>
                           </td>
                        </tr>
                     )
                  )
               }
            </tbody>
         </table>
         <button className="btn btn-success" onClick={addNewTodo}>Add a New Todo</button>
      </div>
   );
}