import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { ViewMerchComponent } from './view-merch/view-merch.component';


const routes: Routes = [
  
  {
    path: 'merchandise/:id' ,
    component: ViewMerchComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


