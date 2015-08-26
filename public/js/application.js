$(document).ready(function() {

  createBunnyListener();


});


var createBunnyListener = function(){

  $("#newBunny").on("submit", function(event){
    event.preventDefault();
    // console.log('YOU GOT ME!!!!')
    debugger
    var url = $(this).attr('action');
    var method = "post";
    var data = $(this).serialize();
    var dataType = "json";

    var request = $.ajax({
      url: url,
      method: method,
      data: data,
      dataType: dataType
    })

    request.done(function(response){
      console.log("Success");
      console.log(response);
      // Do this if the ajax call succeeds
      $('#bunnyIndex').append("<span><h2>" +response.name + "</h2></span>")
    });

    request.fail(function(response){
      console.log("Fail");
      console.log(response);
      // Do this if the ajax call fails
    });

  });
}
  



































function prependBunny(jsonBunny){
  var bunnyDiv = '<div class="bunnyWrap fl ml15 minh200"><h2>'
                 + jsonBunny.name + '</h2><p>Cuteness: '
                 + jsonBunny.cuteness + '</p><img class="w100" src="'
                 + jsonBunny.url + '" /><br /><a class="bunnyProfile" href="/bunnies/'
                 + jsonBunny.id + '" >Profile</a><a href="/bunnies/'
                 + jsonBunny.id + '/edit" >Edit Bunnie</a><a href="/bunnies/'
                 + jsonBunny.id + '/delete" >Kill Bunnie</a></div>'
  // debugger
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



