import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  src:any;
  public data = [
  {
    name: "Test 1",
    age: 13,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 2',
    age: 11,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 4',
    age: 10,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
];
  @ViewChild('imgRef') img:ElementRef;
  image:any;
  constructor(public http:HttpServiceService){
      var result = http.filmList();
      console.log(result);
  }
  changeListener($event) : void {
  this.readThis($event.target);
}

readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.image = myReader.result;
  }
  myReader.readAsDataURL(file);
}
  ngOnInit(){
    // this.http.getFilemListfromApi().subscribe((res)=>{
    //   // this.src = 'data:image/svg+xml;base64,'+res;
    //   console.log(res);
    //     this.img.nativeElement.src = 'data:image/jpg;base64,'+res;
    // });
    
    this.http.getFilmListfromApiUsingPromises().then((result)=>{
      console.log(result);
    }).catch((err)=>{
      console.log(err);
    });
  }
  downloadFile(){
    new Angular2Csv(this.data, 'My Report');
  }
}
