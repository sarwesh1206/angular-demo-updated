import { ErrorHandler } from "@angular/core"

export class  AppErrorHandler implements ErrorHandler {
  handleError(error){
    alert("unexpected error occur")
    console.log(error);
  }
}
