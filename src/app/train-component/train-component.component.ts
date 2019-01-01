import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { TravelModel } from '../travel-model';

@Component({
  selector: 'app-train-component',
  templateUrl: './train-component.component.html',
  styleUrls: ['./train-component.component.css']
})
export class TrainComponentComponent implements OnInit {

  constructor(private _obj:MyServiceService) { }
  
  user_model:TravelModel={
    name:null,
    email: null,
    phone: null,
    date: null,
    source: null,
    dest: null,
    people:null,
  }
  ngOnInit() {
  }
  save(data){
    console.log(data);
    //this._obj.insertTrainData(data).subscribe((res)=>console.log(res));
  }
}
