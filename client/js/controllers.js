//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);
controllers.controller('BlogController', ['$scope', function($scope, BlogService) {
    $scope.getPosts = function() {
        BlogService.query($scope.posts);
    }
}]);
controllers.controller('NewPostController', ['$scope', function($scope, BlogService) {
    $scope.createPost = function() {
        BlogService.save($scope.posts);
    }
}]);