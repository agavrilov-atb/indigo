import { Utils } from './../../../utils';
import { Wallet } from './../../../shared/models/corda-network';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Constants } from '../../../config';

@Injectable()
export class WalletService {



  constructor(private http: Http) {
  }

  setupWallet():Promise<Wallet> {
    const req = Utils.postHttpRequest(Constants.baseUrl + '/api/sovrin/setupWallet',null);
    return  this.http.request(req)
                .toPromise()
                .then( res=> res.json() as Wallet)
                .catch((error: Response) => {
                 return Utils.handleError(error);

               });

  }


}
