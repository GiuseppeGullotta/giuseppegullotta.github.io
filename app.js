'use strict';



// ANGULAR JS

// Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCn45PxQWotvgTG382h2x4LXg_-cEjERsQ",
    authDomain: "pppevenmanager.firebaseapp.com",
    databaseURL: "https://pppevenmanager.firebaseio.com",
    projectId: "pppevenmanager",
    storageBucket: "pppevenmanager.appspot.com",
    messagingSenderId: "37416132220",
    appId: "1:37416132220:web:ae54dce12b19eec411b3f9",
    measurementId: "G-BYBSQE5ZB8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



angular.module("ppm", [
    'ngRoute',
    'ppm.loginView',
    'ppm.dashboardView',
    'ppm.authentication',
    'firebase'
    ])


    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/loginView'});
    }])

    .run(["$rootScope", "$location", function($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            // We can catch the error thrown when the $requireSignIn promise is rejected
            // and redirect the user back to the home page

            if (error === "AUTH_REQUIRED") {
                $location.path("/loginView");
            }
        });
    }])


    .controller('indexCtrl', ['$scope', '$rootScope', 'Auth',
        function($scope, $rootScope, Auth) {

            $rootScope.pagina = {};
            $rootScope.pagina.pagCorrente = 'loginView';


        }]);
