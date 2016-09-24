import angular from 'angular';
import Config from './config'
import Handlers from './handlers'
import Interceptor from './interceptor'


const BlocksModule = angular.module('blocks',[
    Interceptor.name
   ,Handlers.name
   ,Config.name

]);

export default BlocksModule;
