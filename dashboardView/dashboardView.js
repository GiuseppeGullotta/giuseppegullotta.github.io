
angular.module('ppm.dashboardView', [
    'ngRoute',

])
    .config(function($routeProvider) {
        $routeProvider


            .when("/dashboard", {
                templateUrl : "dashboardView/dashboardView.html",
                controller: "dashboardCtrl"
            })
    })

    .controller('dashboardCtrl',['$scope', '$rootScope',
        function($scope, $rootScope) {

        $scope.nome_evento = 'Festival Della Vita';

        $scope.pagina = {};
        $rootScope.pagina.pagCorrente = 'dashboardView';

    }]);