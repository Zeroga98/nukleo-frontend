import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';

class GlobalForms {

	public initForm() {
		return new FormGroup({});
	}

	public getCreateFields(): Array<FormlyFieldConfig> {
		return [{
			className: 'row',
			fieldGroup: [
			{
				className: 'col-xs-6',
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
				className: 'col-xs-6',
				key: 'Description',
				type: 'input',
				templateOptions: {
					label: 'Descripción:',
					required: true
				},
				validators: {
					validation: Validators.compose([Validators.required])
				}
			}, {
				className: 'col-xs-6',
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
			}]
		}];
	}
}

export default new GlobalForms();