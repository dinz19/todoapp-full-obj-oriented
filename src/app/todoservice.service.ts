  import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todos: Todo[] = [];
  constructor() { }
curTodo : Todo ;

  addTodo(todo: Todo): TodoserviceService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoserviceService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

   // Simulate PUT /todos/:id
   updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    
      return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

   // Simulate GET /todos/:id
   getCompletedTodos(id: number): Todo[] {
    console.log(id);
    //console.log(this.getAllTodos().filter((todo) => todo.id == id).pop());
    this.curTodo =  this.getAllTodos().filter((todo) => todo.id == id).pop();
    this.toggleTodoComplete(this.curTodo);

    return this.getAllTodos().filter((todo) => todo.complete == true);
  }

  

  /*todoArray=[];
  todo;
  compTasksArray = [];
  //todoForm: new FormGroup()
addTodo = function (value){
 
  if(value !== ""){
     this.todoArray.push(value)
     return this.todoArray;
  }
    
  }
/*delete item
  deleteItem= function (todo){
   for(let i=0 ;i<= this.todoArray.length ;i++){
    if(todo== this.todoArray[i]){
      return this.todoArray.splice(i,1)
    }
   }
  }*/

  /*delete Done item
  deleteDoneItems= function (todo){
   for(let i=0 ;i<= this.todoArray.length ;i++){
    if(todo== this.compTasksArray[i]){
      return this.compTasksArray.splice(i,1)
    }
   }
  }

  getCompletedTasks = function(value){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(value== this.todoArray[i]){
       
       this.compTasksArray.push(value);
       this.todoArray.splice(i,1);
       console.log(this.compTasksArray);
       return this.compTasksArray;
      }
     }

  }

  todoSubmit(todoForm){
     if(todoForm.value!==""){
    this.todoArray.push(todoForm.value.todo)
     //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
    console.log(todoForm)
    //todoForm.reset();
  } */
}
