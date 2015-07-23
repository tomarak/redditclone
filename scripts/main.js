
var app = angular.module('app', []);

app.controller("MainCtrl", ['$scope', '$http', function($scope, $http){

  $scope.results = null;

  $scope.getAllPosts = function(){
    $http.get('/posts').then(function(results){

      $scope.results = results;
    })
  }
  $scope.getAllPosts();

$scope.submitPost = function(){
  var dataToSend = {
    title: $scope.newTitle,
    content: $scope.newContent,
    link: $scope.newLink
  }
  $http.post('/submitpost', dataToSend).success(function(data, status){
    $scope.newTitle = '';
    $scope.newContent = '';
    $scope.newLink = '';
    $scope.getAllPosts();
  })
  .error(function(data, status){
    console.log('errrr')
  })
}

}])