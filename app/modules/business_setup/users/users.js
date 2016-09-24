var angular  = require('angular');
import UsersComponent from "./users.component.js";


export default angular.module('business_setup.users',[])
.component('usersTab',UsersComponent);
