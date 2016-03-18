//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);
controllers.controller('BlogController', ['$scope', function($scope) {
    $scope.blogList = 'Blogs go here';
}]);
controllers.controller('NewPostController', ['$scope', function($scope) {
    console.log("hello world");
}]);