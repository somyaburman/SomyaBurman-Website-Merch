import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { ViewMerchComponent } from './view-merch/view-merch.component';


const routes: Routes = [
  {
    path: 'request/:id' ,
    component: ViewMerchComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


