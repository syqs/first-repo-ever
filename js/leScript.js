// short intro... this text almost contains more comments than code this is soley for my own practice and understanding, ur welcome to learn from it too tho.

// function to connect to hipsterjesus and request some data then
// assign that data to the object mySonJ at key 'option4'

function getIpsum() {
    $.getJSON('http://hipsterjesus.com/api/', function(data) {
          mySonJ.option4 = data.text;
    });
};

//Invoke the function
getIpsum();

// Function sets title for the page by going through an if else loop that adds html code to the title class elements
// it chooses what to add based on the current value of the 'active link' key-value pair from the mySonJ object

function setTitle(objectKey){
    if (mySonJ['active link']==='who'){
      $('.title').html('<h1>Hipster Ipsum<\/h1>\n<h3>try clicking on the \'firstWord()\' function</h3>');
    }else if(mySonJ['active link']==='home'){
      $('.title').html('<h1>Questions for classmates<\/h1>');
    }else if(mySonJ['active link']==='what'){
      $('.title').html('<h1>References<\/h1>');
    }else if(mySonJ['active link']==='whom'){
      $('.title').html('<h1>Hipster Ipsum<\/h1>\n<h3 class=\'red\'>Click \'the Who\' link to generate new hipster ipsum</h3>');
    }else{};
};

// next 3 functions do the setting and executing part
function home (){

  // when home function is invoked first set object's key 'active link' to have the value of 'home'
  // this is done in order to keep track of the selectet link in the main menu with Javascript
  mySonJ['active link'] = "home";

  //Invoke the setTitle function to set the html data based on the current value of the key 'active link'
  setTitle();

  //Call upont the powers of jQuery to add html data form the mySonJ object to the page element with class '.page'
  $('.page').html(mySonJ.form);

  // Invoke the expand function in this exectution context (expands the textarea of the html elements in height via jQuery)
  expand();
};

// same as home
function what (){
  mySonJ['active link'] = "what";
  setTitle();
  $('.page').html(mySonJ.what);
};

function what2 (){
  mySonJ['active link'] = "whom";
  setTitle();
  $('.page').html(mySonJ.whom);
};

// function generates two different results based on navigation context user is curently in stored and retrived from mySonJ object
function who(){
  if (mySonJ.option1 == 1) {
    mySonJ['active link'] = "who";
    setTitle();
    mySonJ.option1 = 2;
  }else if(mySonJ.option1==2){
    mySonJ['active link'] = "whom";
    setTitle();
    mySonJ.option1 = 1;
  }
  // load some text from object in case u are not getting a response from the next invocation of getIpsum
  $('.page').html(mySonJ.option3);
  // call upon the hipster ipsum api and store the result in the object
  getIpsum();
  // set html of all the DOM elements with '.page' class attribute
  $('.page').html(mySonJ.option4);
};


function expand(){
  //Expand the input textarea by clicking on it using jquery 'focus' function and passing a new function as a parametar for 'focus'
  $('input').focus(function()
    {
      // jquery function that animates the DOM element by passing an object with css values asigned to key value pairs
      // and a parametar 'slow' that sets the time of the animation exectution
       $(this).animate({'height': '100px'}, 'slow' );
       return false;
     });
};

// function to output values from internal exectution stacks in the global exectution stack
function logOutput(a) {
    console.log(a);
};

// Function that encapsulates first word of the any link on the page
// in a span element using jQuery (also adds a first-word class to that element)
function firstWord(selector, size) {

// Depending on the parametar passed to the function it will set all of the specified elemtens ie. <a><p><li> ..
// to have the first word replaced using jquery's replace function and passing it a value
  if (size == "small") {
  $(selector).each(function(){

    // create a jquery object and store it in the variable word
      var word = $(this);

      // use two functions with 'word' object. First call the function 'html' to add html to the elemnt,
      // pass it the 'replace' function as the parametar to the 'text' function and then call function 'html' with result as a parametar
      // $1 returns the copy of first word that is being replaced while nesting the word  in a <span> element

      //more on how this can be done checkout out this jquery plugin http://benalman.com/code/projects/jquery-replacetext/examples/replacetext/
      word.html( word.text().replace(/(^\w+)/,'<span class=\"first-word small\">$1</span>') );

    });

    // same concept different class being appended to the html element
  }else if (size == "big") {
    $(selector).each(function(){
        var word = $(this);
        // logOutput(word);
        word.html( word.text().replace(/(^\w+)/,'<span class=\"first-word big\">$1</span>') );
      });

    // if we are curently on 'about page*(the Who)' call what2() otherwise do nothing
    if (mySonJ['active link'] == 'who'){ what2();}else{};
  }
};

// invoke some functions
firstWord("a", 'small');
firstWord("p", 'big');
home();
