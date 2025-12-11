import { Component } from '@angular/core';
import { Item } from '../item/item';

@Component({
  selector: 'app-list',
  imports: [Item],
  //templateUrl: './list.html',
  template: `
  <div>
  @for(number of tasks; track number) {
	  <app-item [title]="number.title" [body]="number.description"/>
  }
  </div>
  `,
  styleUrl: './list.css',
})
export class List {
	tasks = [
		{title: "task title", description: "ttask descriptiontask descriptiontask descriptiontask descriptiontask descriptiontask descriptiontask descriptiontask descriptiontask descriptiontask descriptiontask descriptiontask descriptionask description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"},
		{title: "task title", description: ""},
		{title: "task title", description: "task description"},
		{title: "task title", description: "task description"}
	]

}
