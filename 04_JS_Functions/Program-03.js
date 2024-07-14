var sale1, sale2, sale3, sale4;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };

sale1.tax = sale1.price * sale1.taxRate / 100;
sale1.total = sale1.price + sale1.tax;

sale2.tax = sale2.price * sale2.taxRate / 100;
sale2.total = sale2.price + sale2.tax;

sale3.tax = sale3.price * sale3.taxRate / 100;
sale3.total = sale3.price + sale3.tax;

sale4 = { price: 80, taxRate: 12 };

sale4.tax = sale4.price * sale4.taxRate / 100;
sale4.total = sale4.price + sale4.tax;

function displaySaleInfo(sale) {
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax.toFixed(2));
    console.log("total cost = $" + sale.total.toFixed(2));
    console.log("------------------------------");
}

console.log("Sale 1:");
displaySaleInfo(sale1);

console.log("Sale 2:");
displaySaleInfo(sale2);

console.log("Sale 3:");
displaySaleInfo(sale3);

console.log("Sale 4:");
displaySaleInfo(sale4);