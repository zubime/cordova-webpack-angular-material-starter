(function() {
    'use strict';
    angular
        .module('gCompanyApp')
        .factory('Reservation', Reservation);

    Reservation.$inject = ['$resource', 'DateUtils'];

    function Reservation ($resource, DateUtils) {
        var resourceUrl =  'api/reservations/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dateFrom = DateUtils.convertDateTimeFromServer(data.dateFrom);
                        data.dateTo = DateUtils.convertDateTimeFromServer(data.dateTo);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
