import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./security/AuthContext";
import { createTodo, getTodoById, updateTodoById } from "./api/todosApi";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function EditTodo(){

   const params = useParams();

   const navigate = useNavigate();

   const authContext = useContext(AuthContext);


   const [description, setDescription] = useState("");

   const [targetDate, setTargetDate] = useState("");

   useEffect(()=>{
      
      if(params.id === -1){
         setDescription("");
         setTargetDate("");
      }
      else{
         getTodoById(authContext.username, params.id)
            .then((resp) => {
               const todo = resp.data;
               setDescription(todo.description);
               setTargetDate(todo.targetDate);
            })
      }
   }, [authContext.username, params.id]);

   function onSubmit(values) {

      const todo = {
         id: params.id,
         description: values.description,
         targetDate: values.targetDate,
         done:false
      }
      console.log(todo)

      if(params.id === -1){
         createTodo(authContext.username, todo)
            .then(response => navigate("/todos"))
            .catch(error => console.log(error))
      }

      updateTodoById(authContext.username, params.id, todo)
         .then(response => navigate("/todos") )
      .catch(error => console.log(error))
   }

   function validate(values) {

      const error = {};

      if(values.description.length < 5){
         error.description = 'Enter atleast 5 characters.'
      }
      // console.log(values);
      return error;
   }

   return (
      <div>
         <h1>Edit Todo #{params.id}</h1>
         <Formik initialValues={{description, targetDate}} 
                  enableReinitialize={true} 
                  onSubmit={onSubmit}
                  validate={validate} 
                  validateOnChange={false} 
                  validateOnBlur={false} >
                  
            {
               (props) => (
                  
                  <Form className="container">
                     <ErrorMessage component="div" className="alert alert-warning" name="description"/>
                     <fieldset className="form-group">
                        <label>Description</label>
                        <Field type="text" className="form-control" name="description"/>
                     </fieldset>
                     <fieldset className="form-group">
                        <label>Target Date</label>
                        <Field type="date" className="form-control" name="targetDate"/>
                     </fieldset>

                     <button type="submit" className="btn btn-success m-3">Save</button>
                     
                  </Form>
               )
            }
         </Formik>
         
      </div>
   );
}