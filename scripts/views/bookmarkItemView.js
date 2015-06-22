export default Backbone.View.extend({
  template: JST.index,

  tagName: 'li',
  
  events: {
    'click .bookmark-edit': 'editBookmark'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },
  
  editBookmark: function(e) {
    console.log('hello');
  }
  
});