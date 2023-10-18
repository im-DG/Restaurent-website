var mymodule = angular.module("itsModule", []);
        mymodule.controller("itsController", function ($scope, $http) {
            //-------------------------------------------------------
            $scope.userArray = [];
            $scope.showContact = function () {
                var url = "/show-all-contact";
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