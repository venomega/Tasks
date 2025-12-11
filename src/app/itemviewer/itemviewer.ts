import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-itemviewer',
  imports: [],
  template: `
  @if (hidden == 'true') {
<div >
	<div>
  	<h3>{{title}}</h3>
  	<button (click)="toggleHidden()" id="close">
	X
	</button>
	</div>
	<div id="textcontainer">
  	@if (editable) {
  		<textarea value='{{text}}' > </textarea>
  		<button (click)="saveChanges()" id="edit">
  		  Guardar Cambios
  		</button>
  	}@else{
  		<p (click)="makeEditable()">{{text}}</p>
	}
	</div>
</div>
  }
  `,
  styles: `
  textarea {
	  width: 100%;
	  height: 70vh;
	  background-color: black;
	  color: white;
	  border: none;
  }
  textarea:focus {
	  width: 100%;
	  height: 70vh;
	  background-color: black;
	  color: white;
	  border: none;
	  outline: none;
  }

  div {
	  /*align-items: center; */
	  background-color: #1e1e1e;
	  border-radius: 8px;
	  box-shadow: 0 0 10px rgba(0,0,0,0.5);
	  color: #ffffff;
	  display: flex;
	  flex-direction: column;
	  /*justify-content: center; */
	  left: 2vw;
	  max-height: 90vh;
	  max-width: 92vw;
	  min-height: 300px;
	  min-width: 92vw;
	  padding: 20px;
	  position: fixed;
	  top: 2vh;
	  z-index: 1000;
  }
  h3 {
	  position: absolute;
	  top: 0;
	  left: 0;
	  padding: 8px 16px;
	  border: none;
	  border-radius: 4px;
	  cursor: pointer;
  }
  #textcontainer {
	  overflow-y: auto;
	  margin-top: 50px;
	  height: 70vh;
	  text-align: left;
	  cursor: pointer;
  }
  button {
  }

  #edit{
	margin-top: 10px;
	padding: 8px 16px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
  }
  #close{
	position: absolute;
	top: 0;
	right: 0;
	padding: 8px 16px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
  }
  `
})
export class Itemviewer {
  @Input() title: string = 'Item Title';
  @Input() text: string = 'Item description goes here.';
  @Input() hidden: string = 'false';

  @Output() hiddenChange: EventEmitter<string> = new EventEmitter();
  editable: boolean = false;
  editableText: string = '';

  toggleHidden() {
    this.hidden = 'false';
    this.hiddenChange.emit(this.hidden);
  }

  makeEditable() {
    this.editable = true;
    this.editableText = this.text; // Initialize editable text
  }

  saveChanges() {
    this.text = this.editableText; // Save changes
    this.editable = false; // Exit editable state
  }
}

