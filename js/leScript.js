var mySonJ = {
  'active link' : 'home'  ,
  'option1' :  1,
  'option3' : "waiting for JSON... it doesent seem to be arriving at this location for reasons we may never truly understand",
  'description' : 'in my next key-value pair i will add a whole bunch of html that has been escaped for JavaScript code by a free online tool',
  'form' : '           <form action=\"https:\/\/formspree.io\/kristian.magda@gmail.com\" method=\"POST\" target=\"_blank\">\r\n          <div class=\"form-group\">\r\n            <label for=\"Email1\">Email address<\/label>\r\n            <input type=\"email\" name=\"email\"class=\"form-control\" id=\"Email1\" placeholder=\"Email\"  >\r\n          <\/div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name *<\/label>\r\n            <input type=\"name\" name=\"fullName\" class=\"form-control\" id=\"name1\" placeholder=\"Name\" required=\"required\"  >\r\n          <\/div>\r\n          <div class=\"form-group\">\r\n            <label for=\"gits\">Github link<\/label>\r\n            <input type=\"name\" name=\"github\" class=\"form-control\" id=\"name1\" placeholder=\"github.com/myGithub\"  >\r\n          <\/div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">A short bio about you *<\/label>\r\n            <input type=\"textarea\" name=\"shortBios\"class=\"form-control big\" id=\"shortBio\" required=\"required\" >\r\n          <\/div>\r\n          <div class=\"form-group\">\r\n            <label for=\"backgrounds\">Your programing background<\/label>\r\n            <input type=\"textarea\" name=\"backs\" class=\"form-control big\" id=\"backgrounds\">\r\n\r\n            <!--the formspree service spam fightbot -->\r\n            <input type=\"text\" name=\"_gotcha\" style=\"display:none\" \/>\r\n          <\/div>\r\n          <div class=\"form-group\">\r\n            <label for=\"reasons1\">What is the prize you seek?<\/label>\r\n            <input type=\"textarea\" name=\"reason\"  class=\"form-control big\" id=\"reasons1\">\r\n          <\/div>\r\n          <div class=\"form-group\">\r\n            <label for=\"goals\">Goals and aspirations * <\/label>\r\n            <input type=\"textarea\" name=\"goal\" class=\"form-control big\" id=\"goals\" required=\"required\" >\r\n          <\/div>\r\n          <div class=\"form-group\">\r\n            <label for=\"hobbies\">What do you do when you are not doing the things you do?<\/label>\r\n            <input type=\"textarea\" name=\"hobbie\"class=\"form-control big\" id=\"hobbies\">\r\n          <\/div>\r\n          <div class=\"form-group\">\r\n            <label for=\"favs\">Your web inspirations and fav-bookmarks<\/label>\r\n            <input type=\"textarea\" name=\"fav\"class=\"form-control big\" id=\"favs\">\r\n          <\/div>\r\n          <div class=\"checkbox\">\r\n            <label for=\"checks\">Check me if thy dare<\/label>\r\n              <input type=\"checkbox\" name\"checkboxer\" id=\"checks\">\r\n          <\/div>\r\n          <button type=\"submit\" class=\"btn btn-default\">Submit<\/button>\r\n        <\/form>',
  'what' : '        <p>The font \'Kaushan Script\' used with google font api<\/p>\r\n        <a href=\"https:\/\/www.google.com\/fonts\" target=\"_blank\">https:\/\/fonts.googleapis.com\/css?family=Kaushan+Script\'<\/a>\r\n        <p>jQuery and Bootstrap have been loaded<\/p>\r\n        <a href=\"http:\/\/getbootstrap.com\/\" target=\"_blank\">Bootstrap<\/a>\r\n        <p>Couple of examples of Javascript functions<\/p>\r\n        <p>Content loaded from api stored in JS object<\/p>'
}
$.getJSON('http://hipsterjesus.com/api/', function(data) {
      /* page-test is the class of the html element that gets populated with JSON data */
      mySonJ.option4 = data.text;
  });


function setTitle(title){
  if (mySonJ['active link']==='who'){
    $('.title').html('<h1>Hipster Ipsum<\/h1>\n<h3>try clicking on the \'firstWord()\' function</h3>');
  }else if(mySonJ['active link']=='home'){
      $('.title').html('<h1>Questions for classmates<\/h1>');
  }else if(mySonJ['active link']=='what'){
      $('.title').html('<h1>References<\/h1>');
  }else if(mySonJ['active link']=='whom'){
      $('.title').html('<h1>Hipster Ipsum<\/h1>\n<h3 class=\'red\'>Click \'the Who\' link to generate new hipster ipsum</h3>');
  }else{};
};
function home (){
  mySonJ['active link'] = "home";
  setTitle('home');
  $('.page').html(mySonJ.form);
  expand();
};
function what (){
  mySonJ['active link'] = "what";
  setTitle('what');
  $('.page').html(mySonJ.what);
};
function what2 (){
  mySonJ['active link'] = "whom";
  setTitle('whom');
  $('.page').html(mySonJ.whom);
  $( ".Red" ).fadeIn( "slow" );
  return false;
};
function abouts(n){
  if (n == 1) {
    mySonJ['active link'] = "who";
    setTitle('who');
    mySonJ.option1 = 2;
  }else if(n==2){
    setTitle('whom');
  }
  $('.page').html(mySonJ.option3);
  /* hipster version of lorem ipsum text generator with api for dynamic embeding */
  $.getJSON('http://hipsterjesus.com/api/', function(data) {
        /* page-test is the class of the html element that gets populated with JSON data */
        mySonJ.option4 = data.text;
    });
    $('.page').html(mySonJ.option4);
};


function expand(){
  //Expand the textarea by clicking on it
  $('input').focus(function()
    {
       $(this).animate({'height': '100px'}, 'slow' );
       return false;
     });
};

// Function that encapsulates first word of the any link on the page
// with a span element using jQuery (also adds a first-word class to the element)
function firstWord(selector, size) {

  if (size == "small") {
  $(selector).each(function(){
      var word = $(this);
      word.html( word.text().replace(/(^\w+)/,'<span class=\"first-word small\">$1</span>') );
    });
  }else if (size == "big") {
    $(selector).each(function(){
        var word = $(this);
        word.html( word.text().replace(/(^\w+)/,'<span class=\"first-word big\">$1</span>') );
      });
    what2();
  }
};

firstWord("a", 'small');
firstWord("p", 'big');
home();
