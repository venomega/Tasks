import { Component , output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-addtask',
  imports: [],
  //templateUrl: './addtask.html',
  //styleUrl: './addtask.css',
  template: `
  <section>
  <input placeholder="Titulo">
  <br>
  <textarea placeholder="Task Body"></textarea>
  <div style="font-weight: bold;margin: 20px; display: flex; justify-content: start; align-content: center; ">
  <p style="margin-right: 30px">Tiempo</p>
  	<div style="display: flex; flex-direction: column; text-align: center; margin-right: 10px;">
		<input type="radio" name="duedate">
		<label > 1d </label>
	</div>
  	<div style="display: flex; flex-direction: column; text-align: center; margin-right: 10px;">
		<input type="radio" name="duedate">
		<label > 3d </label>
	</div>
  	<div style="display: flex; flex-direction: column; text-align: center; margin-right: 10px;">
		<input type="radio" checked name="duedate">
		<label > 7d </label>
	</div>
  	<div style="display: flex; flex-direction: column; text-align: center; margin-right: 10px;">
		<input type="radio" name="duedate">
		<label > 14d </label>
	</div>
  	<div style="display: flex; flex-direction: column; text-align: center; margin-right: 10px;">
		<input type="radio" name="duedate">
		<label > 30d </label>
	</div>
    </div>

  <div class="footer">
  <button (click)="close()" class="">X</button>
  <button (click)="addTask()" class="">A</button>
  </div>
  </section>
  `,
  styles: `
  input {
	  color: white;
	  margin: 12px;
	  font-size: 24px;
	  background-color: #2e2e2e; /* Dark gray background */
	  border-right: 0;
	  border-right: 0;
	  border-top: 0;
	  border-bottom: 0;

  }
  textarea {
	  color: white;
	  margin: 12px;
	  height: 90vh;
	  font-size: 18px;
	  background-color: #2e2e2e; /* Dark gray background */
	  border-right: 0;
	  border-top: 0;
	  border-bottom: 0;

  }
section {
    display: flex; /* Añadido */
    flex-direction: column; /* Añadido para organizar verticalmente */
    position: fixed;
    background-color: #2e2e2e; /* Dark gray background */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1001;
}

.footer {
    display: flex;
    justify-content: space-between;
    margin-top: auto; /* Añadido */
}
button {
    background-color: gray; /* Green background */
    font-weight: bold; 
    border: none; /* No border */
    color: white; /* White text */
    padding: 10px 20px; /* Some padding */
    text-align: center; /* Centered text */
    text-decoration: none; /* No underline */
    display: inline-block; /* Inline block element */
    font-size: 24px; /* Increase font size */
    margin: 4px 2px; /* Margin for spacing */
    cursor: pointer; /* Pointer cursor on hover */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
    transition: background-color 0.3s, transform 0.2s; /* Smooth transition */
}

  `
})
export class Addtask {
	hidden = 'true'
	hidden_event = output<string>();
	close(){
		this.hidden = 'false'
		this.hidden_event.emit(this.hidden)
		
	}
	addTask(){
		var len = localStorage.length
	
		var title = document.querySelector("input")?.value
		var description = document.querySelector("textarea")?.value
		if (title?.trim().length == 0 ){
			return
		}else{
			var task = JSON.stringify({ title: title, description: description })
			localStorage.setItem(len.toString(), task)
		}
		this.close()
	}

}
