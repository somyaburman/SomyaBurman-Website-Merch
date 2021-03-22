import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { ComicsComponent } from './comics/comics.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { LandingComponent } from './landing/landing.component';
import { QueryComponent } from './query/query.component';
import { ViewMerchComponent } from './view-merch/view-merch.component';



@NgModule({
  declarations: [
    AppComponent,
    MerchandiseComponent,
    PaintingsComponent,
    ComicsComponent,
    CollaborationsComponent,
    LandingComponent,
    QueryComponent,
    ViewMerchComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
