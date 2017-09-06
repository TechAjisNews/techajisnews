/**
* @Author: Mohammed Ismail <ikismail7>
* @Author: Saleemah <Saleemahmh>
* @Date:   2017-08-28T19:00:36+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-09-06T12:20:28+05:30
*/
app.factory('appService',['$http', function($http){
  var appService = this;

  var GET_ALL_SOURCES = "https://newsapi.org/v1/sources";
  var GET_SOURCE_URL="https://newsapi.org/v1/sources?category=";
  var GET_ICON = "https://icons.better-idea.org/icon?url=";
   var GET_STORIES="https://newsapi.org/v1/articles?source=";
  var generatedValue= "10ad575c68f24879949f89147d38c9ce";

  appService.getNewsBySource = function(category){
    return $http.get(GET_SOURCE_URL + category).then(function(response){
      return response.data.sources;
    },function(errorResponse){
      console.log('Error While fetching Data in service')
    })
  };

  appService.getAllSources = function () {
    return $http.get(GET_ALL_SOURCES).then(function(response){
      return response.data.sources;
    },function(errorResponse){
      console.log('Error while fetching all sources');
    })

  };

  appService.getStories = function (source, sortBy) {
    return $http.get( GET_STORIES + source + "&sortBy=" + sortBy + "&apiKey="
                        + generatedValue).then(function(response){
      return response.data.articles;
    },function(errorResponse){
      console.log('Error while fetching all sources');
    })
  };

  return appService;
}])
