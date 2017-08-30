/**
* @Author: Mohammed Ismail <ikismail7>
* @Date:   2017-08-28T16:31:35+05:30
 * @Last modified by:   ikismail7
 * @Last modified time: 2017-08-30T13:10:15+05:30
*/
app.controller('newsController', ['$scope','appService',function(
  $scope,appService) {

    $scope.category;
    $scope.sourceData = [];
    $scope.image ;

    $scope.getNewsBySource = function(category){
      $scope.category = category;
      appService.getNewsBySource(category).then(function(data){
        $scope.sourceData = data;
      },function(error){
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    };
     $scope.getNewsByLanguage = function(language){
      console.log('language ->',language);
      appService.getNewsByLanguage(language).then(function(data){
        $scope.sourceData = data;
        console.log($scope.sourceData)
      },function(error){
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    };

    $scope.getAllSources = function(){
      console.log('RSS-News7');
      appService.getAllSources().then(function(data){
        $scope.sources = data;
      },function(errorResponse){
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    }

    $scope.getAllSources();

  }])
