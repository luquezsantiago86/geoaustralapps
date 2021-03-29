function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$('#devBtn').on('click', function(e) {
    e.preventDefault();
    $('#devModal').modal('show').find('.modal-content').load($(this).attr('href'));

});

$('#devContact').on('click', function(e) {
    e.preventDefault();
    $('#devContact').find('.modal-content').load($(this).attr('href'));

});

$('#gprTrackerBtn').on('click', function(e) {
    e.preventDefault();
    $('#devModal').modal('show').find('.modal-content').load($(this).attr('href'));

});

$('#tomographyBtn').on('click', function(e) {
    e.preventDefault();
    $('#devModal').modal('show').find('.modal-content').load($(this).attr('href'));

});