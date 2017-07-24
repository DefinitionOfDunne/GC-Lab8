"use strict"
var itemPrice = document.getElementById('input-price');
var itemArray = [];

function addNewItem() {
    var totalCost = 0;
    var outputList = document.getElementById('active-items');
    var itemInput = document.getElementById('input-items');
    var totalOutput = document.getElementById('total');
    var totalO = document.getElementById('p');
    var itemToAdd = itemInput.value;
    var priceToAdd = itemPrice.value;
    var output = document.createElement('li');
    output.innerHTML = "Item: " + itemToAdd + " Price: $" + priceToAdd;
    output.setAttribute('class', 'active-item');
    outputList.appendChild(output);
    var grocOb = { itemToAdd, priceToAdd };
    itemArray.push(grocOb);
    for (var i = 0; i < itemArray.length; i++) {
        totalCost += Number(itemArray[i].priceToAdd);
    }
    totalOutput.innerHTML = 'Total Cost is $' + totalCost;

}
