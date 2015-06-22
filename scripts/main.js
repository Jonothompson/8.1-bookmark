import BookmarkListView from './views/bookmarkListView';
import './ajax-config';

 (function(){
   'use strict';
 
   $(document).ready(function(){
     var bookmarks = new Backbone.Collection([
       {title: "Google", url: "http://google.com"},
       {title: "Twitter", url: "http://twitter.com"},
       {title: "Cool", url: "http://cool.com"},
     ]);
     
     $.ajax('https://api.parse.com/1/classes/Bookmarks').then(function(response) {
       console.log(response);
     });
 
    var listView = new BookmarkListView({collection: bookmarks});
    $('body').prepend(listView.el);
   });
 })();