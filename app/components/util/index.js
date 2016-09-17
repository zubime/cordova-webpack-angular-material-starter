import angular from 'angular';
import Base64 from "./base64.service.js";
import capitalize from "./capitalize.filter.js";
import DataUtils from "./data-util.service.js";
import DateUtils from "./date-util.service.js";
import jhiItemCount from "./jhi-item-count.directive.js";
import PaginationUtil from "./pagination-util.service.js";
import ParseLinks from "./parse-links.service.js";
import jhSortBy from "./sort-by.directive.js";
import jhSort from "./sort.directive.js";
import characters from "./truncate-characters.filter.js";
import words from "./truncate-words.filter.js";



const UtilModule = angular.module('util',[])
.factory('Base64', Base64)
.filter('capitalize', capitalize)
.factory('DataUtils', DataUtils)
.factory('DateUtils', DateUtils)
.component('jhiItemCount', jhiItemCount)
.factory('PaginationUtil', PaginationUtil)
.factory('ParseLinks', ParseLinks)
.directive('jhSortBy', jhSortBy)
.directive('jhSort', jhSort)
.filter('characters', characters)
.filter('words', words);


export default UtilModule;
