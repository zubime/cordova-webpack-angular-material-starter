var angular = require('angular');
import InformationComponent     from "./information.component.js";
import LocationController       from "./location.controller.js";
import LocationDeleteController from "./delete/location-delete-dialog.controller.js";
import LocationDetailController from "./detail/location-detail.controller.js";
import LocationDialogController from "./dialog/location-dialog.controller.js";
import Location                 from "./location.service.js";
import stateConfig              from "./location.state.js";

const InformationModule = angular.module('business_setup.information',[])
.component('informationTab',InformationComponent)
.controller('LocationController', LocationController)
.controller('LocationDeleteController',LocationDeleteController)
.controller('LocationDetailController', LocationDetailController)
.controller('LocationDialogController', LocationDialogController)
.factory('Location', Location)
.config(stateConfig)
;

export default InformationModule;
