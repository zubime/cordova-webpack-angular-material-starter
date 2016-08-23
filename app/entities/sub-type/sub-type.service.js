(function() {
    'use strict';
    angular
        .module('gCompanyApp')
        .factory('SubType', SubType);

    SubType.$inject = ['$resource'];

    function SubType ($resource) {
        var resourceUrl =  'm_location/' + 'api/sub-types/:id';

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
