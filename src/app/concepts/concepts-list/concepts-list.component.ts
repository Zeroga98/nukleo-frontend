import { Component, OnInit } from '@angular/core';

import { OData } from '../../shared/services/odata/odata';
import { Concept } from '../../shared/models/concepts.model';
import ConceptForms from '../../shared/forms/concept.forms';

@Component({
  selector: 'app-concepts-list',
  templateUrl: './concepts-list.component.html',
  styleUrls: ['./concepts-list.component.css']
})
export class ConceptsListComponent implements OnInit {

  public concepts: Concept[];
  public categorys: any[];
  public fieldCreate = { Name: "" };
  public form = ConceptForms.initForm();
  public dataFields = ConceptForms.getCreateFields();

  constructor(private odata: OData) {}

  ngOnInit() {
    this.getCategoriesAll();
  	this.getAll();
  }

  public getAll(){
    this.odata.Concept
    .odata()
    .Query() 
    .Expand("Category")
    .Exec()
    .subscribe((concepts) => {
      this.concepts = concepts;
    },
    error => {
    });
  }

  public create(data: Concept) {
    if(data){
      this.odata.Concept
      .odata()
      .Post(data)
      .subscribe((concept) => {
        concept.Category = this.categorys.find(category => {
          return category.Id == parseInt(data.CategoryId.toString());
        });
        this.concepts.push(concept);
      },
      error => {
      });
    }
  }

  public update(data: Concept){
  	let category = data["Category"];
  	delete data["Category"];

    this.odata.Concept
    .odata()
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
    .odata()
    .Delete(ConceptId)
    .subscribe((Concepts) => {
    	this.concepts.splice(index, 1);
    },
    error => {
      console.log(error);
    });
  }

  public getCategoriesAll() {
    return this.odata.Categories
      .Query()
      .Exec()
      .subscribe((categories) => {
        this.categorys = categories;
        this.dataFields[0].fieldGroup.find(field => {
          return 'CategoryId' == field.key;
        }).templateOptions.options = categories.map(function(category) {
          return {
            value: category.Id,
            label: category.Name
          }
        });
      },
      error => {
      });
  }

}
