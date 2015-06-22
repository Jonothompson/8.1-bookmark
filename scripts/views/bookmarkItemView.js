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
    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model));
  },
  
  editBookmark: function(e) {
    console.log(this.model.toJSON());
  },
  
  saveBookmark: function(e) {
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    this.model.set({
      title: title,
      url: url
    });
  },
  
  cancelEditBookmark: function(e) {
    e.preventDefault();
    console.log('cancel', this.model);
  }
  
});