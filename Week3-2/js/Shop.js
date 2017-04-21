var customerName = "Raisin";
var total = 0;

var customer =  document.getElementById("name");
customer.textContent = customerName;

var d = new Date();
if(d.getHours() >= 5 && d.getHours() <= 11) {
	document.getElementById("greeting").innerHTML = "Good Morning";
} else if(d.getHours() >= 11 && d.getHours <= 17) {
	document.getElementById("greeting").innerHTML = "Good Afternoon";
} else {
	document.getElementById("greeting").innerHTML = "Good Evenning";
}

var products = [
    "Brooklyn T-Shirt White", 
    "Brooklyn T-Shirt Black", 
    "Apple Watch", 
    "Android Phone"
];

var prices = [10, 10, 199, 159];
var productsText = "";
var productsElement = document.getElementById("product-list");
/*
productsText += "<li class='list-group-item'><span class='badge'>$" + prices[0] + "</span>" + products[0] + "</li>";
productsElement.innerHTML = productsText;
productsText += "<li class='list-group-item'><span class='badge'>$" + prices[1] + "</span>" + products[1] + "</li>";
productsElement.innerHTML = productsText;
productsText += "<li class='list-group-item'><span class='badge'>$" + prices[2] + "</span>" + products[2] + "</li>";
productsElement.innerHTML = productsText;
productsText += "<li class='list-group-item'><span class='badge'>$" + prices[3] + "</span>" + products[3] + "</li>";
productsElement.innerHTML = productsText;
 */

for(var i = 0; i<products.length;i++) {

	productsText += "<li class='list-group-item'><span class='badge'>$"+prices[i]+"</span>"+products[i]+"</li>";
	total += prices[i];
}
productsElement.innerHTML = productsText;

//totalPrice = prices[0] + prices[1] + prices[2] + prices[3];
var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = total-(total * 0.25);




