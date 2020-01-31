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

}
