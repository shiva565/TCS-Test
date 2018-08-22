import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() fullName:string;
  @Input() firstName:string;
  @Output() change:EventEmitter<string> = new EventEmitter<string>();
  avinashData:any;
  constructor(public service:HttpServiceService) { }

  ngOnInit() {
    this.service.getData().subscribe((data)=>{
      console.log(data);
      this.avinashData=data;
    },(err)=>{
      console.log(err);
    })
  }
  emitEvent(){
    this.change.emit('Angular5');
  }
  getData(){
    console.log('Angular5 last class');
  }

}
