$('a.bunnyProfile').on('click', function(event){
  event.preventDefault();

  var bunny_method = "get"
  var bunny_url    = $(this).attr('href')

  $.ajax({
    url:     bunny_url,
    method:  bunny_method
  });

});
















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