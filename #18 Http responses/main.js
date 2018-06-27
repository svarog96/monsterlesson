var app = angular.module('app', []);

app.controller('mainCtrl', function($http, $scope) {
    $http.get('http://localhost:3001/books').then(success, error);

    function success(response) {
        console.log('success in book get', response);
        $scope.books = response.data;
    }

    function error(response) {
        console.log('error in book get');
    }

    $scope.addBook = function(book) {
        console.log(book);
        $http.post('http://localhost:3001/books', book).then(success, error);
        function success(response) {
            console.log('success in book post', response);
            //Отображение на фронте добавленной книги
            $scope.books.push(book);
            //Очищаем input
            $scope.book = null;
        }
        function error(response) {
             console.log('error in book post');
         }
    };
});
