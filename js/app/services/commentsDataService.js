'use strict';

commentApp.service('commentsDataService', ['resourceService', function(resourceService) {
	var serviceData = [];
	this.tagOptions = ["bug","issue","etc"];

	this.getData = function () {
		//query by $resource
		return this.resource = resourceService.get({}, function(result) {
			serviceData = result.comments;
			return serviceData;
		});	
	}

	this.getComment = function (id) {
		// get by $resource
		for (var i = 0; i < serviceData.length; i++) {
			if (id === serviceData[i].id) {
				var comment = serviceData[i];
			}
		}
		return comment;
	}

	this.create = function(commentData) {
		// save by $resource
		var newComment = {
			"id": Date.now(),
			"title": commentData.title,
			"text": commentData.text,
			"tags": commentData.tags
		};
		serviceData.push(newComment);
	}

	this.delete = function (id) {
		// delete by $resource
		for (var i = 0; i < serviceData.length; i++) {
			if (id === serviceData[i].id) {
				var index = i;
			}
		}		
		serviceData.splice(index, 1);
	}

	this.update = function (commentData) {
		// update by $resource
		for (var i = 0; i < serviceData.length; i++) {
			if (commentData.id === serviceData[i].id) {
				serviceData[i] = commentData;
			}
		}		
	}

	this.addNewTag = function(tag) {
		if (this.tagOptions.indexOf(tag) === -1) {
		 	this.tagOptions.push(tag);
		}
	}

}])