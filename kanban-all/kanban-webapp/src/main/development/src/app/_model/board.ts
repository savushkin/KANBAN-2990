import {KanbanUser} from './kanbanUser';
export class Board {
  id:number;
  name:string;
  description:string;
  creation_date:number;
  owner:KanbanUser;
  boardUserPermissionSet:any;
  owner_id:number;
  _links:any;
  constructor() {

  }
}
