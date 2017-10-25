export class Order {
	
	public Id: number 
	public Name: string;
	public CreatedAt: Date;
	public UpdatedAt: Date;
	public DeletedAt: Date;
	public PayedAt: Date;
	public Status: string 
	public DocumentNumber: string;
	public Notes: string;
	public Taxes: number;
	public Balance: number; 
	public Type: string 
	public SubTotal: number; 
	public Total: number; 
	public Bill: boolean 
	public Deleted: boolean 
	public CustomerId: number;
	public SupplierId: number;
	public EmployeeId: number;
	public ProjectId: number;
	public BudgetId: number;
	public AuthorizationRequestId: number;
	public CommercialTermsId: number;
	public OriginId: string;

	constructor() {}
}