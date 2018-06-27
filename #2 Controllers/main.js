var app = angular.module('app', []);

app.controller('myCtrl', function($scope){
    $scope.hello = 'congratulation!';
    $scope.book = 'Pic and war';
});
app.controller('myCtrl1', function($scope){
    $scope.first = 'Hello ';
    $scope.second = 'my dear';
    $scope.therd = 'fried';
});
app.controller('myCtrl2', function($scope){
    console.log('This is my controller myCtrl2');
    $scope.c2 = 'Wah-wah'
});
app.controller('myCtrl3', function($scope){
    console.log('myCtrl3');
});
app.controller('myCtrl4', function($scope){
    console.log('myCtrl4');
});
app.controller('myCtrl5', function($scope){
    console.log('myCtrl5');
});
app.controller('myCtrl6', function($scope){
    console.log('myCtrl6');
});
app.controller('myCtrl7', function($scope){
    console.log('This is myCtrl7');
});
app.controller('myCtrl8', function($scope){
    console.log('And this is myCtrl8');
});
app.controller('myCtrl9', function($scope){
    console.log('myCtrl9');
});
app.controller('myCtrl10', function($scope){
    console.log('This is last myCtrl10');
});
app.controller('finalCtrl', function($scope){
    console.log('final ctrl');
})
