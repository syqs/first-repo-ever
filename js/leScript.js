var mySonJ = {
  'option1' : undefined  ,
  'option1' :  '2',
  'option3' : "waiting for JSON... it doesent seem to be arriving at this location for reasons we may never truly understand"

}
$.getJSON('http://hipsterjesus.com/api/', function(data) {
      /* page-test is the class of the html element that gets populated with JSON data */
      mySonJ.option4 = data.text;
  });


function abouts(){
  $('.page').html(mySonJ.option3);
  /* hipster version of lorem ipsum text generator with api for dynamic embeding */
  $.getJSON('http://hipsterjesus.com/api/', function(data) {
        /* page-test is the class of the html element that gets populated with JSON data */
        mySonJ.option4 = data.text;
    });
    $('.page').html(mySonJ.option4);
};


// Function that encapsulates first word of the any link on the page
// with a span element using jQuery (also adds a first-word class to the element)
$('p').each(function(){
    var word = $(this);
    word.html( word.text().replace(/(^\w+)/,'<span class=\"first-word\">$1</span>') );
  });


//Expand the textarea by clicking on it
$('input').focus(function()
  {
     $(this).animate({'height': '100px'}, 'slow' );
     return false;
   });
