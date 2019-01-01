import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import { EmailValidator } from '../../../node_modules/@angular/forms';
import { TravelModel } from '../travel-model';


@Component({
  selector: 'app-flight-component',
  templateUrl: './flight-component.component.html',
  styleUrls: ['./flight-component.component.css']
})
export class FlightComponentComponent implements OnInit {

  user_model:TravelModel={
    name:null,
    email: null,
    phone: null,
    date: null,
    source: null,
    dest: null,
    people:null,
  }


  constructor(private _obj:MyServiceService) { 
  }

  ngOnInit() {
  }
save(data){
  //console.log(data);
  this._obj.insertData(data).subscribe((res)=>console.log(res));
 

}

}
