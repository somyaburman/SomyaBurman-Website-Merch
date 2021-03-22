import { Component } from '@angular/core';
import * as data from './merchdata.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'somyaburman';
  showMerchVal : boolean;
  showPaintingsVal : boolean
  showComicsVal : boolean;
  showCollaborationsVal : boolean;
  showLandingVal : boolean = true;
  submitQueryVal : boolean=false;
  
  showMerch(){
    this.showMerchVal = true;
    this.showLandingVal = false;
    this.showCollaborationsVal = false;
    this.showComicsVal = false;
    this.showPaintingsVal = false;

  }
  showPaintings(){
    this.showPaintingsVal = true;
    this.showLandingVal = false;
    this.showCollaborationsVal = false;
    this.showComicsVal = false;
    this.showMerchVal = false;
  }
  showComics(){
    this.showComicsVal = true;
    this.showLandingVal = false;
    this.showPaintingsVal = false;
    this.showCollaborationsVal = false;
    this.showMerchVal = false;
  }
  showCollaborations(){
    this.showCollaborationsVal = true;
    this.showLandingVal = false;
    this.showPaintingsVal = false;
    this.showComicsVal = false;
    this.showMerchVal = false;
  }

  showLanding()
  {
    this.showCollaborationsVal = false;
    this.showLandingVal = true;
    this.showPaintingsVal = false;
    this.showComicsVal = false;
    this.showMerchVal = false;
  }

  submitQuery(){
    this.submitQueryVal=true;
    this.showCollaborationsVal = false;
    this.showLandingVal = false;
    this.showPaintingsVal = false;
    this.showComicsVal = false;
    this.showMerchVal = false;
  }

}
