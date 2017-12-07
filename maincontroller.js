var app = angular.module("myApp");

app.controller('maincontroller', function($scope, Factory, $location) {
Factory.getPosts();
$scope.searchArea = function(){
     
$location.path('/resultsView');
 
    };
});