import { Title } from '@angular/platform-browser';
import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public taskService: TasksService, private title: Title) {
    this.title.setTitle('Task Manager')
  }

  deleteTask(i) {
    if(confirm('Are you sure to delete the ' + this.taskService.tasks[i].title + ' Task'))
      this.taskService.deleteTask(i)
  }

}
