import { Component, signal, Output, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { List } from './list/list';
import { Addtask } from './addtask/addtask';

@Component({
  selector: 'app-root',
  imports: [List, Addtask ],
  template: `
  <div>
	  <h2>Task</h2>
	  <button (click)="activate()">+</button>
  </div>
  @if(hidden){
	  <app-addtask (hidden_event)="deactivate()" (new_task)="new_task()" ></app-addtask>
  }
  <app-list (eloutput)="new_task()" #taskList />
  `,
  //templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
	@ViewChild('taskList') update_task!: List;  // Use definitive assignment assertion
	hidden = false
	activate(){
		this.hidden = true
	}
	deactivate(){
		this.hidden = false
	}
	new_task(){
		console.log("new task")
		this.update_task.incoming()
	}
}
