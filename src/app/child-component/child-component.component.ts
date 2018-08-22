import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor(public fb:FormBuilder) {
    this.registerForm = fb.group({
      'firstName':['rajesh',Validators.required],
      'lastName':['kumar',Validators.minLength(2)]
    })
   }

  ngOnInit() {
  }
  registerForm : FormGroup;
  SubmitForm(form:any){
    console.log(form);
  }
}
