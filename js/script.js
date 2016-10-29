$(document).ready(function(){
  var testResult, testResultLength;

  $('#calBtn').click(function(){

    testResult = $('#textfield').val();
    $( "#result" ).append( "<strong>"  + testResult.length +"</strong>" );

  }); //.click


});
