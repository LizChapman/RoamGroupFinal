var app = angular.module("myApp");

app.controller('maincontroller', function($scope, $http, Factory, $location) {
Factory.getPosts().then(function(response){
$scope.venues = response;
console.log($scope.venues);
}); 
    
$scope.searchArea = function(){
     
$location.path('/resultsView');
 
    };
});