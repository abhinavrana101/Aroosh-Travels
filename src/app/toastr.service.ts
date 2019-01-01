import { Injectable } from '@angular/core';
declare var toastr:any;
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  Success(title:string, msg?:string){
    
  }
  Error(title:string, msg?:string){
    toastr.rror(title,msg);
  }
}
