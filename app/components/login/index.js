import angular from 'angular';

import LoginController from "./login.controller.js";
import LoginService from "./login.service.js";


const LoginModule = angular.module('login',[])
.controller('LoginController', LoginController)
.factory('LoginService', LoginService)
;

export default LoginModule;
