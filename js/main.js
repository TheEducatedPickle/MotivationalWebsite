//var file = require('../fetchReddit/quotes.json')

$(document).ready(function() {
    //readTextFile('../fetchReddit/quotes.json')

    var quotes = file.quotes;
    var authors = file.authors;
        
    console.log("Ready! :D")

    $(function(){
        $("#quoteButton").click(function() {
            quoteNum = Math.random();
            $('#quote').html(quotes[0]);
            $('#author').html(authors[0]);
            console.log(quoteNum);
        });
    });
});