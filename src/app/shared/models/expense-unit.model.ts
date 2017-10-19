import { Budget } from './budget.model';
import { Global } from './global.model';
import { Account } from './account.model';
import { Project } from './project.model';

export class ExpenseUnit {
	
	public Id: number;
	public Name: string;
	public Descripcion: string;
	public ResponsableId: number;
	public AccountId: number;
	public GlobalId: number;
	public Balance?: number;
	public Budget: number;
	public Responsable?: any;
	public Account?: Account;
	public Global?: Global;
	public Projects?: Project[];
	public Budgets?: Budget[];

	constructor() {}
}