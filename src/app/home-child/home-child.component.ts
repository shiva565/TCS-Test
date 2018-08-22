import { Component  } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent {
 form: FormGroup;
    loading: boolean = false;
@ViewChild('fileInput') fileInput: ElementRef;
constructor(private fb: FormBuilder) {
     this.createForm();
}
createForm() {
     this.form = this.fb.group({
      name: ['', Validators.required],
      // myavatar: ['', Validators.required],
       avatar: null
});
}
onFileChange(event: any) {
  let reader = new FileReader();
  if(event.target.files && event.target.files.length > 0) {
  let file = event.target.files[0];
  reader.readAsDataURL(file);
  reader.onload = () => {
  this.form.get('avatar').setValue({
  filename: file.name,
  filetype: file.type,
  value: reader.result.split(',')[1]
})
};
}
}
onSubmit() {
       const formModel = this.form.value;
      this.loading = true;
//  http request / service call 
// this.http.post('apiUrl', formModel)
     setTimeout(() => {
            console.log(formModel);
           alert('Done!');
              this.loading = false;
               }, 1000);
}
clearFile() {
   this.form.get('avatar').setValue(null);
   this.fileInput.nativeElement.value = '';
}
}
