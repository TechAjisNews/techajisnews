/**
* @Author: Mohammed Ismail <ikismail7>
* @Author: Saleemah <Saleemahmh>
* @Date:   2017-08-28T19:00:36+05:30
 * @Last modified by:   Saleemah
 * @Last modified time: 2017-09-07T18:51:55+05:30
*/
app.factory('appService',['$http', function($http){
  var appService = this;

  var GET_ALL_SOURCES = "https://newsapi.org/v1/sources";
  var GET_SOURCE_URL="https://newsapi.org/v1/sources?category=";
  var GET_ICON = "https://icons.better-idea.org/icon?url=";
   var GET_STORIES="https://newsapi.org/v1/articles?source=";
   var GET_RSSFEEDS="https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FPuthiyathalaimurai_Districts_News";
  var generatedValue= "10ad575c68f24879949f89147d38c9ce";

  appService.getNewsBySource = function(category){
    return $http.get(GET_SOURCE_URL + category).then(function(response){
      return response.data.sources;
    },function(errorResponse){
      console.log('Error While fetching Data in service')
    })
  };
  appService.getLocalRssFeeds=function(){
    return $http.get(GET_RSSFEEDS).then(function(response){
      return response.data.items;
    },function(errorResponse){
      console.log('Error while fetching all items');

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

  appService.getStoriesByCategory = function (sourceId, sourceName ) {
    var sourceId = sourceId;
    var sourceName = sourceName;

    return $http.get( GET_STORIES + sourceId + "&apiKey="
                        + generatedValue).then(function(response){

                        for(var i=0; i< response.data.articles.length; i++){
                          response.data.articles[i]['channel_id'] = sourceId;
                          response.data.articles[i]['channel_name'] = sourceName;
                        }
      return response.data.articles;
    },function(errorResponse){
      console.log('Error while fetching all sources');
    })
  };

  return appService;
}])
