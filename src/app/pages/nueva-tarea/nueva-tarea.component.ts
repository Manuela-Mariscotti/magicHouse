import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css'],
})
export class NuevaTareaComponent implements OnInit {
  users: string[] = ['User1', 'User2', 'User3'];
  tareas: string[] = ['task1', 'task2'];
  dias: string[] = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  constructor() {}

  ngOnInit(): void {}
}
