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

$('form#newBunny').on('submit', function(event){
  event.preventDefault();

  var url = $(this).attr('action')
  var method = 'post'
  var data = $(this).serialize();

  var request = $.ajax({
    url:       url,
    method:    method,
    data:      data,
    dataType: 'json'
  });

  request.done(function(responseData){
    prependBunny(responseData);
  });

});


$('a.bunnyProfile').on('click', function(event){
  event.preventDefault();

  var bunny_method = "get"
  var bunny_url    = $(this).attr('href')

  var request = $.ajax({
    url:     bunny_url,
    method:  bunny_method
  });

  request.done(function(responseData){
    debugger
    $('#bunnyIndex').html(responseData);
  });

  request.fail(function(responseData){
    console.log('Harvey, why? why?')
    console.log(responseData)
  })

});

















//toggle for new bunny form
$('a#newBunnyLink').on("click", function(event){
  event.preventDefault();
  toggleNewBunny();
});

function toggleNewBunny(){
  $('a#newBunnyLink').toggle();
  $('div#newBunnyForm').toggle();
}