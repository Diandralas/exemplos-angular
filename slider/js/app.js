var app = angular.module('slider', []);

app.controller('CarrosselController', function($scope, $interval){
    $scope.imagens = [
        {src: "img/cerveja1.jpg", texto: "Cervejinha Boa"},
        {src: "img/cerveja2.jpg", texto: "Cervejinha Gelada"},
        {src: "img/cerveja3.jpg", texto: "Cervejinha Maneira"}
    ];

    var indice = 0;
    $scope.imagemAtiva = $scope.imagens[indice];

    $interval(function(){
        indice++;

        if(indice == $scope.imagens.length){
            indice = 0;
        }

        $scope.imagemAtiva = $scope.imagens[indice];
    }, 3000);
})
