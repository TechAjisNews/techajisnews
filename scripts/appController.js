/**
* @Author: Mohammed Ismail <ikismail7>
* @Date:   2017-08-28T16:31:35+05:30
 * @Last modified by:   ikismail7
 * @Last modified time: 2017-08-30T10:39:29+05:30
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

    // $scope.getNews7RSS = function(){
    //   console.log('RSS-News7');
    //   appService.getNews7RSS().then(function(data){
    //     var x2js = new X2JS();
    //     var aftConv = x2js.xml_str2json(data);
    //     console.log('data',data);
    //     console.log('aftConv', aftConv);
    //   },function(errorResponse){
    //     console.log('Error while fetching data');
    //   })
    // }

    // $scope.getNews7RSS();

  }])
