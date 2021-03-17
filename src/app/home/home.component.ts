import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category:any="general";
  country:any = "in";
  constructor() { }

  ngOnInit(): void {
    
  }
  changeCat(cat:any){
    this.category = cat;
  } 
  changeCountry(country:any){
    this.country= country;
  }

}
