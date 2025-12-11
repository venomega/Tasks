import { Component, signal, Output } from '@angular/core';
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
	  <app-addtask (hidden_event)="deactivate()"></app-addtask>
  }
  <app-list />
  `,
  //templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
	
	hidden = false
	activate(){
		this.hidden = true
	}
	deactivate(){
		this.hidden = false
	}
}
