import angular from 'angular';

import AlertModule    from "./alert";
import FormModule     from "./form";
import LanguageModule from "./language";
import LoginModule    from "./login";
import UtilModule     from "./util";

const ComponentModule = angular.module('component',[
    AlertModule.name
  , FormModule.name
  , LanguageModule.name
  , LoginModule.name
  , UtilModule.name
]);

export default ComponentModule;
