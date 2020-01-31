import { Component, OnInit } from '@angular/core';

import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  beers = [];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getfav().subscribe(data => {
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
