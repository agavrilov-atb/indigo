import { HttpResponseError,Error } from './shared/models/http-response';
import { MatSnackBar } from '@angular/material';
import {Headers, Request, RequestMethod, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

export class Utils {
  static getShortName(name: string): string {
    if (name) {
      //const short = name.split(',')[1].replace('O=', '').toString();
      let nameArray = name.split(',');
      const short = nameArray.find(x=>x.indexOf('O=') > -1).replace('O=', '').toString();
      return short;
    }
  }

  static getHttpRequest(url): Request {
    const headers = this.getHeaders();
    const options = new RequestOptions({
                                         headers: headers,
                                         method: RequestMethod.Get,
                                         url: url,
                                         body: {}
                                       });
    const req = new Request(options);
    return req;
  }
  static postHttpRequest(url,body): Request {
    const headers = this.getHeaders();
    const options = new RequestOptions({
                                         headers: headers,
                                         method: RequestMethod.Post,
                                         url: url,
                                         body: body
                                       });
    const req = new Request(options);
    return req;
  }

   static  getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-type', 'application/json');
    // headers.append('ActivityId', activityId);
    return headers;
  }

   

  static openSuccessSnackBar(snackBar:MatSnackBar,message:string,duration?:number,action?:string){
    snackBar.open(message,action,{duration:duration || 3000,extraClasses:['success-snackbar']});
}
static openFailureSnackBar(snackBar:MatSnackBar,error:HttpResponseError,duration?:number,action?:string){
    debugger
    snackBar.open(error.error.statusCode + ":" + error.error.message,action,{duration:duration || 3000,extraClasses:['failure-snackbar']});
}

 static  handleError(errorResponse: any):Promise<any>{
    let httpRespError;
    if(errorResponse.status!=0){
      httpRespError = errorResponse.json() as HttpResponseError;
    }else{
      let resp = <Response>errorResponse
      httpRespError = new HttpResponseError(new Error(resp.status.toString(),'error',resp.toString(),''));
    }
    console.error('An error occured ',httpRespError);
    return Promise.reject(httpRespError);
}
}
