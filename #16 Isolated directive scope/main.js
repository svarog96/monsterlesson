var app = angular.module('app',[]);

app.controller('firstCtrl', function($scope){
    $scope.name = "Harry";
    $scope.color = "#fff";

    $scope.reverse = function() {
        $scope.name = $scope.name.split('').reverse().join('');
    }
});

app.directive('fooBar', function(){
    return {
        restrict: 'E',
        template: "<div>My name is {{name}}</div>" +
                    "<div>My favorit color is {{color}}</div>"+
                  "<div><input type='text' ng-model='name'></div>"+
                  "<div><input type='text' ng-model='color'></div>"+
                  "<div><button ng-click='reverse()'>Reverse name</button></div>",
        //Если scope = true то controller.scope доступен через прототипное наследование.
        //Если scope = {} то это полностью изолированный scope. controller.scope в этом случае недоступен.
        // '@' - переменная доступна только для чтения.(односторонний data binding)
        // '=' - переменная доступна на чтение и на запись. (двухсторонний data binding)
        // '&' - выполнение выражения из родительского контроллера
        scope: {
            name: '@',
            color: '=',
            reverse: '&'
        },
        link: function($scope, element, attrs){
            console.log("fooBar");
        }
    };
})
