import { Component, OnInit } from '@angular/core';

import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beers = [{ product_id:"beer1", title:"Lager", desc:"Lagers are a typical entry point into beer for new drinkers. Made with bottom fermenting yeast that has a lower tolerance to alcohol.", src:"../../../assets/images/baltika7.jpg", fav:false }, { product_id:"beer2", title:"India Pale Ales", desc:"India Pale Ales (IPAs), which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/beer2.jpg", fav:false }, { product_id:"beer3", title:"Beer3", desc:"Beer3, which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/beer3.jpg", fav:false }, { product_id:"beer4", title:"Beer4", desc:"Beer4, which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/baltika7.jpg", fav:false }, { product_id:"beer5", title:"Beer5", desc:"Beer5, which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/beer2.jpg", fav:false }, { product_id:"beer6", title:"Beer6", desc:"Beer6, which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/beer3.jpg", fav:false }];
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
