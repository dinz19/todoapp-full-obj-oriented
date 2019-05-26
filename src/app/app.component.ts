import { Component } from '@angular/core';
import { TodoserviceService } from './todoservice.service';
import { Router } from '@angular/router';

import { Todo } from './todo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   ,
  providers : [TodoserviceService]
})
export class AppComponent {
  title = 'todo-app'; 
  todoArray:any =[];
  todo;
  addFlag : boolean = false;
  constructor(private todoService : TodoserviceService, private route : Router) { }


  newTodo: Todo = new Todo();



  addTodo() {
    this.todoService.addTodo(this.newTodo);
    console.log(this.newTodo);
    this.newTodo = new Todo();
  }


  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

/*
addTodos(value){
  this.todoArray = this.todoService.addTodo(value);
    if(this.todoArray.length == 0){
      alert('Field required **')
  }else{
      console.log('Tasks has been added')
  }
    
  }*/
/*delete item*/
/*
  deleteItem(todo){
    alert("dele called")
    console.log(this.todoService.deleteItem(todo));
  }
*/
  /*
deleteDoneItems(todo){
  alert("dele called")
  console.log(this.todoService.deleteDoneItems(todo));
}

// submit Form
  todoSubmit(todoForm){
     if(todoForm.value!==""){
      this.todoArray = this.todoService.addTodo(todoForm.value);
     //this.todoForm.reset()
    }else{
      alert('Field required **')
    }

  } 


  */
}
