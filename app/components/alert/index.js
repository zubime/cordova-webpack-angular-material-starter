import angular from 'angular';
import jhiAlert      from "./alert.directive.js";
import jhiAlertError from "./alert-error.directive.js";
import AlertService  from "./alert.service.js";


const AlertModule = angular.module('alert',[])
  .component('jhiAlert', jhiAlert)
  .component('jhiAlertError', jhiAlertError)
  .provider('AlertService', AlertService);


export default AlertModule;
