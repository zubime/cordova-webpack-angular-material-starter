(function() {
    'use strict';
    angular
        .module('gCompanyApp')
        .factory('Type', Type);

    Type.$inject = ['$resource'];

    function Type ($resource) {
        var resourceUrl =  'm_location/' + 'api/types/:id';

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
