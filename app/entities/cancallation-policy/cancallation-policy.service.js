(function() {
    'use strict';
    angular
        .module('gCompanyApp')
        .factory('CancallationPolicy', CancallationPolicy);

    CancallationPolicy.$inject = ['$resource'];

    function CancallationPolicy ($resource) {
        var resourceUrl =  'api/cancallation-policies/:id';

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
