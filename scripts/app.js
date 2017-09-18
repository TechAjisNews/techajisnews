/**
 * @Author: Mohammed Ismail
 * @Author: Saleemah <Saleemahmh>
 * @Date:   2017-08-30T16:05:45+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-09-14T17:48:49+05:30
 */
 var app = angular.module('myApp', ["ngRoute","angular-loading-bar","ngtimeago"]);
 app.config(function($routeProvider) {
   $routeProvider
   .when("/", {
     templateUrl : "view/main.html"
   })
   .when("/home", {
     templateUrl : "view/main.html"
   })
   .when("/category", {
     templateUrl : "view/category.html"
   })
   .when("/newspapers", {
     templateUrl : "view/allNewspaper.html"
   })
   .when("/content", {
     templateUrl : "view/contentPage.html"
   })
   .when("/showMoreContent", {
     templateUrl : "view/mainPageList.html"
   })
   .when("/topstory", {
     templateUrl : "view/topstories.html"
   })
   .when("/latestStory", {
     templateUrl : "view/latestNews.html"
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
