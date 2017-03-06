import { Injectable } from '@angular/core';
import {URLSearchParams} from '@angular/http';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {KanbanUser} from "../_model/kanbanUser";

@Injectable()
export class KanbanUserService {

  constructor(private httpService: HttpService) { }

  public getPage(page:number, size:number, sort?:string) {
    let params = new URLSearchParams();
    params.set('page', page.toString());
    params.set('size', size.toString());
    if (sort)
      params.set('sort', sort);
    return this.httpService.get(environment.kanbanUser.all, {search: params});
  }

  public create(kanbanUser:KanbanUser) {
    return this.httpService.post(environment.kanbanUser.create, kanbanUser, {});
  }

  public one(id:number) {
    return this.httpService.get(environment.kanbanUser.one + id.toString(), {});
  }

  public update(id:number, kanbanUser:KanbanUser) {
    return this.httpService.put(environment.kanbanUser.update + id.toString(), kanbanUser, {});
  }

  public remove(id:number) {
    return this.httpService.put(environment.kanbanUser.delete + id.toString(), {});
  }
}
