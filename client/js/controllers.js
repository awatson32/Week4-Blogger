//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);
controllers.controller('BlogController', ['$scope', function($scope, BlogService) {
    $scope.posts = BlogService.query();
}]);
controllers.controller('NewPostController', ['$scope', function($scope) {
    $scope.cr
}]);