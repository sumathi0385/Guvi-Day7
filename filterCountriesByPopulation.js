//Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function(){

    var data = JSON.parse(this.response)
    
    let result;
    result = data.filter((element) => {

    if(element.population < 200000){

        console.log(`Country name "${element.name.common}" and population "${element.population}"`);
    }
        

})
}

   