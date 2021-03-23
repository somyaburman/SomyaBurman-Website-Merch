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
  myVar : boolean ;

  constructor(private router : Router) { 
    
  }

  ngOnInit(): void {
    this.myVar=true;
    console.log(data);
    console.log(data);
    console.log(data);
    console.log("data");
  }

onSelect(){
  //this.router.navigate(['/request', r.id]);
  //console.log(r);
  //this.myVar=!this.myVar;
  
}

}
