var app = angular.module('app',[]);

app.directive('fooBar', function(){
    return {
        restrict: 'AECM',
        link: function(){
            console.log('fooBar');
        }
    }
});
