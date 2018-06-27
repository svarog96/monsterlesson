var app = angular.module('app', []);

app.directive('wrapIn', function($templateCache){
    return {
        transclude: 'element',
        link:function(scope, element, attrs, ctrl, transclude){
            var template = $templateCache.get(attrs.wrapIn);
            //превращаем строку в элемент
            var templateElement = angular.element(template);
            scope.a=2;
            console.log('wrapIn', template);
            console.log('scope - ', scope );
            console.log('element - ', element);
            console.log('attrs - ', attrs);

            transclude(scope, function(clone){
                console.log('clone - ', clone);
                element.after(templateElement.append(clone));
            });
        }
    };
});
