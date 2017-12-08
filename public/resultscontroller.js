var app = angular.module("myApp");

app.controller('resultscontroller', function($scope, $timeout, Factory, TwitterFactory, $location) {
Factory.getPosts().then(function(response){
$timeout($scope.venues = response);
console.log($scope.venues);
});

TwitterFactory.getTweets().then(function(result){
    $scope.tweets = result;
    console.log(result, '<<<tweets>>>');
});
       
$scope.backtoResults = function(){
    
 
$location.path('/resultsView');
 
    };
    

});