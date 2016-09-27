var angular = require('angular');
import  BusinessSetupModule from './business_setup/business_setup';
import  LocationModule from './location/location'

const BusinessLogicModule = angular.module('business_logic',[
            BusinessSetupModule.name,
            LocationModule.name
])
;

export default BusinessLogicModule;
