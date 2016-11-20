var angular = require('angular');
import ServiceComponent  from "./service.component.js";
import BottomSheetCtrl from "./bottom-sheet/bottom-sheet.controller.js";
import stateConfig from './service-details.state';

const ServiceModule = angular.module('business_setup.service',[])
.controller('serviceTabBottomSheetCtrl',BottomSheetCtrl)
.component('serviceTab',ServiceComponent)
.config(stateConfig)
;

export default ServiceModule;
