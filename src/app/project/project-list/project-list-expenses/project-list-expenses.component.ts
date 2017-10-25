import { Component, OnInit, Input } from '@angular/core';
import { OData } from 'app/shared/services/odata/odata';
import { ProjectExpense } from 'app/shared/models/project-expense.model';

@Component({
  selector: 'app-project-list-expenses',
  templateUrl: './project-list-expenses.component.html',
  styleUrls: ['./project-list-expenses.component.css']
})
export class ProjectListExpensesComponent implements OnInit {


  @Input() projectId: number;
  projectExpenses: ProjectExpense[];
  
  constructor( private odata: OData,) { }

  ngOnInit() {

    this.getAllProjectExpenses();
  }

  public getAllProjectExpenses() {
		this.odata.Project.getProjectExpenses(this.projectId)
      .Query()
			.Exec()
			.subscribe((projectExpenses) => {
				this.projectExpenses = projectExpenses;
			},
			error => {
			});
  }

}
