$('img').bind('contextmenu', function(e) {
    return false;
}); 

document.getElementById('img').ondragstart = function() { return false; };