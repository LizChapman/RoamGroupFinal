var app = angular.module('myApp');

app.factory('seatgeekFactory', function ($http, geoFactory){
    var seatgeek = [];
    return {
     getSeats  
    };

   function getSeats () {
        if (seatgeek.length){
            console.log(seatgeek, 'seatgeekFactory');
            return Promise.resolve(seatgeek);
        }
    
       return geoFactory.getLocation().then(function(location){
          
           var url = 'api/seatgeek?client_id=OTgzMjkyM3wxNTEyMzEzNjI2LjY5';
           
//           var clientId = 'OTg5MDk2MnwxNTEyNjk0NDg3Ljk5';
//          var url= 'https://api.seatgeek.com/2/events?client_id=${clientId}&ll=${location.latitude},${location.longitude}';
           
          return $http.get(url);
       }).then(function(response){
            seatgeek = response.data.events;
           console.log(seatgeek);
            return seatgeek;
        }).catch(function(err){
            console.log(err);
        });
    }

});
