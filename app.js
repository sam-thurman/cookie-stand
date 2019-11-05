'use strict'

var timeOfDay = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
];
var storeNames= [seattle, tokyo, dubai, paris, lima];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min + 1)) + min); 
  }; 
 

// SEATTLE

var seattle = {
    location: 'Seattle',
    min_customer: 23,
    max_customer: 65,
    avg_cookie_per_customer: 6.3,
    hourly_customers: getRandomInt(23,65),
};

function seattleTotal(){
    var i = 0;
    var seattleReportDiv = document.getElementById('seattle-report');
    var seattleHeader = document.createElement('h3');
    seattleHeader.textContent = 'Seattle Daily Report';
    seattleReportDiv.append(seattleHeader)

    for (var hour = 0; hour < timeOfDay.length; hour++){
        var hourlySales = getRandomInt(seattle.min_customer,seattle.max_customer)*seattle.avg_cookie_per_customer;
        
        var seattleDataDiv = document.getElementById(`seattle-report`);
        var seattleList = document.createElement('li');
        seattleList.textContent = `${timeOfDay[hour]}: ${Math.round(hourlySales)} cookies sold`;
        seattleDataDiv.append(seattleList) 
          
        i = i+hourlySales;
    };
    var seattleTotalDiv = document.getElementById('seattle-report');
    var seattleTotal = document.createElement('li');
    seattleTotal.textContent =`Total cookies sold today: ${Math.round(i)}` ;
    seattleTotalDiv.append(seattleTotal);  
};
seattleTotal();


// TOKYO

var tokyo = {
    location: 'Tokyo',
    min_customer: 3,
    max_customer: 24,
    avg_cookie_per_customer: 1.2,
    hourly_customers: getRandomInt(3, 24),
};

function tokyoTotal(){
    var i = 0;
    var tokyoReportDiv = document.getElementById('tokyo-report');
    var tokyoHeader = document.createElement('h3');
    tokyoHeader.textContent = 'Tokyo Daily Report';
    tokyoReportDiv.append(tokyoHeader)

    for (var hour = 0; hour < timeOfDay.length; hour++){
        var hourlySales = getRandomInt(tokyo.min_customer,tokyo.max_customer)*tokyo.avg_cookie_per_customer;
        
        var tokyoDataDiv = document.getElementById(`tokyo-report`);
        var tokyoList = document.createElement('li');
        tokyoList.textContent = `${timeOfDay[hour]}: ${Math.round(hourlySales)} cookies sold`;
        tokyoDataDiv.append(tokyoList) 
          
        i = i+hourlySales;
    };
    var tokyoTotalDiv = document.getElementById('tokyo-report');
    var tokyoTotal = document.createElement('li');
    tokyoTotal.textContent =`Total cookies sold today: ${Math.round(i)}` ;
    tokyoTotalDiv.append(tokyoTotal)
    
};
tokyoTotal();


//DUBAI

var dubai = {
    location: 'Dubai',
    min_customer: 11,
    max_customer: 38,
    avg_cookie_per_customer: 3.7,
    hourly_customers: getRandomInt(11, 38)
};

function dubaiTotal(){
    var i = 0;
    var dubaiReportDiv = document.getElementById('dubai-report');
    var dubaiHeader = document.createElement('h3');
    dubaiHeader.textContent = 'Dubai Daily Report';
    dubaiReportDiv.append(dubaiHeader)

    for (var hour = 0; hour < timeOfDay.length; hour++){
        var hourlySales = getRandomInt(dubai.min_customer,dubai.max_customer)*dubai.avg_cookie_per_customer;
        
        var dubaiDataDiv = document.getElementById(`dubai-report`);
        var dubaiList = document.createElement('li');
        dubaiList.textContent = `${timeOfDay[hour]}: ${Math.round(hourlySales)} cookies sold`;
        dubaiDataDiv.append(dubaiList) 
          
        i = i+hourlySales;
    };
    var dubaiTotalDiv = document.getElementById('dubai-report');
    var dubaiTotal = document.createElement('li');
    dubaiTotal.textContent =`Total cookies sold today: ${Math.round(i)}` ;
    dubaiTotalDiv.append(dubaiTotal)

};
dubaiTotal();


//PARIS

var paris = {
    location: 'Paris',
    min_customer: 20,
    max_customer: 38,
    avg_cookie_per_customer: 2.3,
    hourly_customers: getRandomInt(20, 38),
};

function parisTotal(){
    var i = 0;
    var parisReportDiv = document.getElementById('paris-report');
    var parisHeader = document.createElement('h3');
    parisHeader.textContent = 'Paris Daily Report';
    parisReportDiv.append(parisHeader)

    for (var hour = 0; hour < timeOfDay.length; hour++){
        var hourlySales = getRandomInt(paris.min_customer,paris.max_customer)*paris.avg_cookie_per_customer;
        
        var parisDataDiv = document.getElementById(`paris-data${hour}`);
        var parisList = document.createElement('li');
        parisList.textContent = `${timeOfDay[hour]}: ${Math.round(hourlySales)} cookies sold`;
        parisDataDiv.append(parisList) 
          
        i = i+hourlySales;
    };
    var parisTotalDiv = document.getElementById('paris-total');
    var parisTotal = document.createElement('li');
    parisTotal.textContent =`Total cookies sold today: ${Math.round(i)}` ;
    parisTotalDiv.append(parisTotal)
}
parisTotal();


//LIMA

var lima = {
    location: 'Lima',
    min_customer: 2,
    max_customer: 16,
    avg_cookie_per_customer: 4.6,
    hourly_customers: getRandomInt(2, 16)
};

function limaTotal(){
    var i = 0;
    var limaReportDiv = document.getElementById('lima-report');
    var limaHeader = document.createElement('h3');
    limaHeader.textContent = 'Lima Daily Report';
    limaReportDiv.append(limaHeader)

    for (var hour = 0; hour < timeOfDay.length; hour++){
        var hourlySales = getRandomInt(lima.min_customer,lima.max_customer)*lima.avg_cookie_per_customer;
        
        var limaDataDiv = document.getElementById(`lima-data${hour}`);
        var limaList = document.createElement('li');
        limaList.textContent = `${timeOfDay[hour]}: ${Math.round(hourlySales)} cookies sold`;
        limaDataDiv.append(limaList) 
          
        i = i+hourlySales;
    };
    var limaTotalDiv = document.getElementById('lima-total');
    var limaTotal = document.createElement('li');
    limaTotal.textContent =`Total cookies sold today: ${Math.round(i)}` ;
    limaTotalDiv.append(limaTotal)
}
limaTotal();




