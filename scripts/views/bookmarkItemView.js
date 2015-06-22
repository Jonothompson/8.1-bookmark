export default Backbone.View.extend({
  template: JST.index,

  tagName: 'li',
  
  events: {
    'click .bookmark-edit-button': 'editBookmark',
    'click .bookmark-delete-button': 'deleteBookmark',
    'submit .bookmark-edit-form': 'saveBookmark',
    'reset .bookmark-edit-form': 'cancelEdit'
  },

  initialize: function(){
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },
  
  editBookmark: function(e) {
    this.$('.bookmark-edit-form').show();
  },
  
  saveBookmark: function(e) {
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    this.model.save({
      title: title,
      url: url
    });
    this.$('.bookmark-edit-form').hide();
  },
  
  deleteBookmark: function(e) {
    this.model.destroy();
  },
  
  cancelEdit: function(e) {
    this.$('.bookmark-edit-form').hide();
  }
  
});