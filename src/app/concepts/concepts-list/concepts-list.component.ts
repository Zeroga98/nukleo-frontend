import { Component, OnInit } from '@angular/core';

import { OData } from '../../shared/services/odata/odata';
import { Concept } from '../../shared/models/concepts.model';

@Component({
  selector: 'app-concepts-list',
  templateUrl: './concepts-list.component.html',
  styleUrls: ['./concepts-list.component.css']
})
export class ConceptsListComponent implements OnInit {

  public concepts: Concept[];

  constructor(private odata: OData) {}

  ngOnInit() {
  	this.getAll();
  }

  public getAll(){
    this.odata.Concept
    .Query() 
    .Expand("Category")
    .Exec()
    .subscribe((concepts) => {
      this.concepts = concepts;
      console.log(this.concepts);
    },
    error => {
    });
  }

  public update(data: Concept){
  	let category = data["Category"];
  	delete data["Category"];

    this.odata.Concept
    .Put(data, data.Id)
    .subscribe((concepts) => {
      console.log(concepts);
      data.Category = category;
    },
    error => {
    	console.log(error);
    });
  }

  public delete(ConceptId, index){
    this.odata.Concept
    .Delete(ConceptId)
    .subscribe((Concepts) => {
    	this.concepts.splice(index, 1);
      	console.log(Concepts);
    },
    error => {
      console.log(error);
    });
  }

}
