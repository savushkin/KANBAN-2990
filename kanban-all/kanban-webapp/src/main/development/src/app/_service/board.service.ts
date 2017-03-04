import { Injectable } from '@angular/core';
import {URLSearchParams} from '@angular/http';
import {HttpService} from './http.service';
import {environment} from '../../environments/environment';
import {Board} from '../_model/board';

@Injectable()
export class BoardService {

  constructor(private httpService: HttpService) { }

  public getPage(page:number, size:number, sort?:string) {
    let params = new URLSearchParams();
    params.set('page', page.toString());
    params.set('size', size.toString());
    if (sort)
      params.set('sort', sort);
    return this.httpService.get(environment.board.all, {search: params});
  }

  public create(board:Board) {
    return this.httpService.post(environment.board.create, board, {});
  }

  public one(id:number) {
    return this.httpService.get(environment.board.one + id.toString(), {});
  }

  public update(id:number, board:Board) {
    return this.httpService.put(environment.board.update + id.toString(), board, {});
  }

  public remove(id:number) {
    return this.httpService.put(environment.board.delete + id.toString(), {});
  }
}
