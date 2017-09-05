/**
* @Author: Mohammed Ismail <ikismail7>
* @Date:   2017-08-28T19:00:36+05:30
 * @Last modified by:   ikismail7
 * @Last modified time: 2017-08-30T13:09:03+05:30
*/
app.factory('appService',['$http', function($http){
  var appService = this;

  var GET_ALL_SOURCES = "https://newsapi.org/v1/sources";
  var GET_SOURCE_URL="https://newsapi.org/v1/sources?category=";
  var GET_ICON = "https://icons.better-idea.org/icon?url=";
  var GET_BBC_HEADLINES="https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=10ad575c68f24879949f89147d38c9ce";
  appService.getNewsBySource = function(category){
    console.log('category ->',category);
    return $http.get(GET_SOURCE_URL + category).then(function(response){
      return response.data.sources;
    },function(errorResponse){
      console.log('Error While fetching Data in service')
    })
  };

   appService.getAllSources = function () {
        console.log('getAll sources');
        return $http.get(GET_ALL_SOURCES).then(function(response){
          return response.data.sources;
        },function(errorResponse){
          console.log('Error while fetching all sources');
        })
       };
       appService.getBbcHeadlines = function () {
            console.log('getBbcHeadlines');
            return $http.get( GET_BBC_HEADLINES).then(function(response){
              return response.data.articles;
            },function(errorResponse){
              console.log('Error while fetching all sources');
            })
           };

      return appService;
    }])
