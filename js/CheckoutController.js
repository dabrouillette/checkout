app.controller('CheckoutController', ['$scope',function($scope){

    $scope.currentTab;

    $scope.isActiveTab = function(tabNum){
        if(tabNum == $scope.currentTab) {
            return true;
        } else {
            return false;
        }
    };

    $scope.NewActiveTab = function(tabNum){
        $scope.currentTab = tabNum;
    }
}]);
