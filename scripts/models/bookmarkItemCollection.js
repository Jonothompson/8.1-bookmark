var Bookmark = Backbone.Model.extend({
	idAttribute: 'objectId'
});

var BookmarkItemCollection = Backbone.Collection.extend({
	url: "https://api.parse.com/1/classes/Bookmarks",
	
	model: Bookmark,
	
	parse: function(repsonse) {
		return repsonse.results;
	}
});

export default {BookmarkItemCollection};