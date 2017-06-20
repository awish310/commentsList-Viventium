'use strict';

commentApp.component('comment', {
	bindings: {
		comment: "<"
	}, 
	templateUrl: './js/app/components/comment/comment.html',
	controller: function(commentsDataService, $rootScope, $window) { 

		this.onDelete = function (id) {
			commentsDataService.delete(id);
		}
		this.onUpdate = function (id) {
			$rootScope.$emit("updateComment", id);
			$window.location.href ="#widget";
		}
	},

});