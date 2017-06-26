'use strict';

commentApp.component('commentWidget', {
	bindings: {
		
	}, 
	templateUrl: './js/app/components/comments-widget/comments-widget.html',
	controller: function(commentsDataService, $rootScope, $window) {
		this.tagOptions = commentsDataService.tagOptions;
		this.editMode = false;
		this.commentData = {
			id: '',
			title: '',
			text: '',
			tags: ''
		};
		
		$rootScope.$on("updateComment", function(arg, id) {
			this.commentData = angular.copy(commentsDataService.getComment(id));
			this.editMode = true;
		}.bind(this));


		this.onCreate = function() {
			commentsDataService.create(this.commentData);
			this.addNewOption(this.commentData.tags);
			this.clear();
		}

		this.onUpdate = function() {
			commentsDataService.update(this.commentData);
			this.addNewOption(this.commentData.tags);
			$window.location.href ="#" + this.commentData.id;
			this.clear();
		}

		this.clear = function () {
			this.editMode = false;
			this.commentData = {
				id: '',
				title: '',
				text: '',
				tags: ''
			};
		}

		this.addNewOption = function (tag) {
			// if (this.tagOptions.indexOf(tag) === -1) {
			//  	this.tagOptions.push(tag);
			// }
			commentsDataService.addNewTag(tag);				
		}


	},
});