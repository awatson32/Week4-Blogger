//The action to call the local API should be here

var app = angular.module('app', ['ngResource']);
app.factory('BlogPosts', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/posts', null,
        {
            query: {method: 'get'}
        })
    
}]);


