import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksList } from 'src/app/models/tasks-list';
import da
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public toDolis: Tasklist = new TaskList(title 'TODO', tasks [

    new Task(title 'Todo no 1'),
    new Task(title 'Todo no 2')
  ]);
  
  public inProgressList: TaskList = new TaskList(title 'IN PROGRESS', tasks [

    new Task(title 'To do in progress 1'),
    new Task(title 'To do in progress 1')
  ]);

  public donelist: TaskList = new TaskList(title 'DONE');

  constructor() { }

  ngOnInit(): void {
  }

}
