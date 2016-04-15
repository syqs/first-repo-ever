var mySonJ = {
  'option1' : undefined  ,
  'option1' :  '2'
}

// Function that encapsulates first word of the any link on the page
// with a span element using jQuery (also adds a first-word class to the element)
$('a').each(function(){
    var word = $(this);
    word.html( word.text().replace(/(^\w+)/,'<span class=\"first-word\">$1</span>') );
  });

/* hipster version of lorem ipsum text generator with api for dynamic embeding */
$.getJSON('http://hipsterjesus.com/api/', function(data) {
              $('.page-test').html( data.text );
          });

//Expand the textarea on clicking on it
$('#shortBio').focus(function()
              {
                 $(this).animate({'height': '185px'}, 'slow' );
                 return false;
               });
