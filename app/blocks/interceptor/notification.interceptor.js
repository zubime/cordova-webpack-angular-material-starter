'use strict';
// notificationInterceptor.$inject = ['$q', 'AlertService'];
export default function notificationInterceptor ($q, AlertService) {
        'ngInject';
        var service = {
            response: response
        };
        return service;

        function response (response) {
            var alertKey = response.headers('X-gCompanyApp-alert');
            if (angular.isString(alertKey)) {
                AlertService.success(alertKey, { param : response.headers('X-gCompanyApp-params')});
            }
            return response;
        }
    }
