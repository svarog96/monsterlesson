var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
    this.myLesson = 'mainLesson';

});

app.controller('firstCtrl', function(){
    var vm = this;
    vm.showLesson = function() {
        console.log('This is my lesson');
    }

});

app.controller('secondCtrl', function(){
    this.myLesson = 'Lesson';
});
