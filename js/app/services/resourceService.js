'use strict';

commentApp.factory('resourceService', function($resource) {
	return $resource('./comments.json');		
});