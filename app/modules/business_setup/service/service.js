var angular = require('angular');
import ServiceComponent  from "./service.component.js";
import BottomSheetCtrl from "./bottom-sheet/bottom-sheet.controller.js";


const ServiceModule = angular.module('business_setup.service',[])
.controller('serviceTabBottomSheetCtrl',BottomSheetCtrl)
.component('serviceTab',ServiceComponent)
;

export default ServiceModule;
