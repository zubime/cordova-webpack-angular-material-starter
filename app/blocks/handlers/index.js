import angular from 'angular';
import stateHandler from './state.handler';
import translationHandler from './translation.handler';


const HandlersModule = angular.module('handlers',[])
.factory('stateHandler', stateHandler)
.factory('translationHandler', translationHandler)
;

export default HandlersModule;
