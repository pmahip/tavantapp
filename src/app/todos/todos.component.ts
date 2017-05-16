import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todos/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  appState ="default";
  oldText;
  isDone="false";
  constructor(private _todoService:TodoService) { }

  ngOnInit() {
    this.todos=this._todoService.getTodos();
  }

  addTodo(){
      var newTods ={
        text:this.text,
        isDone:this.isDone
      }
      this.todos.push(newTods);
      this._todoService.addTodos(newTods);
      this.text="";
  }
  deleteTodo(todoText){
    for(var i=0 ;i<this.todos.length;i++){
      if(this.todos[i].text==todoText){
        this.todos.splice(i,1);
      }
    }

    this._todoService.deleteTodo(todoText);
  }

  editTodo(todo){   
    this.appState="edit";
    this.text=todo.text;
    this.oldText=todo.text;
  }
  updateTodo(){
     for(var i=0 ;i<this.todos.length;i++){
      if(this.todos[i].text==this.oldText){
        this.todos[i].text=this.text;
      }
    }
    this._todoService.updateTodo(this.oldText,this.text);
    this.appState="default";
    this.text="";
  }
  updateStatus(todoText){
     for(var i=0 ;i<this.todos.length;i++){
        if(this.todos[i].text==todoText){
          if(this.todos[i].isDone=="true"){
            this.todos[i].isDone="false";
            this.isDone="false";
          }else{
            this.todos[i].isDone="true";
            this.isDone="true";
          }
      }
     }
    this._todoService.updateStatus(todoText);
    this.text="";
  }
}
