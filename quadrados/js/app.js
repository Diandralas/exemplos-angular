var app = angular.module('quadrados', []);

app.controller('QuadradosController', function($scope){
    $scope.quadrados = [
        {cor: "blue"},
        {cor: "red"},
        {cor: "yellow"},
        {cor: "pink"},
        {cor: "green"},
        {cor: "red"}
    ];
});
