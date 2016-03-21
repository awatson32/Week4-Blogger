//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);
controllers.controller('BlogController', ['$scope', function($scope, BlogService) {
    $scope.getPosts = function() {
        BlogService.query($scope.posts);
    }
}]);
controllers.controller('NewPostController', ['$scope', function($scope, BlogService) {
    $scope.createPost = function() {
        var post = {
            title: $scope.title,
            author: $scope.author,
            content: $scope.content
            }
            console.log(post);
            BlogService.save('post');
    }
    
}]);