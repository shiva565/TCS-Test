import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputComponentComponent } from './input-component/input-component.component';


@NgModule({
  declarations: [
      InputComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
     InputComponentComponent 
  ],
  providers: [],
  bootstrap: [InputComponentComponent]
})
export class FormModule { }
