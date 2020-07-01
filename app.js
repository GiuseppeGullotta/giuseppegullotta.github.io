'use strict';

angular.module("ppm", [])
    .controller("ppmCTRL",
        function($scope) {
            $scope.utente = { nome: "Mario", cognome: "Rossi"};
            $scope.saluta = function() {
                return "Buongiorno " +
                    $scope.utente.nome + " " +
                    $scope.utente.cognome + "!"
            };
        });