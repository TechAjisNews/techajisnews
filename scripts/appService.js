/**
* @Author: Mohammed Ismail <ikismail7>
* @Date:   2017-08-28T19:00:36+05:30
 * @Last modified by:   ikismail7
 * @Last modified time: 2017-08-29T20:24:36+05:30
*/
app.factory('appService',['$http', function($http){
  var appService = this;

  var GET_SOURCE_URL="https://newsapi.org/v1/sources?category=";
  var GET_ICON = "https://icons.better-idea.org/icon?url=";
  var GET_LANGUAGE_URL="https://newsapi.org/v1/sources?language=";

  appService.getNewsBySource = function(category){
    console.log('category ->',category);
    return $http.get(GET_SOURCE_URL + category).then(function(response){
      return response.data.sources;
    },function(errorResponse){
      console.log('Error While fetching Data in service')
    })
  };
   appService.getNewsByLanguage = function(language){
    console.log('language ->',language);
    return $http.get(GET__URL + language).then(function(response){
      return response.data.sources;
    },function(errorResponse){
      console.log('Error While fetching Data in service')
    })
  };
    return appService;
  }])
