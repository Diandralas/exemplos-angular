var app = angular.module('clientes', []);

app.controller('ClientesController', function($scope){
    $scope.clientes = [];
    $scope.dados = {};
});
