/**
 * @Author: Mohammed Ismail
 * @Author: Saleemah <Saleemahmh>
 * @Date:   2017-08-30T16:05:45+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-09-05T10:58:13+05:30
 */
 var app = angular.module('myApp', ["ngRoute","angular-loading-bar"]);
 app.config(function($routeProvider) {
   $routeProvider
   .when("/", {
     templateUrl : "view/category.html"
   })
   .when("/home", {
     templateUrl : "view/mainPage.html"
   })
   .when("/category", {
     templateUrl : "view/category.html"
   })
   .when("/newspapers", {
     templateUrl : "view/allNewsPaper.html"
   })
   .when("/topstory", {
     templateUrl : "view/topstories.html"
   })
   .otherwise({
     redirectTo : '/'
   });
 });

 app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
     cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
 }])
