import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { Section1Component } from './section1/section1.component';
import { DestinationComponent } from './destination/destination.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { myROute } from './mainroute.config';
import { BookingBoxComponent } from './booking-box/booking-box.component';
import { FlightComponentComponent } from './flight-component/flight-component.component';
import { HotelComponentComponent } from './hotel-component/hotel-component.component';
import { TrainComponentComponent } from './train-component/train-component.component';
import { BusComponentComponent } from './bus-component/bus-component.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { VisaComponentComponent } from './visa-component/visa-component.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MyServiceService } from './my-service.service';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { ShowFeedbackComponent } from './show-feedback/show-feedback.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    Section1Component,
    DestinationComponent,
    ContactSectionComponent,
    FooterComponent,
    ServicePageComponent,
    AboutPageComponent,
    HomeComponent,
    BookingBoxComponent,
    FlightComponentComponent,
    HotelComponentComponent,
    TrainComponentComponent,
    BusComponentComponent,
    ContactPageComponent,
    VisaComponentComponent,
    AddFeedbackComponent,
    ShowFeedbackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(myROute)
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
