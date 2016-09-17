import angular from 'angular';

import JhiLanguageController from "./language.controller.js";
import findLanguageFromKey   from "./language.filter.js";
import JhiLanguageService from "./language.service.js";


const LanguageModule = angular.module('language',[])
.controller('JhiLanguageController', JhiLanguageController)
.filter('findLanguageFromKey', findLanguageFromKey)
.factory('JhiLanguageService', JhiLanguageService)
.constant('LANGUAGES', [
    'en',
    'cs',
    'fr',
    'de',
    'pl',
    'pt-br'
    // jhipster-needle-i18n-language-constant - JHipster will add/remove languages in this array
]
);

export default LanguageModule;
