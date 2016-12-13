// JavaScript Document

// url is a test number
var url = "number=&number=&number=&number=&number=&STREET=&ActionType=QuickAddressSearch&SUB_DIV=Highland+Meadows&ActionType=QuickNeighborhoodSearch&TYPES_OF_HOMES=&SQFT=0&MIN_PRICE=0&MAX_PRICE=10000000&BDRMS=0&BATHS=0&UPDATED_MARKET=1&halfbaths=0&ONLY_OFFICE=YES";

url = "http://www.whatever.com" + "/test.html?" + url;

// removes any empty varilble (using regular expressions)
var newUrl = url.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"");

console.log("<br><br>" + url);
console.log("<br><br>" + newUrl);
