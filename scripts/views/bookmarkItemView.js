export default Backbone.View.extend({
  template: JST.index,

  tagName: 'li',
  
  events: {
    'click .bookmark-edit-button': 'editBookmark',
    'submit .bookmark-edit-form': 'saveBookmark',
    'reset .bookmark-edit-form': 'cancelEditBookmark'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },
  
  editBookmark: function(e) {
    console.log(this.model.toJSON());
  },
  
  saveBookmark: function(e) {
    e.preventDefault();
    console.log('save', this.model.toJSON());
  },
  
  cancelEditBookmark: function(e) {
    e.preventDefault();
    console.log('cancel', this.model.toJSON());
  }
  
});