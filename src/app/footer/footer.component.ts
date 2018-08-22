import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public service:HttpServiceService) {
    service.readData().subscribe((result)=>{
      console.log(result);
    })
   }

  ngOnInit() {
  }
  register = {

  };
  submitForm(form:any){
    console.log(form);
    console.log(this.register);
  }
}
