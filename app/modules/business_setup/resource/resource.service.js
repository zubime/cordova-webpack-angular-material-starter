(function() {
    'use strict';
    angular
        .module('gCompanyApp')
        .factory('Resource', Resource);

    Resource.$inject = ['$resource'];

    function Resource ($resource) {
        var resourceUrl =  'm_location/' + 'api/resources/:id';

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
