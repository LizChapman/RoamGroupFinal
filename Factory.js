var app = angular.module('myApp');

app.factory('Factory', function ($http){
    var FourSquare = [];
    return {
     getPosts  
    };

   function getPosts () {
        if (FourSquare.length){
            console.log(FourSquare, 'factory');
            return Promise.resolve(FourSquare);
        }
        
       var url= 'https://api.foursquare.com/v2/venues/search?client_id=ERCUS3MJIAMB0DFCMDQIZCRUMCA0RA01JM5L2BSKZEQ5FLLB&client_secret=ADOMAVTDRQDKWBB2OATWD4FLGEGXOTU5QC0ZD4DVG3DMR5I4&v=20150609&ll=42.3314,-83.0458';
        return $http.get (url).then(function(response){
            FourSquare = response.data.response.venues;
            return FourSquare;
            }).catch(function(err){
            console.log(err);
            });
    }

});