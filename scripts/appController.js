/**
 * @Author: Mohammed Ismail
 * @Date:   2017-08-30T16:05:45+05:30
 * @Last modified by:   Mohammed Ismail
 * @Last modified time: 2017-09-05T14:35:27+05:30
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
          console.log("sourcesData",$scope.sources)
       },function(error){
         // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
       })
     };
     $scope.getBbcHeadlines = function(){
       appService.getBbcHeadlines().then(function(data){
         $scope.sourceData = data;
       },function(error){
         // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
       })
     };

     $scope.getAllSources = function(){
       appService.getAllSources().then(function(data){
         $scope.sources = data;
         console.log("sources",$scope.sources)
       },function(errorResponse){
         // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
       })
     }

     $scope.getStories = function(source,sortBy){
       appService.getStories(source,sortBy).then(function(data){
         $scope.sourceData = data;
         console.log($scope.sourceData);
       },function(errorResponse){
         // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
       })
     }

     $scope.getAllSources();

 }])
