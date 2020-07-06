'use strict';

angular.module('ppm.authentication.authenticationService', [])

    .factory('Auth', ["$firebaseAuth", function($firebaseAuth) {

        return $firebaseAuth();

    }]);