let destination = ['Destin', 'Palm Beach', 'Naples', 'St. Augstine', 'Cocoa Beach', 'Miami'];
let restaurant = ["The Floridian", "Joe's Stone Crab", "Victoria & Albert's", "Cafe Boulud", "Bern's Steakhouse", "Palme d'Or"];
let modeOfTransportation = ['Limo', 'Commuter Rail', 'Bus Transit', 'Uber', 'Trolley', 'Taxi'];
let entertainment = ['Sea World Theme Park', 'Universal Studios', 'Walt Disney World', 'Bush Gardens Zoo', 'Everglades National Park', 'Kennedy Space Center'];

function place() {
    let randomDestination = destination[Math.floor(Math.random() * destination.length)];
    return randomDestination; 

}



 function food() {
    let randomRestaurant = restaurant[Math.floor(Math.random() * restaurant.length)];
     return randomRestaurant; 

}

 function transport() {
   let randomModeTransport = modeOfTransportation[Math.floor(Math.random() * modeOfTransportation.length)];
     return randomModeTransport; 
}

function entertain() {
    let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];
     return randomEntertainment; 

} 


//let dayTimeTransport = transport();
//let dayTimeEntertain = entertain();
function result() {
    document.getElementById('quoteDisplay').innerHTML = (`You can visit ${place()} and have lunch at ${food()}, one of Florida's Premier top 5 Star restaurants! You can also travel by ${transport()} and experience ${entertain()}!`);
  
}


