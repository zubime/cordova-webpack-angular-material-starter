(function() {
    'use strict';
    angular
        .module('gCompanyApp')
        .factory('Country', Country);

    Country.$inject = ['$resource'];

    function Country ($resource) {
        var resourceUrl =  'm_dictionary/' + 'api/countries/:id';

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
