let destination = ['Destin', 'Palm Beach', 'Naples', 'St. Augstine', 'Cocoa Beach', 'Miami'];
let restaurant = ["The Floridian", "Joe's Stone Crab", "Victoria & Albert's", "Cafe Boulud", "Bern's Steakhouse", "Palme d'Or"];
let modeOfTransportation = ['Limo', 'Commuter Rail', 'Bus Transit', 'Uber', 'Trolley', 'Taxi'];
let entertainment = ['Sea World Theme Park', 'Universal Studios', 'Walt Disney World', 'Bush Gardens Zoo', 'Everglades National Park', 'Kennedy Space Center'];
let randomDayTrip = [];

function place() {
let randomPlace = destination[Math.floor(Math.random() * destination.length)];
return randomPlace;
}

function food() {
let randomFood = restaurant[Math.floor(Math.random() * restaurant.length)];
return randomFood;
}

function transport() {
    let randomTransport = modeOfTransportation[Math.floor(Math.random() * modeOfTransportation.length)];
    return randomTransport;
}

function entertain() {
    let randomEntertain = entertainment[Math.floor(Math.random() * entertainment.length)];
    return randomEntertain;
}

function logDayTrip() {
   let result = (`You can visit ${place()} and have lunch at ${food()}, one of Florida's Premier top 5 Star restaurants! You can also travel by ${transport()} and experience ${entertain()}!`);
   document.getElementById('quoteDisplay').innerHTML = result;
   
    if (confirm(result)) {
        alert('Day Trip Selection Complete! View Console Log for Details');
        console.log(result);
        
    }   else {
        alert('Click Generator below for more Day Trip Ideas');
       
        
    } 
           
}
   
   







     

      
 
