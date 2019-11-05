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
var stores= [seattle, tokyo, dubai, paris, lima];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min + 1)) + min); 
  }; 
function Store(location, min_customer, max_customer, avg_cookie_per_customer, hourly_customers){
    this.location = location;
    this.min_customer = min_customer;
    this.max_customer = max_customer;
    this.avg_cookie_per_customer = avg_cookie_per_customer;
    this.hourly_customers = hourly_customers;
};

var seattle = new Store('Seattle', 23, 65, 6.3, getRandomInt(23,65));
var tokyo = new Store('Tokyo', 3, 24, 1.2, getRandomInt(3,24));
var dubai = new Store('Dubai', 11, 38, 3.7, getRandomInt(11,38));
var paris = new Store('Paris', 20, 38, 2.3, getRandomInt(20,38));
var lima = new Store('Lima', 2, 16, 4.6, getRandomInt(2,16));

// SEATTLE


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



function parisTotal(){
    var i = 0;
    var parisReportDiv = document.getElementById('paris-report');
    var parisHeader = document.createElement('h3');
    parisHeader.textContent = 'Paris Daily Report';
    parisReportDiv.append(parisHeader)

    for (var hour = 0; hour < timeOfDay.length; hour++){
        var hourlySales = getRandomInt(paris.min_customer,paris.max_customer)*paris.avg_cookie_per_customer;
        
        var parisDataDiv = document.getElementById(`paris-report`);
        var parisList = document.createElement('li');
        parisList.textContent = `${timeOfDay[hour]}: ${Math.round(hourlySales)} cookies sold`;
        parisDataDiv.append(parisList) 
          
        i = i+hourlySales;
    };
    var parisTotalDiv = document.getElementById('paris-report');
    var parisTotal = document.createElement('li');
    parisTotal.textContent =`Total cookies sold today: ${Math.round(i)}` ;
    parisTotalDiv.append(parisTotal)
}
parisTotal();


//LIMA



function limaTotal(){
    var i = 0;
    var limaReportDiv = document.getElementById('lima-report');
    var limaHeader = document.createElement('h3');
    limaHeader.textContent = 'Lima Daily Report';
    limaReportDiv.append(limaHeader)

    for (var hour = 0; hour < timeOfDay.length; hour++){
        var hourlySales = getRandomInt(lima.min_customer,lima.max_customer)*lima.avg_cookie_per_customer;
        
        var limaDataDiv = document.getElementById(`lima-report`);
        var limaList = document.createElement('li');
        limaList.textContent = `${timeOfDay[hour]}: ${Math.round(hourlySales)} cookies sold`;
        limaDataDiv.append(limaList) 
          
        i = i+hourlySales;
    };
    var limaTotalDiv = document.getElementById('lima-report');
    var limaTotal = document.createElement('li');
    limaTotal.textContent =`Total cookies sold today: ${Math.round(i)}` ;
    limaTotalDiv.append(limaTotal)
}
limaTotal();




function renderCookieData(domReference){
    var tableReport = document.getElementById('table-report');
    var tr = document.createElement('tr');
    tr.textContent = 'blah';
    domReference = tr;
    tableReport.append(tr);
}