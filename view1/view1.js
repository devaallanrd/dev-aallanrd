'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/narraciones', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])



.controller('View1Ctrl', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {


        $scope.method = 'GET';
        $scope.search = '';

        //Llamada HTTP al Modelo Para Solicitar Datos
        $scope.fetchy = function(call) {

            // You'll need an access token to access&authentication these later --- > More info http://developer.aallanrd.com/docs
            // Try this for production: 'http://developer.aallanrd.com/app/model/equipos.json'
            //Try this locally
            $scope.url = 'model/empresas/transcordero.json';
            $scope.response = null;

            //Llamada Principal Para solicitar al Modelo
            $http({method: $scope.method, url: $scope.url, cache: $templateCache} ).
                then(function(response) {
                    $scope.status = response.status;
                    $scope.data = response.data;
                    $scope.prettyData = JSON.stringify(response.data, undefined, 2);
                    $scope.url = "";
                }, function(response) {
                    $scope.data = response.data || "Request failed";
                    $scope.status = response.status;

                    $scope.url = "";


                });

        }

    }]);





