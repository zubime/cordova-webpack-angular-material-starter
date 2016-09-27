'use strict';

export default function ServiceDetails ($resource) {
        'ngInject';
        var resourceUrl =  'm_location/' + 'api/location/:locationId/service-details/:id';

        return $resource(resourceUrl, {locationId:'@locationId',id:'@id'}, {
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

