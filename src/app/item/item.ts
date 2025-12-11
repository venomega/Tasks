import { Component, Input } from '@angular/core';
import { Itemviewer } from '../itemviewer/itemviewer';

@Component({
  selector: 'app-item',
  imports: [Itemviewer],
  //templateUrl: './item.html',
  template: `
  <app-itemviewer hidden={{hidden_actioner}} (hiddenChange)="onHiddenChange($event)"/>
  <div class="item container" (click)="greet()" >
    <h3>{{ title }}</h3>
    <p>{{ body }}</p>
  </div>
  `,
  styles: `
    .item {
      background-color: dark gray;
      color: #fff;
      border-radius: 8px;
      margin: 0.6rem 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    h3 {
      margin: 0 0 0.5rem;
      font-size: 1.2rem;
    }
    p {
      margin: 0;
      font-size: 0.95rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `,
  styleUrl: './item.css',
})
export class Item {
	@Input() title: string = 'Title';
	@Input() body: string = '';
	hidden_actioner = 'false';
	greet() {
		console.log(this.hidden_actioner)
		this.hidden_actioner = 'true';
	}
	onHiddenChange(x: string) {
	  this.hidden_actioner = x;
	}


}
