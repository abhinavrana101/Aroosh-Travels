import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { State } from './state';
import { Observable } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  url = "http://localhost:8888/PhpComplete%20/July/Database-Application/"
  constructor(private _var:Http) { }

  
  insertData(data){
    return this._var.get(`${this.url}insert.php?data=${JSON.stringify(data)}`).pipe(map(res=>res.text())); 
   
  }
  insertBusData(data){
    return this._var.get(`${this.url}insert-bus.php?data=${JSON.stringify(data)}`).pipe(map(res=>res.text()));  
  }
  insertHotelData(data){
    return this._var.get(`${this.url}insert-hotel.php?data=${JSON.stringify(data)}`).pipe(map(res=>res.text()));  
  }
  insertVisaData(data){
    return this._var.get(`${this.url}insert-visa.php?data=${JSON.stringify(data)}`).pipe(map(res=>res.text()));  
  }
  insertQuery(data){
    return this._var.get(`${this.url}contact.php?data=${JSON.stringify(data)}`).pipe(map(res=>res.text()));  
  }
  insertFeedback(data){
    return this._var.get(`${this.url}insert_feedback.php?data=${JSON.stringify(data)}`).pipe(map(res=>res.text()));
  }
  getFeedback(){
    return this._var.get(`${this.url}show_feedback.php`).pipe(map(res=>res.json()));
  } 
}
/*

import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToasterService {

    constructor(private toastr: ToastsManager, private toastOpts: ToastOptions) {
        this.toastOpts.toastLife = 8000;
        this.toastOpts.positionClass = 'toast-top-center';
        this.toastOpts.showCloseButton = true;
    }

    success(message: string) {
        this.toastr.success(message);
    }
    info(message: string) {
        this.toastr.info(message);
    }
    warning(message: string) {
        this.toastr.warning(message);
    }
    error(message: string) {
        this.toastr.error(message);
    }
}*/