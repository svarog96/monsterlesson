var app = angular.module('app',[]);

app.controller('carsCtrl', function($scope, showCar){
    $scope.car = 'BMW';
    $scope.showCar = showCar;
    $scope.setCar = function(car) {
        $scope.car = car;
    }
});

app.factory('showCar', function(){
    return {
        car: function() {
            return 'Audi';
        }
    }
});
