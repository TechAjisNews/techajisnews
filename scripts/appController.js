/**
* @Author: Mohammed Ismail <ikismail7>
* @Author: Saleemah <Saleemahmh>
* @Date:   2017-08-30T16:05:45+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-09-14T10:47:39+05:30
*/
app.controller('newsController', ['$scope', 'appService', function ($scope, appService) {

  $scope.sourceData = [];
  $scope.image;
  var topStoriesSource = ['bbc-news', 'cnbc', 'daily-mail',
  'engadget', 'mtv-news', 'espn-cric-info', 'time',
  'techradar', 'google-news', 'the-times-of-india'];

  var latestSource = ['al-jazeera-english', 'breitbart-news', 'business-insider',
  'business-insider-uk', 'buzzfeed', 'daily-mail', 'engadget', 'espn-cric-info', 'ign',
  'metro', 'mirror', 'mtv-news', 'newsweek', 'new-york-magazine', 'reuters', 'techcrunch', 'techradar',
  'the-next-web', 'the-telegraph', 'the-times-of-india'];

  $scope.getNewsByCategory = function (category,categoryName) {
    $scope.categoryName_left_navbar = categoryName + " ";
    appService.getNewsByCategory(category).then(function (data) {
      $scope.sourceData = data;
    }, function (error) {
      // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
    })
  };


  /*
  *  initially fetching all top articles form topStoriesSource array
  */
  $scope.getTopStories = function () {
    $scope.topStories = [];
    for (var i = 0; i < topStoriesSource.length; i++) {
      appService.getNewspapers(topStoriesSource[i], 'top').then(function (data) {
        $scope.topStories.push(data);
      }, function (error) {
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    }
    console.log('topStories', $scope.topStories);
  };

  $scope.getTopStories();

  /*
  * initially fetching all latest articles form latestSource array
  */
  $scope.getLatest = function () {
    $scope.latest = [];
    for (var i = 0; i < latestSource.length; i++) {
      appService.getNewspapers(latestSource[i], 'latest').then(function (data) {
        $scope.latest.push(data);
      }, function (error) {
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    }
    console.log('getLatestStories', $scope.latest);
  };

  $scope.getLatest();

  /*
  * fetching all Newspapers
  */
  $scope.getAllSources = function () {
    $scope.sources = [];
    appService.getAllSources().then(function (data) {
      $scope.sources = data;
    }, function (errorResponse) {
      // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
    })
  }

  /*
  * to get stories based on sourceId
  * parameters (sourceId, sortBy, sourceName)
  */
  $scope.getNewspapers = function (source, sortBy, sourceName) {
    $scope.sourceName = sourceName;
    $scope.sourceId = source;
    appService.getNewspapers(source, sortBy).then(function (data) {
      $scope.sourceData = data;
    }, function (errorResponse) {
      // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
    })
  }


  /*
  * Getting all the sources by category wise and after that all the top stories
  * related to that sources.
  */
  $scope.getTopStoriesByCategory = function (category, categoryName) {
    var sourcesByCategory = [];
    $scope.categoryName = " "+categoryName;
    $scope.articlesBySource = [];
    appService.getNewsByCategory(category).then(function (data) {
      sourcesByCategory = data;
      for (var i = 0; i < sourcesByCategory.length; i++) {
        appService.getNewspapersByCategory(sourcesByCategory[i].id,
           sourcesByCategory[i].name).then(function (data) {
          $scope.articlesBySource.push(data);
        }, function (errorResponse) {
          // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
        })
      }
    }, function (errorResponse) {
      // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
    })
  }

  /*
  * to get puthiyathalaimurai news feeds
  */
  $scope.getLocalRssFeeds = function () {
    $scope.districtNews = [];
    appService.getLocalRssFeeds().then(function (data) {
      $scope.districtNews = data;
      console.log('districtNews', $scope.districtNews);
      $scope.getIndianRss();
    }, function (errorResponse) {
      // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
    })
  }

  $scope.getLocalRssFeeds();

  $scope.getIndianRss = function () {
    $scope.indianNews_rss = [];
    appService.getRSSIndianNews().then(function (data) {
      $scope.indianNews_rss = data;
      $scope.getWorldRss();
    }, function (errorResponse) {
      // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
    })
  }

  $scope.getWorldRss = function () {
    $scope.worldNews_rss = [];
    appService.getRSSWorldNews().then(function (data) {
      $scope.worldNews_rss = data;
    }, function (errorResponse) {
      // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
    })
  }


  $scope.getContent = function(content, link){
    console.log('content', content);
    console.log('link', link);
      $scope.feedContent = content;
      $scope.feedContent['link'] = link;
      console.log('feedContent', $scope.feedContent);
  }

  $scope.showMoreContent= function(data, contentHeading){

    $scope.contentHead = contentHeading;
    $scope.contentList = data;
    console.log('Data & heading', $scope.contentList);
  }

  /*
  *   Pagination, show more functionality
  */

  var pagesShown = 1;

  var pageSize = 1;

  /*
  * categorySize denotes number of category shown
  */
  var categorySize = 5;

  $scope.paginationLimit = function () {
    return pageSize * pagesShown;
  };
  $scope.paginationCategoryLimit = function () {
    return categorySize * pagesShown;
  };
  $scope.hasMoreLatestToShow = function () {
    return pagesShown < ($scope.latest.length / pageSize);
  };
  $scope.hasMoreStoriesToShow = function () {
    return pagesShown < ($scope.topStories.length / pageSize);
  };
  $scope.hasMoreCategoryToShow = function () {
    return pagesShown < ($scope.sourceData.length / categorySize);
  };
  $scope.showMoreItems = function () {
    pagesShown = pagesShown + 1;
  };

}])
