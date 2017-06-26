var app = angular.module('slider', []);

app.controller('CarrosselController', function($scope, $interval){
    $scope.imagens = [
        {src: "img/cerveja1.jpg", texto: "Cervejinha Boa"},
        {src: "img/cerveja2.jpg", texto: "Cervejinha Gelada"},
        {src: "img/cerveja3.jpg", texto: "Cervejinha Maneira"},
        {src: "img/cerveja1.jpg", texto: "Cervejinha Show"}
    ];

    $scope.indice = 0;
    $scope.imagemAtiva = $scope.imagens[$scope.indice];

    $interval(function(){
        $scope.indice++;

        if($scope.indice == $scope.imagens.length){
            $scope.indice = 0;
        }

        $scope.imagemAtiva = $scope.imagens[$scope.indice];
    }, 3000);
})
