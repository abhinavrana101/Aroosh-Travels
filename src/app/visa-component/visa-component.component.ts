import { Component, OnInit } from '@angular/core';
import { VisaModel } from '../visa-model';
import { MyServiceService} from '../my-service.service';
@Component({
  selector: 'app-visa-component',
  templateUrl: './visa-component.component.html',
  styleUrls: ['./visa-component.component.css']
})
export class VisaComponentComponent implements OnInit {

  
  user_model : VisaModel ={
    name : null,
    email:null,
    phone:null,
    country:null,
    visa:null
  }
  constructor(private _obj:MyServiceService) { }

  ngOnInit() {
  }
save(data){
  //console.log(data);
  this._obj.insertVisaData(data).subscribe((res)=>console.log(res));
}
}
