//package com.practice.springboot.firstwebapp.todo;
//
//import jakarta.validation.Valid;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.ModelMap;
//import org.springframework.validation.BindingResult;
//import org.springframework.web.bind.annotation.*;
//
//import java.time.LocalDate;
//import java.util.List;
//
//@Controller
//public class TodoController {
//
//    private TodoService todoService;
//
//    private TodoRepository todoRepository;
//
//    public TodoController(TodoService todoService, TodoRepository todoRepository){
//        this.todoService = todoService;
//        this.todoRepository = todoRepository;
//    }
//
//    @GetMapping("/list-todos")
//    public String getAllTodosByUsername(ModelMap modelMap){
//        String username = getLoggedInUsername();
////        List<Todo> todos = todoService.getAllTodosByUsername(username);
//        List<Todo> todos = todoRepository.findByUsername(username);
//        modelMap.put("todos",todos);
//        modelMap.put("username",username);
//        return "todos";
//    }
//
//    @GetMapping("/add-todo")
//    public String addTodo(ModelMap modelMap){
//        modelMap.put("todo",new Todo(0,getLoggedInUsername(),"", LocalDate.now(),false));
//        return "addTodo";
//    }
//
//    @PostMapping("/add-todo")
//    public String addTodo(@Valid Todo todo, BindingResult bindingResult){
//        if(bindingResult.hasErrors()){
//            return "addTodo";
//        }
////        todoService.addTodo(todo.getUsername(),todo.getDescription(), todo.getTargetDate(),false);
//        todoRepository.save(todo);
//        return "redirect:list-todos";
//    }
//
//    @RequestMapping("/delete-todo")
//    public String deleteTodo(@RequestParam int id){
////        todoService.deleteTodoById(id);
//        todoRepository.deleteById(id);
//        return "redirect:list-todos";
//    }
//
//    @GetMapping("/update-todo")
//    public String updateTodo(@RequestParam int id, ModelMap modelMap){
////        Todo todo = todoService.getTodoById(id);
//        Todo todo = todoRepository.findById(id).get();
//        modelMap.put("todo",todo);
//        return "updateTodo";
//    }
//
//    @PostMapping("/update-todo")
//    public String updateTodo(@Valid Todo todo, BindingResult bindingResult){
//        if(bindingResult.hasErrors()){
//            return "updateTodo";
//        }
////        todoService.updateTodo(todo);
//        todoRepository.save(todo);
//        return "redirect:list-todos";
//    }
//
//    private String getLoggedInUsername(){
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        return authentication.getName();
//    }
//
//}
