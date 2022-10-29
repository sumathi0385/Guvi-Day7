//Print the details name, capital, flag

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function(){

    var data = JSON.parse(this.response);    

    data.forEach(element => {

        console.log(`Country Name: ${element.name.common}, Capital: "${element.capital} and Flag name : ${element.flag}` )   
    });

   

}