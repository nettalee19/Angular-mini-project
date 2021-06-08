(function (){
    var ProductsController = function($scope){
        $scope.products= [{name:'netta', city:'haifa'},{name:'aya', city:'carmiel'},'tully']
    }

    angular.module('shopApp').controller('ProductsController', ProductsController)
})
//ProductsController()