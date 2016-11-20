'use strict';
import template from './resource-dialog.html';
import controller from './resource-dialog.controller.js';

const ResourceDialog = {
  template,
  controller,
  controllerAs:'vm',
  bindings: {
      'entity':'<'
  }
};

export default ResourceDialog;