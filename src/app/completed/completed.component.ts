import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoserviceService } from '../todoservice.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  activeId : number
  compArray : any = []
  doneTodo: Todo = new Todo();
  todos: Todo[] = [];
  constructor(private todoservice : TodoserviceService, private activeRoute : ActivatedRoute) { }

  ngOnInit() { 

    
    
    
    this.activeRoute.params.subscribe(
      (routeParams) => { 
        
      this.activeId  = routeParams.id;

     this.todos = this.todoservice.getCompletedTodos(this.activeId);

  }     
    
    );
    
    


  }
    

  /*delete item*/
 /* deleteItem(todo){
    
    this.todoservice.deleteTodoById(todo.id);
  }
*/
}

  
  

