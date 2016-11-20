'use strict';
import ButtonComponent from './button.component';
import angular from 'angular';
import ResourceDetailComponent from './resource-detail.component';
import ResourceDialogComponent from './resource-dialog.component';
import ResourceDialogController from './resource-dialog.controller';
import ResourceDetailController from './resource-detail.controller';

export default angular.module('resource.components', [])
    .component('simpleButton', ButtonComponent)
    .component('resourceDialog', ResourceDetailComponent)
    .component('resourceDetail', ResourceDialogComponent)
    .controller('ResourceDialogController',ResourceDialogController)
    .controller('ResourceDetailController',ResourceDetailController)
    ;
