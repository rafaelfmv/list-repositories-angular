(function() {
	'use strict';
        /**
         * Users Github
         */
        app.factory('Repositories', function ($http) {
                return {
                    /*
                     * Retorna json com a lista de usuarios publicos
                     */
                     getPublicRepositories: function (){
                        return $http.get('https://api.github.com/users/');
                    }
                };
            }
        );
        
})();
