import { Injectable } from '@angular/core';
import {URLSearchParams} from "@angular/http";
import {environment} from "../../environments/environment";
import {Column} from "../_model/column";
import {HttpService} from "./http.service";
import {Board} from "../_model/board";

@Injectable()
export class ColumnService {

  constructor(private httpService: HttpService) { }

  public getPage(page:number, size:number, sort?:string) {
    let params = new URLSearchParams();
    params.set('page', page.toString());
    params.set('size', size.toString());
    if (sort)
      params.set('sort', sort);
    return this.httpService.get(environment.column.all, {search: params});
  }

  public create(column:Column) {
    return this.httpService.post(environment.column.create, column, {});
  }

  public one(id:number) {
    return this.httpService.get(environment.column.one + id.toString(), {});
  }

  public update(id:number, column:Column) {
    return this.httpService.put(environment.column.update + id.toString(), column, {});
  }

  public remove(id:number) {
    return this.httpService.put(environment.column.delete + id.toString(), {});
  }

  public getAllColumnsByBoard(board:Board) {
    let params = new URLSearchParams();
    params.set('board', board.id.toString());

    return this.httpService.get(environment.column.getAllByBoard, {search: params});
  }
}
