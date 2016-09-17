import angular from 'angular';
import maxbytes from "./maxbytes.directive.js";
import minbytes from "./minbytes.directive.js";
import showValidation from "./show-validation.directive.js";

const FormModule = angular.module('form',[])
.directive('maxbytes', maxbytes)
.directive('minbytes', minbytes)
.directive('showValidation', showValidation)
.constant('paginationConstants', {
    'itemsPerPage': 20
})

export default FormModule;
