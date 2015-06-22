/*
  If the url is to Parse, add the Parse headers
*/
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'mk7D6oZerw19NDRVBeTOgsFEWVtKpPVF1pDkso2H';
    options.headers['X-Parse-REST-API-Key'] = 'xad119h94E6MH7rRoXcBkoO0d7RaXZ4pKxIR3xvx';
  }
});