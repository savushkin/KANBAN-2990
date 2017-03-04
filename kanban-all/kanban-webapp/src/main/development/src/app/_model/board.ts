import {KanbanUser} from './kanbanUser';
export class Board {
  id:number;
  name:string;
  description:string;
  creation_date:string;
  owner:KanbanUser;
  boardUserPermissionSet:any;
  _links:any;
  constructor() {

  }
}
