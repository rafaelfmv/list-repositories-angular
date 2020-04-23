(function() {
	'use strict';

	app.controller('homeController', ['$scope', 'Users', 
		function($scope, Users) {
		
			$scope.users = []; // list of users

			$scope.listUsers = function() {
			    Repositories.getPublicRepositories(  ).then(function(users){
				if ( repositorie.status == 200 ){
					$scope.users = users.data;
				}
			    });
			};

			$scope.listUsers();

		}]
	);

})();
