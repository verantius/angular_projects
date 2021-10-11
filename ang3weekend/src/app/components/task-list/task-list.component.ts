import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  public tracklist: Track[] = [
    new Task(title: 'Task no 1'),
    new Task(title: 'Task no 2')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
