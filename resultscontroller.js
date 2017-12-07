var app = angular.module("myApp");

app.controller('resultscontroller', function($scope, Factory, $location) {

       
$scope.backtoResults = function(){
    
 
$location.path('/resultsView');
 
    };
    

});