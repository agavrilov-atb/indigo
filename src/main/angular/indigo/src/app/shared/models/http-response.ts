export class HttpResponseError{
    
    constructor(
      public error:Error
    ){}
  }

  export class Error{
    constructor(
      public statusCode:string,
      public name: string,
      public message:string,
      public stack:string
      ){}
  }