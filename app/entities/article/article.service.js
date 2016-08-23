(function() {
    'use strict';
    angular
        .module('gCompanyApp')
        .factory('Article', Article);

    Article.$inject = ['$resource', 'DateUtils'];

    function Article ($resource, DateUtils) {
        var resourceUrl =  'm_location/' + 'api/articles/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.published = DateUtils.convertLocalDateFromServer(data.published);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.published = DateUtils.convertLocalDateToServer(data.published);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.published = DateUtils.convertLocalDateToServer(data.published);
                    return angular.toJson(data);
                }
            }
        });
    }
})();
