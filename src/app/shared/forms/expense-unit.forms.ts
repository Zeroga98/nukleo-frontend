import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';

class ExpenseUnitForms {

	public initForm() {
		return new FormGroup({});
	}

	public getCreateFields(): Array<FormlyFieldConfig> {
		return [{
			className: 'row',
			fieldGroup: [
				{
					className: 'col-md-6',
					key: 'Name',
					type: 'input',
					templateOptions: {
						label: 'Nombre:',
						required: true
					},
					validators: {
						validation: Validators.compose([Validators.required])
					}
				},
				{
					className: 'col-md-6',
					key: 'Descripcion',
					type: 'input',
					templateOptions: {
						label: 'Descripción:',
						required: true
					},
					validators: {
						validation: Validators.compose([Validators.required])
					}
				}, {
					className: 'col-md-6',
					key: 'ResponsableId',
					type: 'select',
					templateOptions: {
						label: 'Responsable:',
						required: true,
						options: []
					},
					validators: {
						validation: Validators.compose([Validators.required])
					}
				},
				{
					className: 'col-md-6',
					key: 'GlobalId',
					type: 'select',
					templateOptions: {
						label: 'Global:',
						required: true,
						options: []
					},
					validators: {
						validation: Validators.compose([Validators.required])
					}
				},
				{
					className: 'col-sm-6',
					key: 'Balance',
					type: 'input',
					templateOptions: {
						label: 'Equilibrio:',
						required: true,
						type: 'number'
					},
					validators: {
						validation: Validators.compose([Validators.required])
					}

				},
				/*{
					className: 'col-sm-6',
					key: 'Budget',
					type: 'input',
					templateOptions: {
						label: 'Presupuesto:',
						required: true,
						type: 'number'
					},
					validators: {
						validation: Validators.compose([Validators.required])
					}
				}*/
			]
		}];
	}
}

export default new ExpenseUnitForms();