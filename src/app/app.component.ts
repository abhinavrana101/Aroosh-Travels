import { Component } from '@angular/core';
import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(private toastrservice:ToastrService){

  }
 
}
