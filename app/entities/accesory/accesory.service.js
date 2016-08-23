(function() {
    'use strict';
    angular
        .module('gCompanyApp')
        .factory('Accesory', Accesory);

    Accesory.$inject = ['$resource'];

    function Accesory ($resource) {
        var resourceUrl =  'api/accesories/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
