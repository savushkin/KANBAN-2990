import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {environment} from "../../environments/environment";

@Injectable()
export class HttpService {

  public host: string;
  public context: string;

  constructor(private http: Http) {
    this.host = environment.host
    this.context = environment.context
  }

  public get(route, options?) {
    return this.http.get(this.host + this.context + route, options);
  }

  public put(route, body, options?) {
    return this.http.put(this.host + this.context + route, body, options);
  }

  public post(route, body, options?) {
    return this.http.post(this.host + this.context + route, body, options);
  }

  public patch(route, body, options?) {
    return this.http.patch(this.host + this.context + route, body, options);
  }

  public remove(route, options?) {
    return this.http.delete(this.host + this.context + route, options);
  }

  public head(route, options?) {
    return this.http.head(this.host + this.context + route, options);
  }

  public options(route, options?) {
    return this.http.options(this.host + this.context + route, options);
  }


}
