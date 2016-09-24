
    'use strict';



export default function translationStorageProvider($localStorage, $log, LANGUAGES) {
        'ngInject';
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
