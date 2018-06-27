var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
    console.log('ctrlScope', $scope);
    $scope.posts = [
        {
            name: "THis is posts about cats"
        },
        {
            name: "This is post about dog"
        }
    ];
    //Будет доступен и в директиве и в контроллере
    //По умолчанию дир наследует scope контроллера в котором была инициализированна

    $scope.getPosts = function() {
        return $scope.posts;
    };
});

app.directive('post', function(){
    return {
        scope: false,   //default params - fals Директива со Scope=false == controller.scope.
        template: "<div ng-repeat='post in getPosts()'>{{post.name}}</div>",
        link: function(scope, element, attrs) {
            console.log('scope', scope);
        }
    };
});
