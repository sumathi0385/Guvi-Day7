// Get all the countries from Asia continent/region using Filter method

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function(){

    var data = JSON.parse(this.response)
    
    let result = data.filter((element) => {
        if(element.region === "Asia"){

            console.log(`Country "${element.name.common}" is a part of Asia region` );
        }
        

    })
}
    
    
