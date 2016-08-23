(function() {
    'use strict';
    angular
        .module('gCompanyApp')
        .factory('Place', Place);

    Place.$inject = ['$resource'];

    function Place ($resource) {
        var resourceUrl =  'm_place/' + 'api/places/:id';

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
