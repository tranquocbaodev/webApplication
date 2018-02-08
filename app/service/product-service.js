angular.module("app.core")
.factory('ProductService', ['dataSvc','$q', function (dataSvc,$q) {
	var service = {};

	//get service company
	service.getServiceCompany = function () {
		var deferred = $q.defer();
		dataSvc.query("data-service-company").then(function (data) {
			deferred.resolve(data);
		});
		return deferred.promise;
	};

	return service;
}]);