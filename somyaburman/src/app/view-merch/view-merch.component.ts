import { Component, OnInit } from '@angular/core';
import * as data from './../merchdata.json';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-merch',
  templateUrl: './view-merch.component.html',
  styleUrls: ['./view-merch.component.css']
})
export class ViewMerchComponent implements OnInit {
  public prodId : any;
  products:  any  = (data  as  any).default;
  val : any;
  constructor(private route:ActivatedRoute, private _location: Location) { }
  
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.prodId=id;

    console.log(this.prodId+" in view merch");
    //this.val = data[(id[0])].range.find(e=>e.id===id);
    this.val = this.products[parseInt(id.toString()[0])-1].range.find(e=>e.id===id);
    console.log(this.products[parseInt(id.toString()[0])-1].range.find(e=>e.id===id));

  }
  
  backClicked() {
    this._location.back();
  }

}
