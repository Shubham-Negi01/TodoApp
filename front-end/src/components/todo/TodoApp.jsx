import Login from "./Login";
import Welcome from "./Welcome";
import ErrorPageComponent from "./ErrorPageComponent";
import ListTodosComponent from "./ListTodosComponent";
import Header from "./Header";
import Footer from "./Footer";
import Logout from "./Logout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./security/AuthContext";
import AuthenticatedRoute from "./AuthenticatedRoute";
import EditTodo from "./EditTodo";

export default function TodoApp() {
   return (
      <div>
         <AuthProvider>
            <BrowserRouter>
               <Header />
               <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/welcome/:username" element={
                     <AuthenticatedRoute>
                        <Welcome />
                     </AuthenticatedRoute>
                  } />
                  <Route path="/todos" element={
                     <AuthenticatedRoute>
                        <ListTodosComponent />
                     </AuthenticatedRoute>
                  } />
                  <Route path="/todo/:id" element={
                     <AuthenticatedRoute>
                        <EditTodo />
                     </AuthenticatedRoute>
                  } />
                  <Route path="/logout" element={
                     <AuthenticatedRoute>
                        <Logout />
                     </AuthenticatedRoute>
                  } />
                  <Route path="*" element={<ErrorPageComponent />} />
                  
               </Routes>
               <Footer />
            </BrowserRouter>
         </AuthProvider>
      </div>
   );
}