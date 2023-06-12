import { Component, Input, ViewEncapsulation } from '@angular/core';
// import { FormGroup, FormControl,FormBuilder,FormArray, Validators,AbstractControl} from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from './form-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Reactive Form';

  //   loginForm = new FormGroup({
  //     user: new FormControl('Rohan', [Validators.required]),
  //     password: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(5),
  //     ]),
  //     street: new FormControl('',[Validators.required]),
  //     city: new FormControl('',[Validators.required]),
  //     state: new FormControl('',[Validators.required]),
  //     zip: new FormControl(''),
  //     hobbies : new FormArray([])
  //   });
  //   loginUser() {
  //     console.log(this.loginForm.value);
  //   }
  //   get user() {
  //     return this.loginForm.get('user');
  //   }
  //   get password() {
  //     return this.loginForm.get('password');
  //   }

  //new table
  // empForm = new FormGroup({
  //   emp : new FormControl('',[Validators.required]),
  //   university : new FormControl('',[Validators.required]),
  //   result : new FormControl('',[Validators.required]),
  //   yop : new FormControl('',[Validators.required]),
  //   education : new FormArray([
  //      new FormControl(null)

  //   ])
  // })
  // onAddEdu(){
  //   (<FormArray>this.empForm.get('education')).push(new FormControl(null))
  // }

  // empForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.empForm = this.fb.group({
  //     employees: this.fb.array([])
  //   });
  // }

  // employees(): FormArray {
  //   return this.empForm.get('employees') as FormArray;
  // }

  // newEmployee(): FormGroup {
  //   return this.fb.group({
  //     firstName: '',
  //     lastName: '',
  //     skills: this.fb.array([])
  //   });
  // }

  // addEmployee() {
  //   console.log('Adding an employee');
  //   this.employees().push(this.newEmployee());
  // }

  // removeEmployee(empIndex: number) {
  //   this.employees().removeAt(empIndex);
  // }

  // employeeSkills(empIndex: number): FormArray {
  //   return this.employees()
  //     .at(empIndex)
  //     .get('skills') as FormArray;
  // }

  // newSkill(): FormGroup {
  //   return this.fb.group({
  //     skill: '',
  //     exp: ''
  //   });
  // }

  // addEmployeeSkill(empIndex: number) {
  //   this.employeeSkills(empIndex).push(this.newSkill());
  // }

  // removeEmployeeSkill(empIndex: number, skillIndex: number) {
  //   this.employeeSkills(empIndex).removeAt(skillIndex);
  // }

  // onSubmit() {
  //   console.log(this.empForm.value);
  // }

  // Employee form data ts file start

  // gaugeTitleForm!: FormGroup;
  // gaugeTitles: any;
  // submitted = false;
  // data: any;
  // // empname!: string;
 

  // // display:any =  true;
  // // disabled = true;
  // //  hide:any=true;
  // //ishide=true;
  // // empData:any;
  // // isEdit = false;
  // // validation = false;
  // // isEditable= true;
  

  // get gaugeTitleFormArray() {
  //   return this.gaugeTitleForm.get('gaugeTitles') as FormArray;
  // }

  // constructor(private formBuilder: FormBuilder,private router:Router, private notifications: FormServiceService ) {}

  // ngOnInit() {
  //   this.gaugeTitleForm = this.formBuilder.group({
  //     gaugeTitles: this.formBuilder.array([this.getRowDataForm()]),
  //   });
   
  // }

  // getRowDataForm() {
  //   return this.formBuilder.group({
  //     empname: ['', Validators.required],
  //     uniname: ['', Validators.required],
  //     result: ['', Validators.required],
  //     yearofpassing: ['', Validators.required],
  //     isEditable: [false],
  //     selectEmpData : ['']
  //   });
  // }

  // addItem(): void {
  //   this.submitted = false;
  //   if (this.gaugeTitleForm.invalid) return;

  //   this.gaugeTitles = this.gaugeTitleForm.get('gaugeTitles') as FormArray;

  //   const form = this.getRowDataForm();
  //   this.gaugeTitles.push(form);  
  //   // this.markAllGroupsAsPristine();
  // }

  // // showData(){
  // //   this.gaugeTitles = JSON.parse(localStorage.getItem('form-data')as any) ;
  // //   return this.gaugeTitles
  // // }

  // save(item: any) {
  //   console.log(this.gaugeTitleForm.value);
  //   console.log(this.gaugeTitleFormArray.value);
    
  //   this.submitted = true;
  //   if (this.gaugeTitleForm.invalid) {
  //     return;
  //   }
  //   item.get('isEditable').setValue(true);
  //   localStorage.setItem('form-data',JSON.stringify(this.gaugeTitleFormArray.value));
  //   // this.data = this.showData();
    
   
     
    
  //   // item.get('isEditable').setValue(false);

  //   //  {{this.empname}}
  //   // this.disabled="!gaugeTitleForm.valid"
  //   //  console.log(item);
  //   //  this.display = true;
  //   // this.hide = !this.hide;
  // }



  // onEdit(item: any) {
  //   item.get('isEditable').setValue(false);
  // }

  // removeRow(index: number) {
  //   console.log(index);
  //   (<FormArray>this.gaugeTitleForm.get('gaugeTitles')).removeAt(index);
  //   localStorage.removeItem('form-data');
  // }

  // viewAllData(){
  //   if (this.gaugeTitleForm.invalid) {
  //     return;
  //   }
  //   this.router.navigate(['/viewall']);
  // }

  // // view(i: any){
  // //   this.router.navigate(['/view']); 
  // // }

  // // sendMessage(){
  // //   // const msg = this.gaugeTitleForm.get('form-data')!.value;
  // //   // this.notifications.sendNotificatiion(msg!);
  // // }

  // onChange(event: any, i: number) {

  //   const value = event.target.value;
    
  //   //  const indexControl = this.gaugeTitleFormArray.controls[i];
  //   // if (this.gaugeTitleForm.value) {
  //   //   return
  //   // }

    

  //   // value.get('isEditable').setValue(false);

    
  //   if (!value) return;
  //   if (value === 'empname') {
  //     this.gaugeTitleFormArray.controls[i].get('empname')?.clearValidators();
  //     this.gaugeTitleFormArray.controls[i].get('empname')?.updateValueAndValidity();
  //   } else {
  //     // value.get('isEditable').setValue(true);
  //     this.gaugeTitleFormArray.controls[i].get('empname')?.setValidators(Validators.required);
  //     this.gaugeTitleFormArray.controls[i].get('empname')?.updateValueAndValidity();
  //   }
  //   if (value === 'uniname') {
  //     this.gaugeTitleFormArray.controls[i].get('uniname')?.clearValidators();
  //     this.gaugeTitleFormArray.controls[i].get('uniname')?.updateValueAndValidity();
  //   } else {
  //     this.gaugeTitleFormArray.controls[i].get('uniname')?.setValidators(Validators.required);
  //     this.gaugeTitleFormArray.controls[i].get('uniname')?.updateValueAndValidity();
  //   }
  //   if (value === 'result') {
  //     this.gaugeTitleFormArray.controls[i].get('result')?.clearValidators();
  //     this.gaugeTitleFormArray.controls[i].get('result')?.updateValueAndValidity();
  //   } else {
  //     this.gaugeTitleFormArray.controls[i].get('result')?.setValidators(Validators.required);
  //     this.gaugeTitleFormArray.controls[i].get('result')?.updateValueAndValidity();
  //   }
  //   if (value === 'yearofpassing') {
  //     this.gaugeTitleFormArray.controls[i].get('yearofpassing')?.clearValidators();
  //     this.gaugeTitleFormArray.controls[i].get('yearofpassing')?.updateValueAndValidity();
  //   } else {
  //     this.gaugeTitleFormArray.controls[i].get('yearofpassing')?.setValidators(Validators.required);
  //     this.gaugeTitleFormArray.controls[i].get('yearofpassing')?.updateValueAndValidity();
  //   }
  // }

   // Employee form data ts file end

  // this.gaugeTitleForm.get('gaugeTitles')?.clearValidators
}


// function item(this: any, key: string, value: any) {
//   throw new Error('Function not implemented.');
// }
// markAllGroupsAsPristine() {
//   for (const control of this.gaugeTitleFormArray.controls) {
//     control.markAsUntouched();
//   }
// }
