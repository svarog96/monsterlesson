var app = angular.module('app', []);

app.controller('bookCtrl', function($scope){
    $scope.showBook = function(){
        console.log('This is some book');
    }
});
app.controller('angularBookCtrl', function($scope){
    $scope.showBook = function() {
        console.log('This is AngularJS book');
    }
});
app.controller('emberBookCtrl', function($scope){

});


app.controller('cycle', function($scope) {
    $scope.go = function(){
        console.log('go');
    }
});
app.controller('norco', function($scope){
    $scope.setColor = function() {
        console.log('Norco is orange');
    }
});
app.controller('GT', function($scope){
    $scope.setColor = function(color) {
        console.log('GT is blue')
    }
});


app.controller('car', function($scope) {
    $scope.setColor = function(){
        console.log('red')
    }
});

app.controller('vas', function($scope){
    $scope.setColor = function() {
        console.log('blue')
    }
});

app.controller('bmw', function($scope){

})
