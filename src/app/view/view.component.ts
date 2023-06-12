import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  gaugeTitles: any;


  showData(){
    this.gaugeTitles = JSON.parse(localStorage.getItem('form-data')as any) ;
    return this.gaugeTitles
  }
  data = this.showData();
}
