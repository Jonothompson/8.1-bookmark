import BookmarkListView from './views/bookmarkListView';
import {BookmarkItemCollection} from './models/bookmarkItemCollection'; 
import './ajax-config';

 (function(){
   'use strict';
 
   $(document).ready(function(){
     var bookmarks = new BookmarkItemCollection();
     
     bookmarks.fetch().then(function(collection){
      var bookmarkCollection = collection.results;
      var listView = new BookmarkListView({collection: bookmarkCollection});
      
      $('body').prepend(listView.el);
     });
     
     $.ajax('https://api.parse.com/1/classes/Bookmarks').then(function(response) {
       console.log(response);
     });

      
 

   });
 })();