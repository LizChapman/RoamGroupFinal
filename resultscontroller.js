var app = angular.module("myApp");

app.controller('resultscontroller', function($scope, $timeout, Factory, $location) {
Factory.getPosts().then(function(response){
$timeout($scope.venues = response);
console.log($scope.venues);
}); 
       
$scope.backtoResults = function(){
    
 
$location.path('/resultsView');
 
    };
    

});