import axios from "axios"

export const baseUrl = axios.create({
   baseURL: 'http://localhost:8080'
})

export const getHelloWorldRestAPI = () => {

   return baseUrl.get('/hello-world/SHubham')

}

export const getTodosByUsername = (username) => {

   return baseUrl.get(`/users/${username}/todos`)

}

export const deleteTodosById = (username, id) => {

   return baseUrl.delete(`/users/${username}/todos/${id}`)

}

export const getTodoById = (username, id) => {

   return baseUrl.get(`/users/${username}/todos/${id}`)

}

export const updateTodoById = (username, id, todo) => {

   return baseUrl.put(`/users/${username}/todos/${id}`, todo)

}

export const createTodo = (username, todo) => {

   return baseUrl.post(`/users/${username}/todos`, todo, {
      headers:{
         Authorization: 'Basic c2h1YmhhbTphZG1pbg=='
      }
   })

}

export const executeBasicAuthenticationService = (token) => {
   return baseUrl.get(`/basicauth`, {
      headers: {
         Authorization: token
      }
   })
}

export const executeJwtAuthenticationService = (username, password) => {
   console.log("post request with username="+username+" and password="+password);
   return baseUrl.post(`/authenticate`,{username,password});
}
