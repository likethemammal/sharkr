//sharkr.js (Hide/Show user's themes)

javascript: (function(){
    if (window.location.host === "grooveshark.com") {
        $('#page').animate({opacity: 'toggle'}, 500);
    } else {
        alert('Yo, go to Grooveshark!');
    }
}());