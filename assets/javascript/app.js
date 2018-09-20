// Initial array of gifs
var gifs = ["Bruce Lee", "Chuck Norris", "Li Lianjie", "Wesley Snipes"];

// displayGiphyInfo function re-renders the HTML to display the appropriate content
function displayGiphyInfo() {

  var giphy = $(this).attr("data-name");
  var genre = "+Karate";
  var action1 ="kick";
  var action2 ="punch";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + genre+/*"AND" + genre + "AND" + action1+"AND"+action2+*/ "&api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M";

  queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WcTKDkD6i55rjVcA6LUFToruFyIIGJ9M&q=Li+Lianjie+karate+kungfu&limit=10"
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

    //Make a div to store the fighter image
    var $fighterDiv = $('<div>');
    $fighterDiv.addClass('data-inline');

    //Make a paragraph to store the rating of the image
    var $p = $('<p>');
    /*$p.addClass('d-inline');*/

    //Set the inner text of the paragraph to the rating of the image in results[i]
    var rating = results[i].rating;
    $p.text(rating);

    //Make an image tag with jQuery and store it in a variable named fighterImage.
    var $fighterImage = $('<img>');

    //Set the image's src to results[i]'s fixed_height.url.
    $fighterImage.attr('src', results[i].images.fixed_height_small.url);
    /*$fighterImage.addClass('image-display');*/
    $fighterImage.addClass('img-fluid');

    //Append the p variable to the fighterDiv var
    $fighterDiv.append($p);

    //Append the animalImage variable to the animalDiv variable.
    $fighterDiv.append($fighterImage);

    //Prepend the fighterDiv variable to the element with an id of gifs-appear-here.
    $('#gifs-appear-here').prepend($fighterDiv);
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
 // Adding click event listeners to all elements with a class of "giphy"
 $(document).on("click", ".gif", displayGiphyInfo);

 // Calling the renderButtons function to display the intial buttons
 renderButtons();