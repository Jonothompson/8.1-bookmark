var BookmarkItemCollection = Backbone.Collection.extend({
	url: "https://api.parse.com/1/classes/Bookmarks",
	
	parse: function(repsonse) {
		return repsonse.results;
	}
});

export default {BookmarkItemCollection};