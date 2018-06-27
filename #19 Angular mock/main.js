var app = angular.module('app', ['ngMockE2E']);

//Функция позволяющая делать что-то сразу после инициализации приложения
app.run(function ($httpBackend) {
    console.log('RUN APP');
    var books = [
        {
            name: 'AngularJs'
        },
        {
            name: 'EmberJs'
        },
        {
            name: 'ReactJs'
        }
    ];

    $httpBackend.whenGET('http://localhost:3001/books').respond(200, books);

    $httpBackend.whenPOST('http://localhost:3001/books').respond(function(method, url, data){
        console.log('method', method);
        console.log('url', url);
        console.log('data', data);

        //Превращаем данные в объект
        var result = JSON.parse(data);
        //Отправляем данные на бэкэнд
        books.push(result);
        //Возвращаем массив
        return [200, result];
    });
});

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
