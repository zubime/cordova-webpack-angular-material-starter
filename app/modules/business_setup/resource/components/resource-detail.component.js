'use strict';
import template from './resource-detail.html';
import controller from './resource-detail.controller.js';

const ResourceDetail = {
  template,
  controller,
  controllerAs:'vm',
  bindings: {
    entity: '<',
    translatePartialLoader: '<'
  }
};

export default ResourceDetail;
