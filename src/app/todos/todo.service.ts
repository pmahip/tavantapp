import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { 
   // console.log("Initializing...");
  }

  getTodos(){
    var todos=JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
  addTodos(newTodos){
    var todos=JSON.parse(localStorage.getItem('todos'));   
    todos.push(newTodos);    
    localStorage.setItem('todos',JSON.stringify(todos));
    return todos;
  }
  deleteTodo(deleteTodos){
    var todos=JSON.parse(localStorage.getItem('todos'));
    for(var i=0 ;i<todos.length;i++){
          if(todos[i].text==deleteTodos){
            todos.splice(i,1);
          }
        }
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  updateTodo(oldText,newText){
    var todos=JSON.parse(localStorage.getItem('todos'));
    for(var i=0 ;i<todos.length;i++){
          if(todos[i].text==oldText){
            todos[i].text =newText;
          }
        }
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  updateStatus(todoText){
    var todos=JSON.parse(localStorage.getItem('todos'));
    for(var i=0 ;i<todos.length;i++){
      if(todos[i].text==todoText){
          if(todos[i].isDone=="true"){
            todos[i].isDone ="false";
          }else{
            todos[i].isDone ="true";
          }
        }
    }
    localStorage.setItem('todos',JSON.stringify(todos));
  }
}
