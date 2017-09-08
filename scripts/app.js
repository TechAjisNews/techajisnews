/**
 * @Author: Mohammed Ismail
 * @Author: Saleemah <Saleemahmh>
 * @Date:   2017-08-30T16:05:45+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-09-08T10:08:02+05:30
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
     templateUrl : "view/category.html"
   })
   .when("/newspapers", {
     templateUrl : "view/allNewspaper.html"
   })
   .when("/topstory", {
     templateUrl : "view/topstories.html"
   })
   .when("/topStoriesByCategory", {
     templateUrl : "view/topStoriesByCategory.html"
   })
   .when("/newsPage", {
     templateUrl : "view/newsPage.html"
   })
   .when("/contact", {
     templateUrl : "view/contact.html"
   })
   .otherwise({
     redirectTo : '/'
   });
 });

 app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
     cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
 }])
