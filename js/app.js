//float conversion
function convertToFloat(text){
    const number = parseFloat(text);
    return number;
}

//Calculating total
function calculatingTotal(){
    const mainCostText = document.getElementById('main-cost').innerText;
    const mainCost = convertToFloat(mainCostText);
    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCost = convertToFloat(memoryCostText);
    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCost = convertToFloat(storageCostText);
    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = convertToFloat(deliveryCostText);
    const total = mainCost+memoryCost+storageCost+deliveryCost;
    document.getElementById('subTotal').innerText = total;
    document.getElementById('grandTotal').innerText = total;
}

//Updating cost
function updateCost(option,cost){
    const costElement = document.getElementById(option+'-cost');
    costElement.innerText = cost;
    calculatingTotal();
}

// updating memory costs
document.getElementById('memoryBtn8gb').addEventListener('click', function(){
    updateCost('memory', 0);
});
document.getElementById('memoryBtn16gb').addEventListener('click', function(){
    updateCost('memory', 180);
});

// updating storage costs
document.getElementById('storageBtn256gb').addEventListener('click', function(){
    updateCost('storage', 0);
});
document.getElementById('storageBtn512gb').addEventListener('click', function(){
    updateCost('storage', 100);
});
document.getElementById('storageBtn1tb').addEventListener('click', function(){
    updateCost('storage', 180);
});

// updating delivery costs
document.getElementById('deliveryFree').addEventListener('click', function(){
    updateCost('delivery', 0);
});
document.getElementById('deliveryPremium').addEventListener('click', function(){
    updateCost('delivery', 20);
});