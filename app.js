'use strict'

var timeOfDay = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var storeNames= [seattle, tokyo, dubai, paris, lima]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min + 1)) + min); 
  }   ;

// SEATTLE

  var seattle = {
    location: 'Seattle',
    min_customer: 23,
    max_customer: 65,
    avg_cookie_per_customer: 6.3,
    hourly_customers: getRandomInt(23,65),
};
console.log('Seattle totals:');


function seattleTotal(){
    var i = 0;
    
    for (var hour = 0; hour < timeOfDay.length; hour++){
    var hourlySales = getRandomInt(seattle.min_customer,seattle.max_customer)*seattle.avg_cookie_per_customer;
    console.log(`${timeOfDay[hour]}: ${hourlySales} cookies sold`);
    i = i+hourlySales;
    }

    console.log(`total cookies sold today: ${i}`); 
}
seattleTotal();

// TOKYO

var tokyo = {
    location: 'Tokyo',
    min_customer: 3,
    max_customer: 24,
    avg_cookie_per_customer: 1.2,
    hourly_customers: getRandomInt(3, 24),
};

//DUBAI

var dubai = {
    location: 'Dubai',
    min_customer: 11,
    max_customer: 38,
    avg_cookie_per_customer: 3.7,
    hourly_customers: getRandomInt(11, 38)
};

//PARIS

var paris = {
    location: 'Paris',
    min_customer: 20,
    max_customer: 38,
    avg_cookie_per_customer: 2.3,
    hourly_customers: getRandomInt(20, 38),
};

//LIMA

var lima = {
    location: 'Lima',
    min_customer: 2,
    max_customer: 16,
    avg_cookie_per_customer: 4.6,
    hourly_customers: getRandomInt(2, 16)
};




