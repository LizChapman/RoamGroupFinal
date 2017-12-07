var app = angular.module("myApp");

app.controller('maincontroller', function($scope, $http, Factory, $location) {
$http.get('https://api.foursquare.com/v2/venues/search?client_id=ERCUS3MJIAMB0DFCMDQIZCRUMCA0RA01JM5L2BSKZEQ5FLLB&client_secret=ADOMAVTDRQDKWBB2OATWD4FLGEGXOTU5QC0ZD4DVG3DMR5I4&v=20150609&ll=42.3314,-83.0458').then(function(response){
$scope.post = response.data.response.venues;
console.log($scope.post)
}); 
    
$scope.searchArea = function(){
     
$location.path('/resultsView');
 
    };
});