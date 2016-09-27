var angular = require('angular');
import InformationComponent     from "./information.component.js";


const InformationModule = angular.module('business_setup.information',[])
.component('informationTab',InformationComponent)

;

export default InformationModule;
