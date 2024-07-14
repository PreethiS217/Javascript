var sale1 = { price: 140, taxRate: 15 };
var sale2 = { price: 40, taxRate: 10 };
var sale3 = { price: 120, taxRate: 20 };
var sale4 = { price: 90, taxRate: 12 }; 

function processSale(sale) {

    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;

    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
    console.log("------------------------------");
}

processSale(sale1);
processSale(sale2);
processSale(sale3);
processSale(sale4);