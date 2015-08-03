// Link Ajax call
//First we select the dom element/elements we want to bind to
//In this case the bunny's profile link
$('a.bunnyProfile').on('click', function(click_event){
//  ^select the links  ^bind to click  ^give it a function to run

  click_event.preventDefault();  //Super important step, otherwise the browser
                                 //will refresh the page

  var path = $(this).attr('href'); //the path is the route you are matching

  $.ajax({                         //we use JQuery's built-in ajax method
    url: path,
    method: 'GET'
  }).done(function(responseData){      //The .done event happens with the server
    $('article').html(responseData);   // returns a 200-300 status code
  }).fail(function(responseData){
    console.log('Failure: ' + responseData);   //the fail happens on a 400-500
  })                                           //status code
});

//form ajax no event delegation
$('form#newBunny').on("submit", function(submit_event){
  submit_event.preventDefault();

  var data = $(this).serialize();            //the serialize method encodes your
  var path = $(this).attr('action');         //form values for you so they arrive
  var route = $(this).attr('method');        //As params
  debugger
  $.ajax({
    url: path,
    method: route,
    data: data,
    dataType: 'json'
  }).done(function(responseData){
    debugger
    prependBunny(responseData);
  }).fail(function(responseData){
    console.log("Failure - " + responseData);
  })
})

function prependBunny(jsonBunny){
  var bunnyDiv = '<div class="bunnyWrap fl ml15 minh200"><h2>'
                 + jsonBunny.name + '</h2><p>Cuteness: '
                 + jsonBunny.cuteness + '</p><img class="w100" src="'
                 + jsonBunny.url + '" /><br /><a class="bunnyProfile" href="/bunnies/'
                 + jsonBunny.id + '" >Profile</a><a href="/bunnies/'
                 + jsonBunny.id + '/edit" >Edit Bunnie</a><a href="/bunnies/'
                 + jsonBunny.id + '/delete" >Kill Bunnie</a></div>'
  debugger
  $('#bunnyIndex').prepend(bunnyDiv);
}

//toggle for new bunny form
$('a#newBunnyLink').on("click", function(event){
  event.preventDefault();
  toggleNewBunny();
});

function toggleNewBunny(){
  $('a#newBunnyLink').toggle();
  $('div#newBunnyForm').toggle();
}

//form ajax code with event delegation
//event delegation allows us to bind to
//objects that aren't currently in the dom
// $('#selector').on("submit", 'form', function(submit_event){
//   submit_event.preventDefault();
//   var data = $(this).serialize();
//   var path = $(this).attr('action');
//   var route = $(this).attr('method');
//   var form = $(this);

//   $.ajax({
//     url: path,
//     method: route,
//     data: data
//   }).done(function(responseData){
//     $('article').html(responseData);
//   }).fail(function(responseData){
//     console.log("Failure - " + responseData);
//   })
// })

// // Link JS with event delegation
// $('#selector').on('click', "a.navigation", function(click_event){
//   click_event.preventDefault();

//   var path = $(this).attr('href');

//   $.ajax({
//     url: path,
//     method: 'GET'
//   }).done(function(responseData){
//     $('article').html(responseData);
//   }).fail(function(responseData){
//     console.log('Failure: ' + responseData);
//   })
// });
