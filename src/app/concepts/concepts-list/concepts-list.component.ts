import { Component, OnInit } from '@angular/core';
import _ from "lodash";

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
      .Post(data)
      .subscribe((concept) => {
        concept.Category = _.find(this.categorys, { Id: parseInt(data.CategoryId.toString()) });
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
        _.find(this.dataFields[0].fieldGroup, { key: 'CategoryId' }).templateOptions.options = categories.map(function(category) {
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
