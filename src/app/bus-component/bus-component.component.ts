import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import { TravelModel } from '../travel-model';

@Component({
  selector: 'app-bus-component',
  templateUrl: './bus-component.component.html',
  styleUrls: ['./bus-component.component.css']
})
export class BusComponentComponent implements OnInit {


  user_model:TravelModel={
    name:null,
    email: null,
    phone: null,
    date: null,
    source: null,
    dest: null,
    people:null,
  }
  constructor(private _obj:MyServiceService) { }

  ngOnInit() {
  }
save(data){
  //console.log(data);
this._obj.insertBusData(data).subscribe((res)=>console.log(res));
}
}
