// (function (){
//     var ProductsController = function($scope){
//         $scope.products= [{name:'netta', city:'haifa'},{name:'aya', city:'carmiel'},'tully']
//     }

//     angular.module('shopApp').controller('ProductsController', ProductsController)
// })
//ProductsController()

(function(){

    var productsController = function ($scope){
        $scope.sortBy = 'name'
        $scope.reverse = false
        
        $scope.products = [{joined:'1989-03-19', name:'Netta', city:'Haifa', orderTotal: '10'}, {joined:'2019-04-06', name:'Aya', city:'Carmiel', orderTotal: '10.1867'} , {joined:'2015-01-06', name:'Tully', city:'Pardesiya', orderTotal: '10'} , {joined:'2015-01-06', name:'Tulila', city:'Pardesiya', orderTotal: '10'} , {joined:'2021-05-31', name:'Clara', city:'Pardesiya', orderTotal: '101'}  , {joined:'2021-05-31', name:'Clara', city:'Pardesiya', orderTotal: '101'}]
        $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse
        }
    }
    productsController.$inject = ['$scope']

    angular.module('shopApp').controller('productsController', productsController)

}())