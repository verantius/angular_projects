import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  @Input() public task: Task | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
