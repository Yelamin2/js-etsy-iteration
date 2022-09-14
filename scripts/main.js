// var items;
var pikprice = items.map(function(item){
    return item.price;
});

var totalprice = pikprice.reduce(function(num, i){
    return num+i
});

var averageprice = totalprice/pikprice.length;

console.log( 'Average price for all items is '+ averageprice.toFixed(2));
   
 

// filters items by price between 14 and 18.

var priceRange = items.filter(function(item){
   return (item.price >= 14 && item.price <= 18);
});
console.log(priceRange);
// let rangitems = priceRange
//  return console.log(priceRange.map)
var isnotdollar = items.filter(function(item){
    return (item.currency_code == "GBP");
});
var itemnotindollars = isnotdollar.map(function(item){
    return isnotdollar.title;
});
console.log(itemnotindollars, isnotdollar);

// items made of wood

var isitwood = items.map(function(item){
    return (item.materials, item.title );
});
var itemofwood = isnotdollar.find(function(item){
    return ;
});
console.log(itemnotindollars, isitwood);


//Items that are ,made of eight materials or more


