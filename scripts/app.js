/**
  })
 * @Author: Mohammed Ismail
 * @Date:   2017-08-30T16:05:45+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-08-31T09:58:50+05:30
 */
 var app = angular.module('myApp', ["ngRoute","angular-loading-bar"]);
 app.config(function($routeProvider) {
   $routeProvider
   .when("/", {
     templateUrl : "view/mainPage.html"
   })
   .when("/home", {
     templateUrl : "view/mainPage.html"
   })
   .when("/category", {
     templateUrl : "view/newsPage.html"
   })
   .when("/newspapers", {
     templateUrl : "view/allNewsPapers.html"
   })
   .otherwise({
     redirectTo : '/'
   });
 });

 app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
     cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
 }])
