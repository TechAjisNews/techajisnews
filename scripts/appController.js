/**
 * @Author: Mohammed Ismail
 * @Date:   2017-08-30T16:05:45+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-09-05T13:04:52+05:30
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
     $scope.getBbcHeadlines = function(){
       console.log('BBC news');
       appService.getBbcHeadlines().then(function(data){
         $scope.sourceData = data;
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

    //  $scope.getTopStories = function(source,sortBy){
    //    console.log('top stories source',  source);
    //    appService.getTopStories(source,sortBy).then(function(data){
    //      $scope.topStories = data;
    //      console.log("topStories + ", $scope.topStories);
    //    },function(errorResponse){
    //      // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
    //    })
    //  }

     $scope.getAllSources();

 }])
