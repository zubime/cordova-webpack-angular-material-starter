import angular from 'angular';

import authExpiredInterceptor from "./auth-expired.interceptor";
import notificationInterceptor from "./notification.interceptor";
import errorHandlerInterceptor from "./errorhandler.interceptor";
import authInterceptor from "./auth.interceptor";



const ConfigModule = angular.module('block.interceptor',[])
.factory('authExpiredInterceptor', authExpiredInterceptor)
.factory('notificationInterceptor', notificationInterceptor)
.factory('errorHandlerInterceptor', errorHandlerInterceptor)
.factory('authInterceptor', authInterceptor)
;

export default ConfigModule;
