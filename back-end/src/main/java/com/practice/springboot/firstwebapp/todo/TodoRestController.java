package com.practice.springboot.firstwebapp.todo;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController("todoRestController")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class TodoRestController {

    private TodoService todoService;

    @Autowired
    private TodoRepository todoRepository;

    public TodoRestController(TodoService todoService, TodoRepository todoRepository){
        this.todoService = todoService;
        this.todoRepository = todoRepository;
    }

    @GetMapping("/basicauth")
    public String basicAuth(){
        return "Authenticated";
    }

    @GetMapping("/hello-world/SHubham")
    public String helloWorld(){
        return "Hello Shubham Negi";
    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodosByUsername(@PathVariable String username){
//        List<Todo> todos = todoService.getAllTodosByUsername(username);
        List<Todo> todos = todoRepository.findByUsername(username);
        return todos;
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodoByUsernameAndId(@PathVariable String username, @PathVariable int id){
//        Todo todo = todoService.getTodoByUsernameAndId(username, id);
        Todo todo = todoRepository.findByUsernameAndId(username,id);
        return todo;
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodoById(@PathVariable String username, @PathVariable int id){
//        todoService.deleteTodoById(id);
        todoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/add-todo")
    public String addTodo(ModelMap modelMap){
        modelMap.put("todo",new Todo(0,getLoggedInUsername(),"", LocalDate.now(),false));
        return "addTodo";
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Todo> addTodo(@PathVariable String username, @RequestBody Todo todo){
//        Todo createdTodo = todoService.addTodo(username,todo.getDescription(), todo.getTargetDate(),false);
        Todo newTodo = new Todo(null, username, todo.getDescription(), todo.getTargetDate(), todo.getDone());
        Todo savedTodo = todoRepository.save(newTodo);
        return new ResponseEntity<>(savedTodo,HttpStatus.CREATED);
    }

    @RequestMapping("/delete-todo")
    public String deleteTodo(@RequestParam int id){
//        todoService.deleteTodoById(id);
        todoRepository.deleteById(id);
        return "redirect:list-todos";
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable String id, @RequestBody Todo todo){
//        Todo updatedTodo = todoService.updateTodo(todo);
        Todo updatedTodo = todoRepository.save(todo);
        return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
    }

    private String getLoggedInUsername(){
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        return authentication.getName();
        return null;
    }

}
