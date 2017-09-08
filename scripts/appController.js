/**
* @Author: Mohammed Ismail <ikismail7>
* @Author: Saleemah <Saleemahmh>
* @Date:   2017-08-30T16:05:45+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-09-08T13:38:33+05:30
*/
app.controller('newsController', ['$scope','appService',function(
  $scope,appService) {

    $scope.sourceData = [];
    $scope.image ;
    var topStoriesSource = ['bbc-news', 'cnbc', 'daily-mail',
    'engadget', 'mtv-news', 'espn-cric-info', 'time',
    'techradar', 'google-news', 'the-times-of-india'];

    var latestSource=['al-jazeera-english','breitbart-news', 'business-insider',
     'business-insider-uk', 'buzzfeed','daily-mail', 'engadget', 'espn-cric-info', 'ign',
    'metro', 'mirror', 'mtv-news', 'newsweek', 'new-york-magazine','reuters', 'techcrunch', 'techradar',
    'the-next-web', 'the-telegraph', 'the-times-of-india'];

    $scope.getNewsBySource = function(category){
      appService.getNewsBySource(category).then(function(data){
        $scope.sourceData = data;
      },function(error){
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    };
    $scope.getTopStories = function(){
      $scope.topStories = [];
      for (var i = 0; i < topStoriesSource.length; i++) {
        appService.getStories(topStoriesSource[i], 'top').then(function(data){
          $scope.topStories.push(data);
        },function(error){
          // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
        })
      }
    };

    $scope.getTopStories();

    $scope.getLatest = function(){
      $scope.latest = [];
      for (var i = 0; i < latestSource.length; i++) {
        appService.getStories(latestSource[i], 'latest').then(function(data){
          $scope.latest.push(data);
        },function(error){
          // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
        })
      }
    };

    $scope.getLatest();

    $scope.getAllSources = function(){
      $scope.sources = [];
      appService.getAllSources().then(function(data){
        $scope.sources = data;
      },function(errorResponse){
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    }

    $scope.getStories = function(source,sortBy, sourceName){
      $scope.sourceName = sourceName;
      appService.getStories(source,sortBy).then(function(data){
        $scope.sourceData = data;
      },function(errorResponse){
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    }

    //Getting all the sources by category wise and after that all the top stories
    // realated to that sources.
    $scope.getTopStoriesByCategory = function(category){
        var sourcesByCategory = [];
        $scope.articlesBySource = [];
        appService.getNewsBySource(category).then(function(data){
            sourcesByCategory = data;
            for(var i=0; i < sourcesByCategory.length; i++){
                appService.getStoriesByCategory(sourcesByCategory[i].id , sourcesByCategory[i].name).then(function(data){
                  $scope.articlesBySource.push(data);
                },function(errorResponse){
                  // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
                })
            }
        },function(errorResponse){
          // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
        })
    }


    $scope.getRSS = function(){
      appService.getRSS().then(function(data){
        console.log('RSS Data',data);
      },function(errorResponse){
          console.log('Error RSS');
      })
    }

    $scope.getRSS();

    //Pagination
    //show more functionality

    var pagesShown = 1;

    var pageSize = 1;
    //categorySize denotes number of category shown
    var categorySize =5;

    $scope.paginationLimit = function() {
      return pageSize * pagesShown;
    };
    $scope.paginationCategoryLimit = function() {
      return categorySize * pagesShown;
    };
    $scope.hasMoreLatestToShow = function() {
      return pagesShown < ($scope.latest.length / pageSize);
    };
    $scope.hasMoreStoriesToShow = function() {
      return pagesShown < ($scope.topStories.length / pageSize);
    };
    $scope.hasMoreCategoryToShow = function() {
      return pagesShown < ($scope.sourceData.length / categorySize);
    };
    $scope.showMoreItems = function() {
      pagesShown = pagesShown + 1;
    };

  }])
