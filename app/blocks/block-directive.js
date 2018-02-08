$(function() {
	angular.module('app.core')
		.directive('headerTemp', headerTemp)
		.directive('footerTemp', footerTemp)


	function headerTemp() {
		return{
			restrict: 'AE',
			templateUrl: 'app/templates/header.html',
			link: function(rootScope,scope, el, attr) {
				
			}
		}
	}

	function footerTemp() {
		return{
			restrict: 'AE',
			templateUrl: 'app/templates/footer.html',
			link: function(rootScope,scope, el, attr) {
	
			}
		}
	}
});