import { me, Peer } from './../models/corda-network';
import { Constants } from './../../config';
import { Utils } from './../../utils';
import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, RequestOptions, RequestMethod, Request, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class IndigoService {
    private baseUrl;
    private _me: me;
  constructor(private http: Http) {
    this.baseUrl = Constants.baseUrl
  }

  
  fetchMe():Promise<me> {
    const req = Utils.getHttpRequest(this.baseUrl + '/api/com.indigo/me');
    return this.http.request(req)
                .toPromise()
                .then( res=> res.json() as me)
                .catch((error: Response) => {
                 return Utils.handleError(error);

               });
  }

  fetchPeers():Promise<Peer[]> {
    const req = Utils.getHttpRequest(this.baseUrl + '/api/com.indigo/AllPeers');
    return this.http.request(req)
                .toPromise()
                .then( res=> res.json() as Peer[])
                .catch((error: Response) => {
                 return Utils.handleError(error);

               });
  }
 

}


