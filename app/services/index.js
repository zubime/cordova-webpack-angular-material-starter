import angular from 'angular';

import ApplicationModule    from "./application";
import AuthModule     from "./auth";
import ProfilesModule from "./profiles";
import UserModule    from "./user";


const ComponentModule = angular.module('services',[
    ApplicationModule.name
  , AuthModule.name
  , ProfilesModule.name
  , UserModule.name
]);

export default ComponentModule;
