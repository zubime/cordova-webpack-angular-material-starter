import StatusController from "./status.controller.js";
import { stateConfig } from "./status.state.js";
import { run } from "./status-run.js";

require('angular')
  .module('status',[
    'ngStorage',
    'ngAria',
    'ngMaterial',
    'ui.router',
    'ngMdIcons',
    'ngAnimate',
  ])
  .controller( 'StatusController', StatusController)
  .config(stateConfig)
  .run(run);
