export default Backbone.View.extend({
	template: JST.application,
	
	events: {
		'click .addBookmark': 'addBookmark',
		'submit .bookmarkAddForm': 'saveBookmark',
		'click .cancelEdit': 'cancelEdit'
	},
	
	initialize: function() {
		this.render();
	},
	
	render: function() {
		this.$el.html(this.template(this.model));
	},
	
	addBookmark: function(e){
		$('.bookmarkAddForm').show();
		$('.addBookmark').hide();
	},
	
	saveBookmark: function(e) {
		e.preventDefault();
		var title = this.$('.bookmarkTitle').val();
		var url = this.$('.bookmarkUrl').val();
		this.collection.create({
			title: title,
			url: url
		});
		this.$('.bookmarkAddForm').hide();
		$('.addBookmark').show();
	},
	
	cancelEdit: function(e) {
		e.preventDefault();
		this.$('.bookmarkAddForm').hide();
		$('.addBookmark').show();
	}
	
});