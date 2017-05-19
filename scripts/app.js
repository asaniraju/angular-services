var app=angular.module("myApp",[]);

// app.config(["exampleProvider", function(exampleProvider){
// 	console.log(example.$get().firstName);
// 	console.log(example.$get().getName());
// }])

// app.run(["exampleProvider", function(exampleProvider){
// 	console.log(example.$get().firstName);
// 	console.log(example.$get().getName());
// }])

// app.run(["CustomService", function(CustomService){

// 	console.log("this service provider"+CustomService.getCustomerDetails())

// }])
app.controller("myController",
				["$scope",
				  "example",
				  "CustomService",
				  "CustomFactory",
				  "AppName",
	 function($scope,example,CustomService,CustomFactory,AppName){
			console.log("my controller -ProviderService:" +example.firstName)
			console.log("my controller -ProviderService:" +example.getName())
			console.log("my controller -Provider:" +CustomService.getCustomerDetails())

	$scope.message=CustomService.getCustomerDetails();
	 $scope.customefactorymessage=CustomFactory

	 console.log(AppName)
}])