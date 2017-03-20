import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {URLSearchParams} from "@angular/http";
import {environment} from "../../environments/environment";
import {Column} from "../_model/column";
import {Task} from "../_model/task";

@Injectable()
export class TaskService {

  constructor(private httpService: HttpService) { }

  public getPage(page:number, size:number, sort?:string) {
    let params = new URLSearchParams();
    params.set('page', page.toString());
    params.set('size', size.toString());
    if (sort)
      params.set('sort', sort);
    return this.httpService.get(environment.task.all, {search: params});
  }

  public create(task:Task) {
    return this.httpService.post(environment.task.create, task, {});
  }

  public one(id:number) {
    return this.httpService.get(environment.task.one + id.toString(), {});
  }

  public update(id:number, task:Task) {
    return this.httpService.put(environment.task.update + id.toString(), task, {});
  }

  public remove(id:number) {
    return this.httpService.remove(environment.task.delete + id.toString(), {});
  }

  public getAllByColumn(column:Column) {
    let params = new URLSearchParams();
    params.set('boardColumn', column.id.toString());

    return this.httpService.get(environment.task.getAllByColumn, {search: params});
  }
}
