import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { HotelModel } from '../hotel-model';
@Component({
  selector: 'app-hotel-component',
  templateUrl: './hotel-component.component.html',
  styleUrls: ['./hotel-component.component.css']
})
export class HotelComponentComponent implements OnInit {


  user_model:HotelModel={
    name:null,
    email: null,
    phone: null,
    location: null,
    checkin: null,
    checkout: null,
    people:null,
  }
  constructor(private _obj:MyServiceService) { }

  ngOnInit() {
  }
save(data){
  this._obj.insertHotelData(data).subscribe((res)=>console.log(res));
}
}
