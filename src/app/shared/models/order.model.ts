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
	public StatusName?: string;
	public OrderItems: any[];

	constructor() {}

	public static parseState(data){
		if(data == 0 || data == 'WaitingForResponse'){
			return "Esperando";
		} else if(data == 1 || data == 'Accepted'){
			return "Aceptada";
		} else if(data == 2 || data == 'Rejected'){
			return "Rechazada";
		} else if(data == 3 || data == 'WaitingForPreBill'){
			return "Esperando 2";
		} else if(data == 4 || data == 'PreBilled'){
			return "Esperando 3";
		} else if(data == 5 || data == 'Billed'){
			return "Pagada";
		} else if(data == 6 || data == 'Cancelled'){
			return "Cancelada";
		}
	}
}