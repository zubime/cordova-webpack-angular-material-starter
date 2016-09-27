var angular = require('angular');
// require("ngtemplate?relativeTo=/information/&prefix=information/!./information/tab.html";
// require("ngtemplate?relativeTo=/resource/&prefix=resource/!./resource/tab.html";
// require("ngtemplate?relativeTo=/service/&prefix=service/!./service/tab.html";
// require("ngtemplate?relativeTo=/users/&prefix=users/!./users/tab.html";
import SetupController from "./business_setup.controller.js";
import stateConfig from "./business_setup.state.js";
import InformationModule from "./information/information";
import ServiceModule from "./service/service";
import UsersModule from "./users/users";
import ResourceModule from "./resource/resource";


const BusinessSetupModule = angular.module('business_setup',[
    InformationModule.name
   ,ServiceModule.name
   ,UsersModule.name
   ,ResourceModule.name

])
.controller('SetupController', SetupController)
.config(stateConfig)
;

export default BusinessSetupModule;
