var angular = require("angular");

function run(stateHandler, translationHandler, $templateCache, $state, $stateParams, $rootScope) {
    stateHandler.initialize();
    translationHandler.initialize();
    $templateCache.put('templateId.html', 'This is the content of the template');
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    // Credits: Adam's answer in http://stackoverflow.com/a/20786262/69362
    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
      console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
    });

    $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
      console.log('$stateChangeError - fired when an error occurs during transition.');
      console.log(arguments);
    });

    $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
      console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
    });

    $rootScope.$on('$viewContentLoaded',function(event){
      console.log('$viewContentLoaded - fired after dom rendered',event);
    });

    $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
      console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
      console.log(unfoundState, fromState, fromParams);
    });

    angular.extend($rootScope, {
        defaults: {
            tileLayer: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
            //tileLayer: 'https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
            crs: L.CRS.EPSG3857,
            maxZoom: 14,
            path: {
                weight: 10,
                color: '#800000',
                opacity: 1
            }
        },
        center: {
                    autoDiscover: true
                }
    });

}
run.$inject = ['stateHandler', 'translationHandler','$templateCache', '$state', '$stateParams', '$rootScope'];

export { run }
