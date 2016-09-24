import angular from 'angular';

import compileServiceConfig from "./compile.config.js";
import httpConfig from "./http.config.js";
import localStorageConfig from "./localstorage.config.js";
import InterceptorModule from '../interceptor';
import translationStorageProvider from "./translation-storage.provider.js";
import translationConfig from "./translation.config.js";
import alertServiceConfig from './alert.config.js';

const ConfigModule = angular.module('config',[InterceptorModule.name])
// .config(compileServiceConfig)
 .config(httpConfig)
 .config(localStorageConfig)
 .factory('translationStorageProvider', translationStorageProvider)
 .config(translationConfig)
 .config(alertServiceConfig)
;

export default ConfigModule;
