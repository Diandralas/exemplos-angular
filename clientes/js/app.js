var app = angular.module('clientes', []);

app.controller('ClientesController', function($scope){
    $scope.clientes = [];
    $scope.dados = {};

    $scope.cadastrar = function(){
        $scope.clientes.push($scope.dados);
        $scope.dados = {};
    }
});
