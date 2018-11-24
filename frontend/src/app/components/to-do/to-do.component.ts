import { Component, OnInit } from '@angular/core';

import { TaskService } from '../.././services/task/task.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  assignedTasks = [];
  doneTasks = [];
  inProgressTasks = [];
  unassignedTasks = [];

  constructor(private taskService: TaskService) {
    this.taskService.getAssignedTasks().then((res) => {
      for (var i = 0; res[i] != undefined; i++) {
        this.assignedTasks.push(res[i]);
      }
    });
    this.taskService.getDoneTasks().then((res) => {
      for (var i = 0; res[i] != undefined; i++) {
        this.doneTasks.push(res[i]);
      }
    });
    this.taskService.getInProgressTasks().then((res) => {
      for (var i = 0; res[i] != undefined; i++) {
        this.inProgressTasks.push(res[i]);
      }
    });
    this.taskService.getUnassignedTasks().then((res) => {
      for (var i = 0; res[i] != undefined; i++) {
        this.unassignedTasks.push(res[i]);
      }
    });
  }

  ngOnInit() {
  }

}
