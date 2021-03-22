import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from './../merchdata.json';
import {Router } from '@angular/router';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {

  products:  any  = (data  as  any).default;
  myVar : boolean = true;

  constructor(private router : Router) { 
    
  }

  ngOnInit(): void {
    console.log(data);
    console.log(data);
    console.log(data);
    console.log("data");
  }

onSelect(r){
  this.router.navigate(['/request', r.id]);
  console.log(r);
  this.myVar=false;
  
}

}
