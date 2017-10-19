import { ExpenseUnit } from './expense-unit.model';
import { Order } from './order.model';

export class Budget {
	
	public Id: number;
	public Reason?: string;
	public CreatedAt: Date;
	public UpdatedAt: Date;
	public Deadline: Date;
	public RequestedBudget: number;
	public ApprovedBudget: number;
	public Balance: number;
	public Status: string;
	public Paid: boolean;
	public ExpenseUnitId: number;
	public ExpenseUnit: ExpenseUnit[];
	public Orders: Order[];

	constructor() {}
}