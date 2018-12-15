import { Component, OnInit } from '@angular/core';



class Registration{
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public password: string ='',
  ) {}
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrations : Registration[] = [];
  regModel: Registration;
  showNew: boolean = false;
  submitType: string = 'Save';
  selectedRow: number;
  constructor() {
    this.registrations.push(new Registration('Amit','Patil','amit@gmail.com','amit1234'));
    this.registrations.push(new Registration('Rahul','Patare','rahul@gmail.com','rahul1234'));
    this.registrations.push(new Registration('Amol','Rana','amol@gmail.com','amol1234'))
   }

  ngOnInit() {
  }
  onNew() {
    
    this.regModel = new Registration();
    this.submitType = 'Save';
    this.showNew = true;
  }

  
  onSave() {
    if (this.submitType === 'Save') {
      this.registrations.push(this.regModel);
    } else {
     
      this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      this.registrations[this.selectedRow].lastName = this.regModel.lastName;
      this.registrations[this.selectedRow].email = this.regModel.email;
      this.registrations[this.selectedRow].password = this.regModel.password;
      
    }
    this.showNew = false;
  }

 
  onEdit(index: number) {
    
    this.selectedRow = index;
    this.regModel = new Registration();
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    this.submitType = 'Update';
    this.showNew = true;
  }

  onDelete(index: number) {
    this.registrations.splice(index, 1);
  }

  onCancel() {
    this.showNew = false;
  }

}
