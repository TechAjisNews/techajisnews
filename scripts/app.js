  /**
   * @Author: Mohammed Ismail <ikismail7>
   * @Date:   2017-08-28T16:14:30+05:30
 * @Last modified by:   ikismail7
 * @Last modified time: 2017-08-29T10:44:46+05:30
   */
  var app = angular.module('myApp', ["ngRoute"]);
   app.config(function($routeProvider) {
     $routeProvider
     .when("/default", {
       templateUrl : "view/businessPage.html"
     })
      .otherwise({
          template : "<h1>None</h1><p>Nothing has been selected</p>"
      });
   });
