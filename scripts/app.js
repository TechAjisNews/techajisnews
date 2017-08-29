/**
* @Author: Mohammed Ismail <ikismail7>
* @Date:   2017-08-28T16:14:30+05:30
 * @Last modified by:   ikismail7
 * @Last modified time: 2017-08-29T12:49:54+05:30
*/
var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "view/mainPage.html"
  })
  .when("/home", {
    templateUrl : "view/mainPage.html"
  })
  .when("/category", {
    templateUrl : "view/categoryPage.html"
  }).otherwise({
    redirectTo : '/'
  });
});
