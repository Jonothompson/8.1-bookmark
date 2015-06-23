import BookmarkListView from './views/bookmarkListView';
import AddBookmarkItemView from './views/addBookmarkItem';
import {BookmarkItemCollection} from './models/bookmarkItemCollection'; 
import './ajax-config';

 (function(){
   'use strict';
 
   $(document).ready(function(){
     var bookmarks = new BookmarkItemCollection(); 
     bookmarks.fetch().then(function(collection){
      var listView = new BookmarkListView({collection: bookmarks});
      var addItemView = new AddBookmarkItemView({collection: bookmarks});
      $('.appContainer').html(listView.el);
      $('.addItem').html(addItemView.el);
     });
   });
 })();