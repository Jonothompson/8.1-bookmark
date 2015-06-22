import BookmarkListView from './views/bookmarkListView';
import {BookmarkItemCollection} from './models/bookmarkItemCollection'; 
import './ajax-config';

 (function(){
   'use strict';
 
   $(document).ready(function(){
     var bookmarks = new BookmarkItemCollection();
     
     bookmarks.fetch().then(function(collection){
      var listView = new BookmarkListView({collection: bookmarks});
      
      $('body').prepend(listView.el);
     });


      
 

   });
 })();