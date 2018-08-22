import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = true;
  details = 'text';
  test = true;
  listOfName = ['shruti','rajesh','suraj','swatej'];
  constructor() { }

  ngOnInit() {
   
  }
    submitData(){
      this.test=false;
      this.details = 'password';
        console.log(this.name);
        this.name=!this.name;
    }
    showAlert(){
      alert('event binding');
    }
  persons = [{
    name:'mythiri',
    country: 'US'
  },
  {
    name:'mythriis',
    country:'IND'
  },{
    name:'amazon',
    country: 'UK'
  }]

}


// 46348790563