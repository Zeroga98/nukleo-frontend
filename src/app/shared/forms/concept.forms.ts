import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';

class ConceptForms {

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
					key: 'Notes',
					type: 'textarea',
					templateOptions: {
						label: 'Notas:'
					},
					validators: {
						validation: Validators.compose([Validators.required])
					}
				}, {
					className: 'col-md-6',
					key: 'CategoryId',
                    type: 'select',
                    templateOptions: {
                        label:'Categoria',
                        required: true,
                        options: []
                    },
					validators: {
						validation: Validators.compose([Validators.required])
					}
				}
			]
		}];
	}
}

export default new ConceptForms();