import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormServiceService } from '../form-service.service';
import { find } from 'rxjs';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss']
})
export class EmployeListComponent implements OnInit,AfterViewInit{
  @Input () isView:boolean | undefined
  @Input () empData : any
  gaugeTitleForm!: FormGroup;
  gaugeTitles: any;
  submitted = false;
  data: any;
  id!:string;
  item!: FormGroup;
  empname: any;
  index! : number;
  
  get gaugeTitleFormArray() {
    return this.gaugeTitleForm.get('gaugeTitles') as FormArray;
  }


  constructor(private formBuilder: FormBuilder,private router:Router, private route:ActivatedRoute ) {}


  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    this.gaugeTitleForm = this.formBuilder.group({
      gaugeTitles: this.formBuilder.array([this.getRowDataForm()]),
    });
   
  }

  ngAfterViewInit(){
     const viewemp = this.gaugeTitleForm.get('gaugeTitles')as FormArray;
     const empFormGroup = viewemp.controls[0] as FormGroup;
     empFormGroup.patchValue({
      empname: this.empData[0].empname,   
      uniname: this.empData[0].uniname,
      result: this.empData[0].result ,
      yearofpassing: this.empData[0].yearofpassing,
    })
  }


  getRowDataForm() {
    return this.formBuilder.group({
      empname: ['', Validators.required],
      uniname: ['', Validators.required],
      result: ['', Validators.required],
      yearofpassing: ['', Validators.required],
      isEditable: [false],
      selectEmpData : [''],
      id : [this.generateId()],
      index : []
    });
  }

  addItem(): void {
    this.submitted = false;
    if (this.gaugeTitleForm.invalid) return;

    this.gaugeTitles = this.gaugeTitleForm.get('gaugeTitles') as FormArray;

    const form = this.getRowDataForm();
    this.gaugeTitles.push(form);  
    // this.markAllGroupsAsPristine();
  }

  generateId(){
    return (Math.random()*100000000000000000).toString()[0];
  }

  



  
  
  // getSelectedEmp(id:string){
  //   const employee = JSON.parse(localStorage.getItem('form-data') as any);
  //   const emp = find((emp:any)=> emp.id == id)
  //   return emp;
  // }

  // showData(){
  //   this.gaugeTitles = JSON.parse(localStorage.getItem('form-data')as any) ;
  //   return this.gaugeTitles
  // }

  save(item:any) {
    console.log(this.gaugeTitleForm.value);
    console.log(this.gaugeTitleFormArray.value);
    
    this.submitted = true;
    if (this.gaugeTitleForm.invalid) {
      return;
    }
    item.get('isEditable').setValue(true);
    localStorage.setItem('form-data',JSON.stringify(this.gaugeTitleFormArray.value));
    // this.data = this.showData();
    
   
     
    
    // item.get('isEditable').setValue(false);

    //  {{this.empname}}
    // this.disabled="!gaugeTitleForm.valid"
    //  console.log(item);
    //  this.display = true;
    // this.hide = !this.hide;
  }



  onEdit(item: any) {
    item.get('isEditable').setValue(false);
  }

  removeRow(index: number) {
    console.log(index);
    (<FormArray>this.gaugeTitleForm.get('gaugeTitles')).removeAt(index);
    localStorage.removeItem('form-data');
  }

  viewAllData(){
    if (this.gaugeTitleForm.invalid) {
      return;
    }

    this.router.navigate(['/viewall']);

  }

  view(i: any){
   
    if (this.gaugeTitleForm.invalid) {
      return;
    }
    this.router.navigate(['/view']); 
   ;
  }

  // sendMessage(){
  //   // const msg = this.gaugeTitleForm.get('form-data')!.value;
  //   // this.notifications.sendNotificatiion(msg!);
  // }

  onChange(event: any, i: number) {

    const value = event.target.value;
    
    //  const indexControl = this.gaugeTitleFormArray.controls[i];
    // if (this.gaugeTitleForm.value) {
    //   return
    // }

    

    // value.get('isEditable').setValue(false);

    
    if (!value) return;
    if (value === 'empname') {
      this.gaugeTitleFormArray.controls[i].get('empname')?.clearValidators();
      this.gaugeTitleFormArray.controls[i].get('empname')?.updateValueAndValidity();
    } else {
      
      this.gaugeTitleFormArray.controls[i].get('empname')?.setValidators(Validators.required);
      this.gaugeTitleFormArray.controls[i].get('empname')?.updateValueAndValidity();
    }
    if (value === 'uniname') {
      this.gaugeTitleFormArray.controls[i].get('uniname')?.clearValidators();
      this.gaugeTitleFormArray.controls[i].get('uniname')?.updateValueAndValidity();
    } else {
      this.gaugeTitleFormArray.controls[i].get('uniname')?.setValidators(Validators.required);
      this.gaugeTitleFormArray.controls[i].get('uniname')?.updateValueAndValidity();
    }
    if (value === 'result') {
      this.gaugeTitleFormArray.controls[i].get('result')?.clearValidators();
      this.gaugeTitleFormArray.controls[i].get('result')?.updateValueAndValidity();
    } else {
      this.gaugeTitleFormArray.controls[i].get('result')?.setValidators(Validators.required);
      this.gaugeTitleFormArray.controls[i].get('result')?.updateValueAndValidity();
    }
    if (value === 'yearofpassing') {
      this.gaugeTitleFormArray.controls[i].get('yearofpassing')?.clearValidators();
      this.gaugeTitleFormArray.controls[i].get('yearofpassing')?.updateValueAndValidity();
    } else {
      this.gaugeTitleFormArray.controls[i].get('yearofpassing')?.setValidators(Validators.required);
      this.gaugeTitleFormArray.controls[i].get('yearofpassing')?.updateValueAndValidity();
    }
  }

  // this.gaugeTitleForm.get('gaugeTitles')?.clearValidators
}



