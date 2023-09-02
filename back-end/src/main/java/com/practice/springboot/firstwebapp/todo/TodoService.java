package com.practice.springboot.firstwebapp.todo;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Service
public class TodoService {

    public static List<Todo> todos = new ArrayList<>();

    public static int todosCount = 6;

    static {
        todos.add(new Todo(1,"Sonali","Learn AE", LocalDate.now().plusMonths(3),false));
        todos.add(new Todo(2,"Shubham","Learn Spring", LocalDate.now().plusMonths(2),false));
        todos.add( new Todo(3,"Tewari","Learn Exercise", LocalDate.now().plusDays(10),false));
        todos.add(new Todo(4,"Sonali","qwert", LocalDate.now().plusMonths(3),false));
        todos.add(new Todo(5,"Shubham","poiuyt", LocalDate.now().plusMonths(2),false));
        todos.add( new Todo(6,"Tewari","gvsdcd", LocalDate.now().plusDays(10),false));
    }
    public List<Todo> getAllTodosByUsername(String username){
        Predicate<Todo> predicate = todo -> todo.getUsername().equalsIgnoreCase(username);
        return todos.stream().filter(predicate).toList();
    }

    public Todo getTodoByUsernameAndId(String username, int id){
        Predicate<Todo> predicate = todo -> todo.getUsername().equalsIgnoreCase(username) && todo.getId()==id;
        return todos.stream().filter(predicate).findFirst().get();
    }

    public Todo addTodo(String username, String description, LocalDate targetDate, boolean isDone){
        Todo createdTodo = new Todo(++todosCount, username, description, targetDate, isDone);
        todos.add(createdTodo);
        return createdTodo;
    }

    public void deleteTodoById(int id) {
        Predicate<? super Todo> predicate = todo -> todo.getId() == id;
        todos.removeIf(predicate);
    }

    public Todo updateTodo(Todo todo) {
        for(Todo t: todos){
            if(t.getId() == todo.getId()){
                t.setDescription(todo.getDescription());
                t.setDone(todo.getDone());
                t.setTargetDate(todo.getTargetDate());
                return t;
            }

        }
        return null;
    }

    public Todo getTodoById(int id) {
        Predicate<? super Todo> predicate = todo -> todo.getId() == id;
        return todos.stream().filter(predicate).findFirst().get();
    }
}
