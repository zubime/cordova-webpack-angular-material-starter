'use strict';
export default function alertServiceConfig(AlertServiceProvider) {
        'ngInject';
        // set below to true to make alerts look like toast
        AlertServiceProvider.showAsToast(false);
    }
