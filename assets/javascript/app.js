// Initial array of movies
var gifs = ["Bruce Lee", "Chuck Norris", "Jet Lee", "Wesley Snipes"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayGiphyInfo() {

  var giphy = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + giphy + "&y=&plot=short&apikey=trilogy";

  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    /*Options to look for AJAX Response*/
   /*Option1: Log response*/
    console.log(response);
  /*Option2: Log queryURL*/
    console.log(queryURL);
  
    $('#giphy-view').text(JSON.stringify(response));
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

//Event hander that adds new gifs to the array and call renderButtons to re render all buttons
$('#add-giphy').on('click', function(event){
    event.preventDefault();

    //Grab the input from the textbox
    var $gif = $('#giphy-input').val().trim();

    //Push the new gif onto the array
    gifs.push($gif);

    //Rerender Buttons
    renderButtons();
});
 // Adding click event listeners to all elements with a class of "giphy"
 $(document).on("click", ".gif", displayGiphyInfo);

 // Calling the renderButtons function to display the intial buttons
 renderButtons();