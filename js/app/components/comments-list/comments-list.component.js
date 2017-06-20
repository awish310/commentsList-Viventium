'use strict';

commentApp.component('commentsList', {
	bindings: {
		commentsData:"<"
	}, 
	templateUrl:'./js/app/components/comments-list/comments-list.html',
	controller: function(commentsDataService) {
		this.commentsData = [];

		this.onInit = function() {
			this.getData();
		}

		this.getData = function() {
			commentsDataService.getData().$promise.then(function(data) {
				this.commentsData = data.comments;
			}.bind(this))
		};

		this.onInit();
	}	
});