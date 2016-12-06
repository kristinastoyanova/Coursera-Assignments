(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject(['$scope','$filter']);

    function LunchCheckController($scope, $filter) {
        $scope.list = '';
        $scope.message = '';

        $scope.printMessage =  function(list) {
            var count = $scope.list.split(',').filter(n => n != '').length;
            if(count == 0)
                $scope.message = "Please enter data first!";
            else if (count > 3)
                $scope.message = "Too much!";
            else
                $scope.message = "Enjoy!";
        }
    };


})();