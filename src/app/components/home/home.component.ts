import { Component, OnInit } from '@angular/core';

import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beers = [];
  search_text: string = "";

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getBeers().subscribe(data => {
      if(data){
        this.beers = data;
      }
    });
  }
  
  search(){
    // console.log(this.search_text);
    this.beerService.searchBeers(this.search_text).subscribe(data => {
      if(data){
        this.beers = data;
      }
    });
  }

  fav(id){
    // console.log(id);
    this.beerService.setfav(id).subscribe(data => {
      if(data){
        for(var i=0;i<this.beers.length;i++){
          if(this.beers[i].product_id == id){
            this.beers[i].fav = !this.beers[i].fav;
          }
        }
      }
    });
    
  }

}
