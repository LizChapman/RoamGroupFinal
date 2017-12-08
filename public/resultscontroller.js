var app = angular.module("myApp");

app.controller('resultscontroller', function($scope, $timeout, Factory, seatgeekFactory, TwitterFactory, $location) {
Factory.getPosts().then(function(response){
$timeout($scope.venues = response);
console.log($scope.venues);
}); 
       
seatgeekFactory.getSeats().then(function(response){
$timeout($scope.events = response);
console.log($scope.events);
}); 
    
TwitterFactory.getTweets().then(function(response){
$timeout($scope.statuses = response);
console.log($scope.statuses);
});    
    
$scope.backtoResults = function(){
    
 
$location.path('/resultsView');
 
    };
    

});
