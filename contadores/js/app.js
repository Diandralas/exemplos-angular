var app = angular.module('contadores', []);

app.controller('ContadorController', function($scope){
    $scope.valor = 0;

    $scope.incrementar = function(){
        $scope.valor++;
    }
});
