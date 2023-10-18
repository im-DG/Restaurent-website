var mymodule = angular.module("itsModule", []);
        mymodule.controller("itsController", function ($scope, $http) {
            //-------------------------------------------------------
            $scope.userArray = [];
            $scope.showReser = function () {
                var url = "/show-all-reservation";
                $http.get(url).then(fxOk, fxNotOk);
                function fxOk(response) {
                    $scope.userArray = response.data;
                }
                function fxNotOk(response) {
                    alert(response.data);
                }
            };
            //-------------------------------------
        });