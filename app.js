'use strict';

angular.module("ppm", [
    'ngRoute',
    'ppm.loginView',
    'ppm.dashboardView'
])



    .controller("indexCTRL",
        function($scope) {
            $scope.nome = "Peppe";
        });
