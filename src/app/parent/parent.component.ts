import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // fullName:string;
  // firstName:string;
  @ViewChild(ChildComponent) child:ChildComponent;
  constructor(public service:HttpServiceService) { 
    // this.fullName="praveen";
    // this.firstName="suraj";
  }

  ngOnInit() {
    console.log(this.child);
    this.child.getData();
  }
changeMethod(event){
  console.log(event);
}
generateEvent(){
  // this.service.sendData(this.fullName);
}
}
