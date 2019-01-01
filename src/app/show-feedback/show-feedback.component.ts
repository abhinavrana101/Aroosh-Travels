import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-show-feedback',
  templateUrl: './show-feedback.component.html',
  styleUrls: ['./show-feedback.component.css']
})
export class ShowFeedbackComponent implements OnInit {
x;
  constructor(private _var:MyServiceService) { }

  ngOnInit() {
    this.loadFeedback();
  }
loadFeedback(){
  
this._var.getFeedback().subscribe((res)=>this.x=(res));
}
}
