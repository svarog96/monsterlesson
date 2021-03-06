var app = angular.module('app', []);

app.run( function($templateCache){
    $templateCache.put('bookmarks.html', "<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>");
});

app.directive('fooBar', function($templateCache){
    var BOOKMARKS = [
        {
            id: 1,
            name: "JavaSctript"
        },
        {
            id: 2,
            name: "EmberJs"
        },
        {
            id: 3,
            name: "AngularJs"
        }
    ];

    return {
        restrict:'E',
        templateUrl: "bookmarks.html",
        link: function(scope, element, attr) {
            scope.bookmarks = BOOKMARKS;
            console.log($templateCache.info());
        }
    };
});
