export class Constants {
  

  static servicerUrl = 'http://localhost:10010';

  static baseUrl: string = window.location.origin === 'http://localhost:4200'
  ? Constants.servicerUrl
  : window.location.origin;

}
