(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .factory('translationStorageProvider', translationStorageProvider);

    translationStorageProvider.$inject = ['$localStorage', '$log', 'LANGUAGES'];

    function translationStorageProvider($localStorage, $log, LANGUAGES) {
        return {
            get: get,
            put: put
        };

        function get(name) {
            if (LANGUAGES.indexOf($localStorage[name] === -1)) {
                $log.info('Resetting invalid cookie language "' + $localStorage[name] + '" to prefered language "en"');
                $localStorage[name] = 'en';
            }
            return $localStorage[name];
        }

        function put(name, value) {
            $localStorage[name] = value;
        }
    }
})();
