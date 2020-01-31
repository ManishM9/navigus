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

var products = [{ product_id:"beer1", title:"Lager", desc:"Lagers are a typical entry point into beer for new drinkers. Made with bottom fermenting yeast that has a lower tolerance to alcohol.", src:"../../../assets/images/baltika7.jpg", fav:false }, { product_id:"beer2", title:"India Pale Ales", desc:"India Pale Ales (IPAs), which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/beer2.jpg", fav:false }, { product_id:"beer3", title:"Beer3", desc:"Beer3, which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/beer3.jpg", fav:false }, { product_id:"beer4", title:"Beer4", desc:"Beer4, which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/baltika7.jpg", fav:false }, { product_id:"beer5", title:"Beer5", desc:"Beer5, which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/beer2.jpg", fav:false }, { product_id:"beer6", title:"Beer6", desc:"Beer6, which encompass numerous styles of beer, get their characteristics from citrus flavors.", src:"../../../assets/images/beer3.jpg", fav:false }];

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