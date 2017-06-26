var app = angular.module('quadrados', []);

app.controller('QuadradosController', function($scope){
    var cores = ['#f442aa', '#ee41f4', '#b241f4', '#7f41f4'];

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
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]},
        {cor: cores[0]}
    ];

    $scope.alterarCor = function(quadrado){
        var indice = cores.indexOf(quadrado.cor);

        indice++;

        if(indice == cores.length){
            indice = 0;
        }

        quadrado.cor = cores[indice];
    }
});
