import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  constructor(private _var:MyServiceService) { }

  ngOnInit() {
  }

addFeedback(data){
  this._var.insertFeedback(data).subscribe((res)=>console.log(res));
}
}
