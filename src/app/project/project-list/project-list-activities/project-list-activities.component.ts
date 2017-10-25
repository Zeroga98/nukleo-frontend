import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-list-activities',
  templateUrl: './project-list-activities.component.html',
  styleUrls: ['./project-list-activities.component.css']
})
export class ProjectListActivitiesComponent implements OnInit {

  @Input() projectId: string;
  
  constructor() { }

  ngOnInit() {
    console.log(this.projectId)
  }

}
