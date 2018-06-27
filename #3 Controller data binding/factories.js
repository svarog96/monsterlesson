var app = angular.module('app',[]);

app.controller('controller1', function($scope){

});

app.controller('controller2', function($scope){

})

app.factory('myFactory', function(){
    return {
        hi:'hi friend',
        fun: function(){
            console.log(hi);
        }
    }
})
