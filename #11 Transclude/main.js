var app = angular.module('app',[]);

app.controller('myCtrl', function($scope) {
    $scope.name = 'Bob';
});

app.directive('fooBar', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: 'This is directive', // <--- <ng-transclude></ng-transclude>
        link: function(scope, element, attrs, controller, transclude){

            transclude(scope, function(clone, scope) {//transclude ввиде функции применим когда перед включением необходимо модифицировать данные
                console.log('clone', clone);
                console.log('scope', scope);

                element.append(clone); //element == template, clone == {{name}} - содержимое которое нужно за трансклудить
            });

        }
    };
});
