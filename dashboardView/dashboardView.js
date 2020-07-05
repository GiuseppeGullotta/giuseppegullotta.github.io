
angular.module('ppm.dashboardView', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider


            .when("/dashboard", {
                templateUrl : "dashboardView/dashboardView.html",
                controller: "dashboardCtrl"
            })
    })

    .controller('dashboardCtrl',['$scope', function($scope) {

        $scope.nome_evento = 'Festival Della Vita';

    }]);