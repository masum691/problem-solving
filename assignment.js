

/*--------------------------
          problem 1
-------------------------- */
// seer to mon convert

function seerToMon(seer){
    if(typeof seer != 'number'){
        return 'Please give a number';
    }
    else if(seer < 0){
        return 'Please give a positive number'
    }
    else{
        const mon = seer / 40;
        return mon;
    }
}
const totalMon = seerToMon(100);
console.log(totalMon);



/*--------------------------
          problem 2
-------------------------- */
// total sales 

function totalSales(shirt, pant, shoes){
    if(typeof shirt != 'number' || typeof pant != 'number' || typeof shoes != 'number'){
        return 'Please enter a number';
    }
    else if(shirt < 0 || pant < 0 || shoes < 0){
        return 'Please enter a positive number'
    }
    else{
        const shirtPrice = 100;
        const pantPrice = 200;
        const shoesPrice = 500;

        const shirtSales = shirt * shirtPrice;
        const pantSales = pant * pantPrice;
        const shoesSales = shoes * shoesPrice;

        const total = shirtSales + pantSales + shoesSales;
        return total;
    }
}
const result = totalSales(4,4,9);
console.log(result);





/*--------------------------
          problem 3
-------------------------- */
// delivery cost 

function deliveryCost(cost){
    const firstDeliveryCost = 100;
    const secondDeliveryCost = 80;
    const thirdDeliveryCost = 50;
    if(typeof cost != 'number'){
        return 'Please give a number';
    }
    else if(cost < 0){
        return 'Please give a positive number';
    }
    else if(cost <= 100){
        const firstDelivery = cost * firstDeliveryCost;
        return firstDelivery;
    }
    else if(cost <= 200){
        const firstDensity = 100 * firstDeliveryCost;
        const restCost = cost - 100;
        const secondDensity = restCost * secondDeliveryCost;
        const totalSecondCost = firstDensity + secondDensity;
        return totalSecondCost;
    }
    else{
        const firstDensity = 100 * firstDeliveryCost;
        const secondDensity = 100 * secondDeliveryCost;
        const restCost = cost - 200;
        const thirdDensity = restCost * thirdDeliveryCost;
        const totalThirdCost = firstDensity + secondDensity + thirdDensity;
        return totalThirdCost;
    }
}
const delivery = deliveryCost(202);
console.log(delivery);
    



/*--------------------------
          problem 4
-------------------------- */
// find perfect friend

const friends = ['abdullah','ubaidul','samiul', 'masum'];

function perfectFriend(friends){
    let myFriend = '';
    if(typeof (friends) != 'object'){
        return 'Please give an object';
    }
    
    else{
        for(const friend of friends){
            
            if(friend.length == 5){
                myFriend = friend;
                break;
            }
            else if(friend.length != 5){
                return 'ok'
            }
        }return myFriend;
    }
}
const myPerfectFriend = perfectFriend(friends);
console.log(myPerfectFriend);









