// var items;
var pikprice = items.map(function(item){
    return item.price;
});

var totalprice = pikprice.reduce(function(num, i){
    return num+i
});

var averageprice = totalprice/pikprice.length;

console.log( 'Average price for all items is '+ averageprice.toFixed(2));
 //////////
       ///   
 ////////
 ///
 /////////  
 

// filters items by price between 14 and 18.

var priceRange = items.filter(function(item){
   return (item.price >= 14 && item.price <= 18);
});
console.log(priceRange);
// let rangitems = priceRange
//  return console.log(priceRange.map)

///////////
        ////
        ////
///////////
        ////
//////////


//filter throught he currency code to find the matching value of GBP
var isnotdollar = items.filter(function(item){
    return (item.currency_code == "GBP");
});
var itemnotindollars = isnotdollar.map(function(item){
    return item.title;
});
console.log(isnotdollar, itemnotindollars);
    ///
   ///  //
  ///  //
  ////////
     //

// items made of wood

var isitwood = items.filter(function(item){
    return item.materials.includes("wood");
});
var itemofwood = isitwood.map(function(item){
    return item.title;
});
console.log(itemofwood);

////////
///
////////
    ///
//////


//Items that are ,made of eight materials or more


var eightmaterialsplus = items.filter(function(item){
    return item.materials.length >= 8;
});

;

eightmaterialsplus.forEach(function(item){
    console.log(item.title + 'has'+ item.materials.lenght);
    console.log('Materials:' + item.materials);
})


///////
//
///////
//  ///
//////

var ismadbyseller = items.filter(function(item){
    return item.who_made === 'i_did';
});

console.log(`${ismadbyseller.length} items were Made by their sellers.`);