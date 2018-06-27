var app = angular.module('app', []);

app.directive('fooBar', function(){
    var myBookmarks = [
        {
            id: 1,
            name: 'AngularJs'
        },
        {
            id: 2,
            name: 'EmberJs'
        },
        {
            id: 3,
            name: 'NodeJs'
        }
    ];
    return {
        restrict: 'E',
        templateUrl: "bookmarks.html",//указывается путь до шаблона
        link: function(scope, element, attrs) {
            console.log('directive');
            scope.myBookmarks = myBookmarks;
        }
    };
});
