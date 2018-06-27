var app = angular.module('app',[]);

app.controller('mainCtrl', function($scope) {
    console.log('scope from ctrl', $scope);
    $scope.name = "Harry"
});

app.directive('book', function(){
    return {
        restrict: 'E',
        scope: true,
        template: "<div> My name is {{name}} <input type='text' ng-model='name'></div>",
        link: function(scope, element, attrs) {
            console.log('scope from directive', scope);
            console.log(scope.name);
        }
    }
})
