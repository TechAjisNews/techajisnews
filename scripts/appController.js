/**
* @Author: Mohammed Ismail <ikismail7>
* @Author: Saleemah <Saleemahmh>
* @Date:   2017-08-30T16:05:45+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-09-06T13:15:38+05:30
*/
app.controller('newsController', ['$scope','appService',function(
  $scope,appService) {

    $scope.category;
    $scope.sourceData = [];
    $scope.image ;

    var topStoriesSource = ['bbc-news', 'cnbc','cnn','daily-mail',
    'engadget', 'mtv-news', 'espn-cric-info', 'time',
    'techradar', 'google-news', 'the-times-of-india'];
    $scope.topStories = [];


    $scope.getNewsBySource = function(category){
      $scope.category = category;
      appService.getNewsBySource(category).then(function(data){
        $scope.sourceData = data;
      },function(error){
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    };
    $scope.getTopStories = function(){
      $scope.topStories = [];
      console.log('topStories');
      for (var i = 0; i < topStoriesSource.length; i++) {
          appService.getStories(topStoriesSource[i], 'top').then(function(data){
          $scope.topStories.push(data);
          console.log($scope.topStories);
        },function(error){
          // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
        })
      }
    };

    $scope.getAllSources = function(){
      appService.getAllSources().then(function(data){
        $scope.sources = data;
      },function(errorResponse){
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    }

    $scope.getStories = function(source,sortBy){
      appService.getStories(source,sortBy).then(function(data){
        $scope.sourceData = data;
      },function(errorResponse){
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    }

    $scope.getAllSources();

  }])
