//Print the Country which uses US dollar as currency
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function(){

    var data = JSON.parse(this.response);    
    
     data.filter((element) => {

        var currency = element.currencies

        for(key in currency){

            if(currency[key].name == 'United States dollar'){

                console.log(`Country which uses US dollar as currency: ${element.name.common}`)
            }
        }       

    })

}