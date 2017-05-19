app.config(["AppName",function(AppName){
	console.log("this is config:before " +AppName)
	AppName="new angular services"
	console.log("this is config:after " +AppName)
	// console.log("this is config-vale:"+AppVersion)
}])
app.run(["AppName","AppVersion",function(AppName,AppVersion){
	console.log("this is run-constant:" +AppName)
	AppName="new angular in run section"
	console.log("this is run-vale:"+AppVersion)
	AppVersion="new angular in AppVersion in run "
}])
app.provider("example", function(){
	var myObj={};
	myObj.firstName="JohnGalt";
	myObj.lastName="bangalore"

	myObj.getName=function(){
		return this.firstName+"  "+this.lastName;
	}
	this.$get= function(){
		return myObj;
	}
})

app.service("CustomService", function(){
	this.getCustomerDetails=function(){
		return "this will return Customer Details!!"
	}
})

app.factory("CustomFactory",function(){

	return "this is my facory service";

})

app.constant("AppName","Angular Service")

app.value("AppVersion","1.0.0")