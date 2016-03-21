//The action to call the local API should be here

var app = angular.module('app', ['ngResource']);
app.factory('BlogService', ['$resource', function($resource) {
        return $resource('/api/posts');
        
}]);


