import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
            profileForm = this.fb.group({
              firstname: ['',Validators.required],
              lastname: [''],
              address: this.fb.group({
                 street: [''],
                 city: [''],
                 state:[''],
                 zip: ['']
              }),
            });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {  
  }
  onSubmit(): void {
    console.log(this.profileForm.value);
  }
  upadteProfile(): void {
    this.profileForm.patchValue({
     firstname: 'Nancy',
     address:{
       street: '24 Wallstreet'
     }
    });
  }

}
