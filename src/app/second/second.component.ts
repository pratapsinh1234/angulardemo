import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  counter:number=0;
  firstName:string="";
  message:string="good morning";

  displaymessage(){
    console.log("Hello")
  }
  changemessage(){
    this.message="welcome"
  }

  increment(){
    if(this.counter<6){
      ++this.counter
    }
  }
  decrement(){
    if(this.counter>0){
      this.counter--;
    }
  }
  setName(e:any){
    console.log("Event Information",e);
    console.log("Entered Value",e.target.value);
    this.firstName = e.target.value;
  }

}
