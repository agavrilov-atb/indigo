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
  private _peers: Peer[];
  constructor(private http: Http) {
    this.baseUrl = Constants.baseUrl
  }

  
  fetchMe():Promise<me> {
    debugger;
    const req = Utils.getHttpRequest(this.baseUrl + '/api/com.indigo/me');
    return this._me ? Promise.resolve(this._me) :
     this.http.request(req)
                .toPromise()
                .then( res=> {this._me = res.json() as me
                  return this._me;
                })
                .catch((error: Response) => {
                 return Utils.handleError(error);

               });
  }

  fetchPeers():Promise<Peer[]> {

    const req = Utils.getHttpRequest(this.baseUrl + '/api/com.indigo/AllPeers');
    
    return this._peers? Promise.resolve(this._peers):
              this.http.request(req)
                .toPromise()
                .then( res=> this._peers = res.json() as Peer[])
                .catch((error: Response) => {
                 return Utils.handleError(error);

               });
  }
 

}


