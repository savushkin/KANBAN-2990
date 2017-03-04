import { Component } from '@angular/core';
import {KanbanUserService} from "./_service/kanban-user.service";
import {KanbanUser} from "./_model/kanbanUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    KanbanUserService
  ]
})
export class AppComponent {
  constructor(private kanbanUserService:KanbanUserService) {
    // let kanbanUser = new KanbanUser;
    // kanbanUser.firstName = 'firstName';
    // kanbanUser.lastName = 'lastName';
    // kanbanUser.secondName = 'secondName';
    // kanbanUser.username = 'mishka1';
    //
    // this.kanbanUserService.create(kanbanUser).subscribe(resp => {
    //   console.log(resp);
    // })
  }
}
