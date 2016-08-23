(function() {
    'use strict';
    angular
        .module('gCompanyApp')
        .factory('Gallery', Gallery);

    Gallery.$inject = ['$resource'];

    function Gallery ($resource) {
        var resourceUrl =  'm_gallery/' + 'api/galleries/:id';

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
