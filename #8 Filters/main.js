var app = angular.module('app',[]);

app.controller('mainCtrl', function($scope){
    $scope.money1 = "2.44$";
    $scope.money2 = "$1.33";
    $scope.money3 = "4.22"
});

app.filter('moneyFilter', function(){
    return function(str) {
        var lastChar = str.slice(-1),
            firstChar = str.slice(0, 1),
            slicePart;

        if(lastChar === '$') {
            slicePart = str.slice(0, str.length - 1);
            return '$' + slicePart;
        } else if (firstChar === '$') {
            return str;
        } else {
            return '$' + str;
        }
    }
});
