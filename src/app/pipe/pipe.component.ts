import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
message1:string="Welcome to our website";
summary:string="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, dignissimos.";
todaysDate = new Date();
productPrice:number=394751;
average:number = 3456444544.4711878798;
}
