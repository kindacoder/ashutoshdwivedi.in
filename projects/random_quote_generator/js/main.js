$(document).ready(function(data) {
    $.getJSON('https://talaikis.com/api/quotes/random', function(data) {
        var quote = data.quote;
        var authorName = data.author;
        var quoteCatagory = data.cat;
        $('blockquote p').html('<b>' + quote + '</b>');
        $('footer cite').text(authorName)

        $('footer span').text(quoteCatagory)

    })
    $('#btn').click(function() {
        location.reload();
    })

})