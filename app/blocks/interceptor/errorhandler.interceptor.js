'use strict';
    // errorHandlerInterceptor.$inject = ['$q', '$rootScope'];

export default function errorHandlerInterceptor ($q, $rootScope) {
        'ngInject';
        var service = {
            responseError: responseError
        };

        return service;

        function responseError (response) {
            if (!(response.status === 401 && (response.data === '' || (response.data.path && response.data.path.indexOf('/api/account') === 0 )))) {
                $rootScope.$emit('gCompanyApp.httpError', response);
            }
            return $q.reject(response);
        }
    }
