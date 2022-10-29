//Total population of countries using reduce function

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function(){

    var data = JSON.parse(this.response);
    
    let totalPopulation = data.reduce( (accum, currentvalue) =>  

        accum + currentvalue.population, 0 

     )

     console.log(`Total population of all the countries: ${totalPopulation}`)

    
}