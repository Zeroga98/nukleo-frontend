import { Account } from './account.model';

export class Global {
	
	public Id: number;
	public Name: string;
	public Balance: number;
	public ResponsableId: number;
	public AccountId: number;
	public Description: string;
	public Responsable: any;
	public Account?: Account[];

	constructor() {}
}