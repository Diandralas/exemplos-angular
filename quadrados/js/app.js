var app = angular.module('quadrados', []);

app.controller('QuadradosController', function($scope){
    var cores = ['#f442aa', '#ee41f4', '#b241f4'];

    $scope.quadrados = [
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]}
    ];
});
