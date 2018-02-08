/* Routes */
(function () {
	'use strict';

	angular
		.module('app.dashboard')
		.config(config);

	//config
	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			// anonymous
			.state('anonymous', {
				url: '/',
				views: {
					"default": {
						templateUrl: "app/dashboard/dashboard.html",
						controller: "dashboardCtrl as vm"
					}
				}
			})

			.state('dashboard', {
				url: '/dashboard',
				views: {
					"default": {
						templateUrl: "app/dashboard/dashboard.html",
						controller: "dashboardCtrl as vm"
					}
				}
			})

		$urlRouterProvider.otherwise('/');
	}
})();