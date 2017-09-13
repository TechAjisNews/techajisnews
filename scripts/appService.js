/**
 * @Author: Mohammed Ismail <ikismail7>
 * @Author: Saleemah <Saleemahmh>
 * @Date:   2017-08-28T19:00:36+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-09-08T18:26:28+05:30

 */
app.factory('appService', ['$http', function ($http) {
    var appService = this;

    var GET_ALL_SOURCES = "https://newsapi.org/v1/sources";
    var GET_SOURCE_URL = "https://newsapi.org/v1/sources?category=";
    var GET_ICON = "https://icons.better-idea.org/icon?url=";
    var GET_STORIES = "https://newsapi.org/v1/articles?source=";
    var GET_RSSFEEDS = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FPuthiyathalaimurai_Districts_News";
    var RSSFEED_PT = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FPuthiyathalaimurai_Tamilnadu_News&api_key=3159ncurciuuew1nmfhqt5zap8r7nqisqzcx4yvt&order_by=pubDate&order_dir=desc&count=50"
    var RSSFEED_IndiaNews_PT = " https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FPuthiyathalaimurai_India_News%3Fformat%3Dxmlhttps%3A%2F%2Fnews.ycombinator.com%2Frss&api_key=3159ncurciuuew1nmfhqt5zap8r7nqisqzcx4yvt&order_by=pubDate&order_dir=asc&count=50";
    var generatedValue = "10ad575c68f24879949f89147d38c9ce";

    appService.getNewsByCategory = function (category) {
        return $http.get(GET_SOURCE_URL + category).then(function (response) {
            return response.data.sources;
        }, function (errorResponse) {
            console.log('Error While fetching Data in service')
        })
    };

    appService.getAllSources = function () {
        return $http.get(GET_ALL_SOURCES).then(function (response) {
            return response.data.sources;
        }, function (errorResponse) {
            console.log('Error while fetching all sources');
        })

    };

    appService.getNewspapers = function (source, sortBy) {
        return $http.get(GET_STORIES + source + "&sortBy=" + sortBy + "&apiKey="
            + generatedValue).then(function (response) {
            return response.data.articles;
        }, function (errorResponse) {
            console.log('Error while fetching all sources');
        })
    };

    appService.getNewspapersByCategory = function (sourceId, sourceName) {
        var sourceId = sourceId;
        var sourceName = sourceName;

        return $http.get(GET_STORIES + sourceId + "&apiKey="
            + generatedValue).then(function (response) {

            for (var i = 0; i < response.data.articles.length; i++) {
                response.data.articles[i]['channel_id'] = sourceId;
                response.data.articles[i]['channel_name'] = sourceName;
            }
            return response.data.articles;
        }, function (errorResponse) {
            console.log('Error while fetching all sources');
        })
    };

    appService.getLocalRssFeeds = function () {
        return $http.get(RSSFEED_PT).then(function (response) {

          console.log('localNews service', response.data);

                for (var i = 0; i < response.data.items.length; i++) {
                    var item = response.data.items[i];
                    var img = item.content.match(/http:.*?.jpg/g);
                    var content = item.content.match(/<p>.*?<\/p\>/g);
                    content.shift();
                    content.pop();

                    var content_modified = {
                      "title" : $(content[0]).text(),
                      "body" : $(content[1]).text(),
                      "description" : $(content[2]).text(),
                      "image_url" : img[0]
                    }

                    response.data.items[i]['content_modified'] = content_modified;
                }

                return response.data;
            }, function (errorResponse) {
                console.log('Error while fetching all sources');
            })
    };

    appService.getRSSIndianNews = function () {
        return $http.get(RSSFEED_IndiaNews_PT).then(function (response) {

          console.log('localNews service', response.data);

                for (var i = 0; i < response.data.items.length; i++) {
                    var item = response.data.items[i];
                    var img = item.content.match(/http:.*?.jpg/g);
                    var content = item.content.match(/<p>.*?<\/p\>/g);
                    content.shift();
                    content.pop();

                    var content_modified = {
                      "title" : $(content[0]).text(),
                      "body" : $(content[1]).text(),
                      "description" : $(content[2]).text(),
                      "image_url" : img[0]
                    }

                    response.data.items[i]['content_modified'] = content_modified;
                }

                return response.data;
            }, function (errorResponse) {
                console.log('Error while fetching all sources');
            })
    };

    return appService;
}])
