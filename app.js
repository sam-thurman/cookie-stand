'use strict';

var timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];


var totals = [];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

// connect to the table
var tableReference = document.getElementById('table-report');

// store constructor
function Store(location, min_customer, max_customer, avg_cookie_per_customer) {
  this.location = location;
  this.data = [];
  this.min_customer = min_customer;
  this.max_customer = max_customer;
  this.avg_cookie_per_customer = avg_cookie_per_customer;
  this.hourly_customers = getRandomInt(this.min_customer, this.max_customer);
  this.hourly_sales = this.avg_cookie_per_customer;
  this.render = function (domReference) {
    var tr = document.createElement('tr');
    var tdLocation = document.createElement('td');
    tdLocation.textContent = this.location;
    tr.append(tdLocation);
    domReference.append(tr);

    var dailyTotal = 0;

    for (var timeIndex = 0; timeIndex < timeOfDay.length; timeIndex++) {
      var hourlyCookies = getRandomInt(this.min_customer, this.max_customer) * this.hourly_sales;
      this.data.push(Math.round(hourlyCookies));
      var td = document.createElement('td');
      td.textContent = Math.round(hourlyCookies);
      tr.append(td);
      dailyTotal = dailyTotal + hourlyCookies;
    }
    td = document.createElement('td');
    td.textContent = Math.round(dailyTotal);
    tr.append(td);
    totals.push(this.data);
  };
}

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);
var stores = [seattle, tokyo, dubai, paris, lima];
// totals by time of day
function hourlyTotals() {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = 'hourly totals';
  tr.append(td);
  tableReference.append(tr);

  for (var timeIndex = 0; timeIndex < timeOfDay.length; timeIndex++) {
    td = document.createElement('td');
    var hourTotal = 0;

    for (var storeIndex = 0; storeIndex < stores.length; storeIndex++) {
      hourTotal += stores[storeIndex].data[timeIndex];

    }
    td.textContent = Math.round(hourTotal);
    tr.append(td);
  }
}


//render time of day at <th>s of table
function renderTimeOfDay(domReference) {
  var timeOfDay = ['  ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];
  var tr = document.createElement('tr');

  for (var time = 0; time < 16; time++) {
    var th = document.createElement('th');
    th.textContent = timeOfDay[time];
    tr.append(th);
  }
  domReference.append(tr);
}

renderTimeOfDay(tableReference);



seattle.render(tableReference);
tokyo.render(tableReference);
dubai.render(tableReference);
paris.render(tableReference);
lima.render(tableReference);

hourlyTotals(tableReference);




function clearScreenAndRenderAll(domReference) {
  tableReference.innerHTML = '';
  renderTimeOfDay(tableReference);
  for (var storeIndex = 0; storeIndex < stores.length; storeIndex++) {
    var currentStore = stores[storeIndex];

    currentStore.render(tableReference);
  }
  hourlyTotals(stores, domReference);

}


// FORMS

var form = document.getElementById('new-store-form');
form.addEventListener('submit', function (event) {
  var newStoreName = event.target.store.value;
  var newMinHourlyCustomer = parseInt(event.target.minHourlyCustomers.value, 10);
  var newMaxHourlyCustomer = parseInt(event.target.maxHourlyCustomers.value, 10);
  var newAvgCookiesPerCustomer = parseInt(event.target.avgCookiePerCustomer.value, 10);

  event.preventDefault();
  var newStore = new Store(newStoreName, newMinHourlyCustomer, newMaxHourlyCustomer, newAvgCookiesPerCustomer);
  stores.push(newStore);
  console.log(stores);
  clearScreenAndRenderAll();
});

