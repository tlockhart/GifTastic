// Initial array of gifs
var gifs = ["Bruce Lee", "Chuck Norris", "Li Lianjie", "Wesley Snipes"];

// displayGiphyInfo function re-renders the HTML to display the appropriate content
function displayGiphyInfo() {

  //console.log("Button Source = "+$(this).attr('src'));
  var giphy = $(this).attr("data-name").trim().replace(' ', '+AND+');
  console.log("NAME OF FIGHTER = "+giphy);
  /*var genre = "+Karate";
  var action1 ="kick";
  var action2 ="punch";*/
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&limit=10";

  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=Yun+And+Fat+And+Chow&limit=10";*/
  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=Donnie+AND+Yen&limit=10";*/
  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=Tony+AND+Jaa&limit=10";*/
  /*********************************Karate*********************************** */
  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=Jean+AND+claude&limit=10";*/
  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=karate+AND+Jean+AND+claude&limit=10";*/

  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=Jim+AND+Kelly&limit=10";*/
  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=karate+AND+Jim+AND+Kelly&limit=10";*/

  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=Jackie+AND+Chan&limit=10";*/
  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=karate+AND+Jackie+AND+Chan&limit=10";*/

  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=Bruce+AND+Lee&limit=10";*/
  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=karate+AND+Bruce+AND+Lee&limit=10";*/

  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=Jet+AND+Li&limit=10";*/
  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=karate+AND+Jet+AND+Li&limit=10";*/

  /*queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=Chuck+AND+Norris&limit=10";*/
 /* queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=karate+AND+Chuck+AND+Norris&limit=10";*/
  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    /*Step1: Query Giphy and return result in AJAX Response*/
   /*Option1: Log response*/
   console.log(giphy);
    console.log(response);
  /*Option2: Log queryURL*/
    console.log(queryURL);
  
  //Dump response information to screen
 // $('#gifs-appear-here').text(JSON.stringify(response));

   /*************************************
    * Step2:DISPLAY ALL IMAGES AND RATINGS
   **************************************/
  //Empty Image Div before adding new Images
  $('#gifs-appear-here').empty();

   var results = response.data;
   for(var i = 0; i < results.length; i++){

    var resultsTitle = results[i].title;
   // if(resultsTitle.length)
   var isTitleBlank = resultsTitle.replace(/\s/g,'') === '';
    console.log("Title = "+resultsTitle+" Title equals nothing: "+isTitleBlank);
    //Make a div to store the fighter image (Filter Images without title)
    if(!isTitleBlank){
      var $fighterDiv = $('<div>');
      /*$fighterDiv.addClass('data-inline');*/
  
      //Make a paragraph to store the rating of the image
      var $p = $('<p>');
      /*$p.addClass('d-inline');*/
  
      //Set the inner text of the paragraph to the rating of the image in results[i]
      var rating = results[i].rating;
      $p.text(rating);
  
      //Make an image tag with jQuery and store it in a variable named fighterImage.
      var $fighterImage = $('<img>');
  
      //Set the image's src to results[i]'s fixed_height.url.
      $fighterImage.attr('src', results[i].images.fixed_height_still.url);
      $fighterImage.attr('data-animate', results[i].images.fixed_height.url);
      $fighterImage.attr('data-still', results[i].images.fixed_height_still.url);
      $fighterImage.attr('data-state', 'still');
      $fighterImage.addClass('giphy');

      /*$fighterImage.addClass('image-display');*/
      $fighterImage.addClass('mx-4 mb-4');
  
      //Append the p variable to the fighterDiv var
      $fighterDiv.append($p);
  
      //Append the animalImage variable to the animalDiv variable.
      $fighterDiv.append($fighterImage);
  
      //Prepend the fighterDiv variable to the element with an id of gifs-appear-here.
      $('#gifs-appear-here').prepend($fighterDiv);
    }
   }


  });
}

//Display Giphy Data
function renderButtons(){
    //Delete the buttons-view div before adding new buttons
    $('#buttons-view').empty();

    //Loop through the array of gifs
    for(var i =0; i< gifs.length; i++){
        //Then dynamically generate buttons for each GIF in the array
        var $gifButton = $('<button>');

        //Adding a class of gif to the button
        $gifButton.addClass('gif');

        //Adding a data-attribute
        $gifButton.attr('data-name', gifs[i]);

        //Label the button with the gif name in the index
        $gifButton.text(gifs[i]);

        //Add the button to the buttons-view div
        $('#buttons-view').append($gifButton);

    }//for
}

//Event handler that adds new gifs to the array and call renderButtons to re render all buttons
$('#add-giphy').on('click', function(event){
    event.preventDefault();

    //Grab the input from the textbox
    var $gif = $('#giphy-input').val().trim();
    console.log("New Gif = "+$gif);

    //Push the new gif onto the array
    gifs.push($gif);

    //Rerender Buttons
    renderButtons();
});

 // Adding click event listeners to all elements with a class of "gif"
 $(document).on("click", ".gif", displayGiphyInfo);

 /******************************************
 * toggle Paused/UnPaused
 * ****************************************/
$(document).on("click", ".giphy", pauseToggle);

 // Calling the renderButtons function to display the intial buttons
 renderButtons();
 


function pauseToggle(){
  var $state = $(this).attr('data-state');
  //console.log("*IN Toggle State = "+$state);

  // =============================================

  // STEP THREE: Check if the variable state is equal to 'still',
  // then update the src attribute of this image to it's data-animate value,
  // and update the data-state attribute to 'animate'.
  function isDataStateStill(){
    var returnValue = false;
    if($state === 'still')
    {
      returnValue = true;
    }
    console.log("dataState is = "+'STILL');
    return returnValue;
  }
  var state = isDataStateStill();

  if (state){
    $(this).attr('src', $(this).attr('data-animate'));
    $(this).attr('data-state', 'animate');
  }

  // If state is equal to 'animate', then update the src attribute of this
  // image to it's data-still value and update the data-state attribute to 'still'
  // ============== FILL IN CODE HERE FOR STEP THREE =========================

  // CODE GOES HERE
  else if($state === 'animate'){
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', 'still');
  }
}