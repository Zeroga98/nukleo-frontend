import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModelService } from '../../shared/services/api/model.service'
import { HomeComponent } from '../home.component'

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css']
})
export class ListDevicesComponent implements OnInit {
  @Input('model') modelis: any;

  private detail: any;
  constructor( 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private modelService: ModelService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
    this.getDevicesModel(); 
  }
   public getDevicesModel() {
     console.log(this.modelis);
    this.modelService.getDevicesModel('')
    .subscribe(
      (data => {
        this.detail=data;
        console.log(data);
      }),
      (error: any) =>{
        console.log(error);
      }
    );   
  } 

}
