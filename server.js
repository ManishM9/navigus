var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var path = require("path");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


app.use(session({
  secret: 'n@v!gu$_pR0j3(T',
  resave: false,
  saveUninitialized: true,
  username: undefined,
  yearite: 0,
  clearance: '',
  name: ''
}));

// app.use(express.static(path.join(__dirname, 'dist/navigus')));


// app.get("/", (req, res) => {
//   console.log("/ visited");
//   res.send("Server UP");
// });

var products = [{ product_id:"beer1", title:"Lager", desc:"Lagers are a typical entry point into beer for new drinkers. Made with bottom fermenting yeast that has a lower tolerance to alcohol.", src:"../../../assets/images/baltika7.jpg", fav:false }, { product_id:"beer2", title:"India Pale Ales", desc:"India Pale Ales (IPAs), which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/beer2.jpg", fav:false }, { product_id:"beer3", title:"Pale Ale", desc:"Pale ales are usually hoppy but carry a lower alcohol content than IPAs. Most types of pale ale, which can include different ales.", src:"../../../assets/images/beer3.jpg", fav:false }, { product_id:"beer4", title:"Pilsner", desc:"Pilsners, which originate from the Czech Republic, fall under the lager category. German pilsners give off a pale gold color and crisp flavor.", src:"../../../assets/images/baltika7.jpg", fav:false }, { product_id:"beer5", title:"Stout Beer", desc:"A dark beer, the flavor of stouts depend on where they come from. Sweet stouts largely originate from Ireland and England and are known for their low bitterness.", src:"../../../assets/images/beer2.jpg", fav:false }, { product_id:"beer6", title:"Porter", desc:"Traditional porters, which can trace their roots to the United Kingdom, are dark in color like stouts due to common ingredients like chocolate or other dark-roasted malts.", src:"../../../assets/images/beer3.jpg", fav:false }];

app.get("/products", (req, res) => {
  res.send(products);
});


app.get("/search", (req, res) => {
  // console.log(req.query.name);
  // res.send(products);
  var txt = req.query.name.toLowerCase();
  var to_send = [];

  for(var i=0;i<products.length;i++){
    if(products[i].title.toLocaleLowerCase().search(txt)>=0 || products[i].desc.toLocaleLowerCase().search(txt)>=0){
      to_send.push(products[i]);
    }
  }
  // console.log(to_send);
  res.send(to_send);

});


app.post("/setfavourite", (req,res) => {
  var id = req.body.product_id;
  for(var i=0;i<products.length;i++){
    if(products[i].product_id === id){
      products[i].fav = !products[i].fav;
    }
  }
  res.send(true);
});


app.get("/favourites", (req,res) => {
  var to_send = [];
  for(var i =0;i<products.length;i++){
    if(products[i].fav){
      to_send.push(products[i]);
    }
  }
  res.send(to_send);
});








app.use(express.static(path.join(__dirname, 'dist/navigus')));


const server = app.listen(process.env.PORT || 8888, process.env.IP, (req,res) => {
  console.log("Server Started!");
});