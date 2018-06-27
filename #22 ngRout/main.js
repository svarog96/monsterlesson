var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
        .when('/posts', {
            template: '<h2>Post for my site</h2>'
        })
});

app.controller('homeCtrl', function($scope) {
    console.log('HomeCtrl');
    $scope.model = {
        message: 'This is my message for you'
    }
});
