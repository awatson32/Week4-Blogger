//Use to instantiate app, connect factory & controllers and configure app.

var myBlogApp = angular.module('myBlogApp', ['myBlogApp.controllers', 'ngRoute']);

myBlogApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/blogposts.html',
        controller: 'BlogController'
    })
    .when('/newpost', {
        templateUrl: 'views/newpost.html',
        controller: 'NewPostController'
    });
}]);