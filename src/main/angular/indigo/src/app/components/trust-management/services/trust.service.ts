import { Constants } from './../../../config';
import { Utils } from './../../../utils';
import { NodeInfo, TrustRequest } from './../../../shared/models/corda-network';
import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, RequestOptions, RequestMethod, Request, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { Trust } from './../../../shared/models/corda-network';

@Injectable()
export class TrustService {
    
  
  constructor(private http: Http) {
  }

  setupTrust(trustRequest:TrustRequest):Promise<Trust[]>{

    const req = Utils.postHttpRequest(Constants.baseUrl + '/api/com.indigo/setupTrust',trustRequest);
    
    return  this.http.request(req)
                .toPromise()
                .then( res=> res.json() as Trust[])
                .catch((error: Response) => {
                 return Utils.handleError(error);

               });



  }

  getTrusts():Promise<Trust[]>{
    
        const req = Utils.getHttpRequest(Constants.baseUrl + '/api/com.indigo/getTrusts');
        
        return  this.http.request(req)
                    .toPromise()
                    .then( res=> res.json() as Trust[])
                    .catch((error: Response) => {
                     return Utils.handleError(error);
    
                   });
    
    
    
  }
 

}


