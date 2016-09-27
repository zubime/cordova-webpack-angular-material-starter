import angular from 'angular';

import ApplicationModule    from "./application";
import AuthModule     from "./auth";
import ProfilesModule from "./profiles";
import UserModule    from "./user";
import CommonModule from "./common";


const ComponentModule = angular.module('services',[
    ApplicationModule.name
  , AuthModule.name
  , ProfilesModule.name
  , UserModule.name
  , CommonModule.name
]);

export default ComponentModule;
