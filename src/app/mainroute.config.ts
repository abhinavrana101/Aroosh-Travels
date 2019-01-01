import {Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FlightComponentComponent } from './flight-component/flight-component.component';
import { HotelComponentComponent } from './hotel-component/hotel-component.component';
import { TrainComponentComponent } from './train-component/train-component.component';
import { BusComponentComponent } from './bus-component/bus-component.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { VisaComponentComponent } from './visa-component/visa-component.component';

export const myROute:Routes = [
    {path:'',component:HomeComponent, children:[
        {path:'',component:FlightComponentComponent},
        {path:'home',component:FlightComponentComponent},
        {path:'flight',component:FlightComponentComponent},
        {path:'hotel',component:HotelComponentComponent},
        {path:'bus',component:BusComponentComponent},
        {path:'visa',component:VisaComponentComponent},
        
        
    ]},
    {path:'home',component:HomeComponent},
    {path:'service',component:ServicePageComponent},
    {path:'about',component:AboutPageComponent},
    {path:'contact',component:ContactPageComponent}

]