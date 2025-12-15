import { Component, output, input } from '@angular/core';
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
	eloutput = output<boolean>()
	tasks = [
		{ title: "title",
		description: "description",
		plank: true

		}
	]
	update_tasks(){
		//if (this.tasks[0].plank === true ){
		//	this.tasks = []
		//}
		this.tasks = []
		if (localStorage.length > 0){
			let idx = localStorage.getItem("idx")
			for (let i = 1; i <= Number(idx); i++ ){
				let data = localStorage.getItem(String(i)) 
				if (data !== null ){
					var asd = JSON.parse(data)
					let num = this.tasks = [...this.tasks, asd];
				}
			}
		}

	}
	incoming() : void{
		this.update_tasks()
	}
	ngOnInit(): void{
		this.update_tasks()
	}
}
