import { Order } from './order.model';

export class Customer {
	
	public Id: number;
	public Organization: string;
	public FirstName: string;
	public LastName: string;
	public EmailAddress: string;
	public PhoneNumber: string;
	public Deleted: Boolean;
	public AllowChecks: Boolean;
	public AllowCredits: Boolean;
	public AccountId: number;
	public Locked: Boolean;
	public LockedComment: string;
	public Factor: number;
	public Orders: Order[];



	constructor() {}
}