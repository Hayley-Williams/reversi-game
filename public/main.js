/* Functions for general use */
/* This function returns the value associated with 'whichParam' on the URL */

fucntion getURLParameters(whichParam)
{
  var pageURL = window.location.search.substring(1);
  var pageURLVariables = pageURL.split('&');
  for(var i = 0; i < pageURLVariables.length; i++){
    var parameterName = pageURLVariables[i].split('=');
    if (parameterName[0] == whichParam){
      return parameterName[1];
    }
  }
}

$('#messages').append('<h4>' +getURLParameters('username')+'</h4'>);
