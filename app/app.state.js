'use strict';
export default    function stateConfig($stateProvider) {
        'ngInject'
        $stateProvider.state('app', {
            abstract: true,
            resolve: {
                // authorize: ['Auth',
                //     function (Auth) {
                //         return Auth.authorize();
                //     }
                // ],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('global');
                }]
            },
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'menu',
                  event:'toggleMenu'
                }
            }
        });
    }
