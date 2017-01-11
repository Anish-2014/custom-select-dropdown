var app = angular.module("selectDropdown", []);

app.controller("dropdownCtrl", function($scope) {
	$scope.items = [{
		driver: {img:"" , name:"Ashish", contact:"12345678", img:"images/driver.jpg"},
	}, {
		driver: {img:"" , name:"Abhishek", contact:"1345678", img:"images/driver.jpg"},
		vehicle: {img:"", number:"s1234", name:"indica", img:"images/car.jpg"}
	}, {
		vehicle: {img:"", number:"s1236", name:"indica2", img:"images/car.jpg"}
	}, {
        driver: {img:"" , name:"Vijay", contact:"1234578", img:"images/driver.jpg"},
        vehicle: {img:"", number:"s1236", name:"indica2", img:"images/car.jpg"}
    }, {
        driver: {img:"" , name:"Surya", contact:"1234578", img:"images/driver.jpg"},
        vehicle: {img:"", number:"s1236", name:"indica2", img:"images/car.jpg"}
    }, {
        driver: {img:"" , name:"Rahul", contact:"1234578"},
        vehicle: {img:"", number:"s1236", name:"indica2", img:"images/car.jpg"}
    }];

	$scope.objectList = ['driver', 'vehicle'];
	$scope.propertyList = ['name', 'number']

	$scope.selectedValue = "";

	$scope.$watch("selectedValue", function(value) {
		console.log($scope.selectedValue);
	});
	
});

