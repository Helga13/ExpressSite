function CastController($scope){
	$scope.items = [
		{title: 'Name1', quantity:1, price: 15.95},
		{title: 'Name2', quantity:1, price: 8.95},
		{title: 'Name3', quantity:1, price: 7.95},
		{title: 'Name4', quantity:1, price: 9.95},
		{title: 'Name5', quantity:1, price: 3.95}
	];
	
	$scope.totalCart = function(){
		var total = 0;
			for(var i=0, len=$scope.items.length; i<len; i++){
				total = total + $scope.items[i].price * $scope.items[i].quantity
			}
		return total;
	};
	
	function calculateDiscount(newValue){
		$scope.bill = newValue>100?10:0;
	};

	$scope.$watch($scope.totalCart, calculateDiscount);
}