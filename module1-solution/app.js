(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject(['$scope']);

    function LunchCheckController($scope) {
        $scope.list = '';
        $scope.message = '';
        $scope.style = '';

        $scope.printMessage =  function(list) {
            var count = $scope.list.split(',').filter(n => n.trim() != '').length;//empty items are not counted
            if(count == 0) {
                $scope.message = "Please enter data first!";
                $scope.style = 'red';
            }
            else if (count > 3) {
                $scope.message = "Too much!";
                $scope.style = 'green';
            }
            else {
                $scope.message = "Enjoy!";
                $scope.style   = 'green';
            }
        }
    };


})();