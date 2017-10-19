import { ExpenseUnit } from './expense-unit.model';
import { Order } from './order.model';

export class Project {
	
	public Id: number;
	public Code: string;
	public CreatedAt: Date;
	public InDate: Date;
	public OutDate: Date;
	public Status: string;
	public Notes: string;
	public Active: Boolean;
	public Deleted: Boolean;
	public ProjectTypeId: number;
	public WarehouseId: number;
	public EmployeeId: number;
	public AccountId: number;
	public Name: string;
	public CustomerId: number;
	public CustomerCode: string;
	public CustomerFolio: string;
	public BlockReason: string;
	public ExpenseUnitId: number;
	public ProjectTeamId: number;
	public ExpenseUnit: ExpenseUnit;
	public Orders: Order[];

	constructor() {}
}