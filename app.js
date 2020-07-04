'use strict';

angular.module("ppm", [
    'ngRoute'
])

    .config(function($routeProvider) {
        $routeProvider

            .when("/login", {
                templateUrl : "loginView/loginView.html"
            })
        })


    .controller("indexCTRL",
        function($scope) {
            $scope.nome = "Peppe";
        });
