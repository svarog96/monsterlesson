var app = angular.module('app',[]);

app.controller('firstCtrl', function($scope, myFactory){
    console.log('firstCtrl');
    $scope.hello = 'hello world';
    $scope.myFactory = myFactory;
});

app.controller('secondCtrl', function($scope, myFactory){
    console.log('secondCtrl');
    $scope.hello = 'hello world';
    $scope.myFactory = myFactory
});

app.factory('myFactory', function(){
    return {
        hello: 'hello world'
    };
})
