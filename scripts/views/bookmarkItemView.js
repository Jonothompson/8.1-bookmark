export default Backbone.View.extend({
  template: JST.index,

  tagName: 'li',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});