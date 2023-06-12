import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  gaugeTitles: any;
  emp: any;
  index: any;
  gaugeTitleForm: any;

  constructor(private route: ActivatedRoute) {}

  // save(){
  //   item.get('isEditable').setValue(true);
  // }

  getSelectedEmp() {
    const id = this.route.snapshot.params['id'];
    const employee = JSON.parse(localStorage.getItem('form-data') as string);
    const emp = employee.filter((emp: any) => emp.id == id);
    return emp;
  }

  ngOnInit(): void {
    this.emp = this.getSelectedEmp();
  }

  indexnum() {
    this.index = this.gaugeTitleForm.get('gaugeTitles').control;
  }

  // this.emp.setValue({s
  //   gaugeTitles : {
  //     empname: '',
  //     uniname: '',
  //     result: '',
  //     yearofpassing : ''
  //   }
  // })
  // viewAllData(){
  //   if (this.gaugeTitles.invalid) {
  //     return;
  //   }
  //   this.item.get('isEditable').setValue(true);
  // }
}
