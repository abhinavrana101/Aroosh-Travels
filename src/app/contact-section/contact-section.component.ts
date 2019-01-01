import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../contact-model';
import { MyServiceService } from '../my-service.service';



@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
data;

user_model:ContactModel={
  name:null,
  email:null,
  sub:null,
  msg:null
}
  constructor(private _obj:MyServiceService) { 

  }

  ngOnInit() {
    
  }
  save(data){
    //console.log(data);
    this._obj.insertQuery(data).subscribe((res)=>console.log(res));
  }

 

}
