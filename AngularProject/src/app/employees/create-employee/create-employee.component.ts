import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
      employeeForm: FormGroup;
      firstnamelength = 0;
  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
             firstname:['',Validators.required],
             email: [''],
             skills:this.fb.group({
               skillname:[''],
               experience:[''],
               proficiency:['']

             })

 
      //
    //    firstname : new FormControl(),
    //    email: new FormControl(),
    //    skills: new FormGroup({
    //      skillname: new FormControl(),
    //       experience: new FormControl(),
    //       proficiency: new FormControl()   
    //    })
     // Same things are doing the using the FromBulider  Same things are doing the using the FromBulider  Same things are doing the using the FromBulider
    });
    this.employeeForm.get('firstname').valueChanges.subscribe((value:string)=>{
           this.firstnamelength = value.length;
        
    });
  }
  
  onSubmit(): void {
    console.log(this.employeeForm.value);
    // console.log(this.employeeForm);
    // console.log(this.employeeForm.controls.firstname.value);
  }
  onLoadData(): void {
    this.employeeForm.patchValue({
      // patchValue are used to the show only the root from values not a nested values
      // setValue  are used to show the root and nested form values also..
        firstname: 'Om',
        email:'om@gmail.com',
        skills: {
             skillname: 'Java',
               experience: 1,
               proficiency: 'intermediate'
          }
    });
  }
}
