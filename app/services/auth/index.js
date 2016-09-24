




import Account from "./account.service.js";
import Activate from "./activate.service.js";
import AuthServerProvider from "./auth.jwt.service.js";
import Auth from "./auth.service.js";
import hasAnyAuthority from "./has-any-authority.directive.js";
import hasAuthority from "./has-authority.directive.js";
import PasswordResetFinish from "./password-reset-finish.service.js";
import PasswordResetInit from "./password-reset-init.service.js";
import Password from "./password.service.js";
import Principal from "./principal.service.js";
import Register from "./register.service.js";

var angular = require('angular');
export default angular
        .module('services.auth',[])
.factory('Account', Account)
.factory('Activate', Activate)
.factory('AuthServerProvider', AuthServerProvider)
.factory('Auth', Auth)
.directive('hasAnyAuthority', hasAnyAuthority)
.directive('hasAuthority', hasAuthority)

.factory('PasswordResetFinish', PasswordResetFinish)
.factory('PasswordResetInit', PasswordResetInit)
.factory('Password', Password)
.factory('Principal', Principal)
.factory('Register', Register)



;
