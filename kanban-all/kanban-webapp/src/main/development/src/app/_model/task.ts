import {KanbanUser} from "./kanbanUser";
import {Column} from "./column";
export class Task {
  id:number;
  title:string;
  description:string;
  creationDate:number;
  estimatedTime:number;
  spentTime:number;
  owner:KanbanUser;
  boardColumn:Column;
  taskUser:any;
  _links:any;
  constructor() {

  }
}
