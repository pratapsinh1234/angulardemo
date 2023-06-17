import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl:'./two-way-data-binding.component.html',
  styleUrls:['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
  firstName:string = "John";

  getFirstName(e:any){
    this.firstName = e.target.value ;
  }
  title="two way binding";
  name:any;

}
