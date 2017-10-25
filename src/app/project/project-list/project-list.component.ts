import { Component, OnInit } from '@angular/core';
import { Project } from 'app/shared/models/project.model';
import { OData } from 'app/shared/services/odata/odata';
import { Customer } from 'app/shared/models/customer.model';
import { ProjectType } from 'app/shared/models/project-type.model';
import { ExpenseUnit } from 'app/shared/models/expense-unit.model';
import { TokenStorageService } from 'app/shared/services/auth/token-storage.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  public projects: Project[];
  
  public customers: Customer[];
  public selectedCustomer:Customer;
  filteredCustomers: any[];

  public projectTypes: ProjectType[];
  public selectedProjectType:ProjectType;
  filteredProjectTypes: any[];

  public expenseUnits: ExpenseUnit[];
  public selectedExpenseUnit:ExpenseUnit;
  filteredExpenseUnits: any[];


  
  es: any;
  



  projectform: FormGroup;
  
  
  constructor(private odata: OData,
              private tokenStorageService:TokenStorageService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllProjects();
    this.getAllCustomers();
    this.getAllProjectTypes();
    this.getAllExpenseUnits();


    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

  this.projectform = this.fb.group({
    'projectName': new FormControl('', Validators.required),
    'selectedCustomer': new FormControl('', Validators.required),
    'selectedProjectType': new FormControl('', Validators.required),
    'selectedExpenseUnit': new FormControl('', Validators.required),
    'dateRange': new FormControl('', Validators.required),
    'projectNotes': new FormControl('')
  
});
  
  }

  public getAllProjects() {
		this.odata.Project
      .Query()
      .Expand("Employee")
			.Exec()
			.subscribe((projects) => {
				this.projects = projects;
			},
			error => {
			});
  }
  
  public getAllProjectTypes() {
		this.odata.ProjectType
      .Query()
			.Exec()
			.subscribe((projectsTypes) => {
        
      
				this.projectTypes = projectsTypes.map(function (projectsType) {
          return {
              Id: projectsType.Id,
              Description: projectsType.Description
          }
      });
			},
			error => {
			});
  }

  public getAllExpenseUnits() {
		this.odata.ExpenseUnit
      .Query()
			.Exec()
			.subscribe((expenseUnits) => {
        
      
				this.expenseUnits = expenseUnits.map(function (expenseUnit) {
          return {
              Id: expenseUnit.Id,
              Name: expenseUnit.Name
          }
      });
			},
			error => {
			});
  }

  public getAllCustomers() {
		this.odata.Customer
      .Query()
			.Exec()
			.subscribe((customers) => {

        
      
				this.customers = customers.map(function (customer) {
          return {
              Id: customer.Id,
              FirstName: customer.FirstName,
              LastName: customer.LastName,
              Name: customer.Id+"."+ customer.FirstName + " "+ customer.LastName
          }
      });
			},
			error => {
			});
  }
  
  


  filterCustomers(event) {
    this.filteredCustomers = [];
    for(let i = 0; i < this.customers.length; i++) {
        let customer = this.customers[i];
        if(customer.FirstName.toLowerCase().indexOf(event.query.toLowerCase()) == 0
          || customer.LastName.toLowerCase().indexOf(event.query.toLowerCase()) == 0
        ) {
            this.filteredCustomers.push(customer);
        }
    }
}

filterProjectTypes(event) {
  this.filteredProjectTypes = [];
  for(let i = 0; i < this.projectTypes.length; i++) {
      let projectType = this.projectTypes[i];
      if(projectType.Description.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
          this.filteredProjectTypes.push(projectType);
      }
  }
}

filterExpenseUnit(event) {
  this.filteredExpenseUnits = [];
  for(let i = 0; i < this.expenseUnits.length; i++) {
      let expenseUnit = this.expenseUnits[i];
      if(expenseUnit.Name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
          this.filteredExpenseUnits.push(expenseUnit);
      }
  }
}

public create() {

  console.log(this.projectform);
  console.log(this.projectform.value.projectName);
    let data = new Project();
    data.Name = this.projectform.value.projectName;
    data.EmployeeId = parseInt(this.tokenStorageService.getEmployeeId());
    data.ProjectTypeId = this.projectform.value.selectedProjectType.Id;
    data.ExpenseUnitId = this.projectform.value.selectedExpenseUnit.Id;
    data.CustomerId = this.projectform.value.selectedCustomer.Id;
    data.InDate = this.projectform.value.dateRange[0];
    data.OutDate = this.projectform.value.dateRange[1];
    data.Notes = this.projectform.value.projectNotes;
    let projectData = {Project:data};
    this.odata.ProjectCreate
    .Post(projectData)
    .subscribe((project) => {
      this.projects.push(project);
     
    },
    error => {
    });

}

}
