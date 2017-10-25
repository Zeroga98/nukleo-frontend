
import { Project } from 'app/shared/models/project.model';

export class ProjectExpense {
	
	public Id: number;
	public CreatedAt: Date;
	public Description: string;
	public Amount: number;
	public Paid: Boolean;
	public ProjectId: number;
	public Project: Project;

	constructor() {}
}