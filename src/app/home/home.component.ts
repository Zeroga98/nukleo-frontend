import { Component, OnInit, Input } from '@angular/core';
import { ModelService } from '../shared/services/api/model.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public models:any;

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.getModels();
  }
  /**
   * getModels
   */
  public getModels() {
    this.modelService.models('')
    .subscribe(
      (data => {
       this.models=data;
        console.log(data);
      }),
      (error: any) =>{
        console.log(error);
      }
    );   
  }

}
