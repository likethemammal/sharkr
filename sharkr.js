//sharkr.js (Hide/Show user's themes)

javascript: (function(){
    if (window.location.host === "grooveshark.com") {
        if ($('#page').css('opacity') === "1") {
            $('#page').animate({
                opacity: 0
            }, 500);
        } else {
            $('#page').animate({
                opacity: 1
            }, 500);
        }
    } else {
        alert('Yo, go to Grooveshark!');
    }
}());