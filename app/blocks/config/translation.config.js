
    'use strict';




export default function translationConfig($translateProvider, tmhDynamicLocaleProvider) {
        'ngInject';
        // Initialize angular-translate
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'i18n/{lang}/{part}.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useStorage('translationStorageProvider');
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.addInterpolation('$translateMessageFormatInterpolation');

        tmhDynamicLocaleProvider.localeLocationPattern('i18n/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.storageKey('NG_TRANSLATE_LANG_KEY');
    }
