function run(stateHandler, translationHandler, $templateCache, $state, $stateParams, $rootScope) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;


}
run.$inject = ['stateHandler', 'translationHandler','$templateCache', '$state', '$stateParams', '$rootScope'];

export { run }
