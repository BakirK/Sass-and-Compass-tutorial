// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(window).on('load', function () {
    this.console.log("bababa");
    $('.gallery').masonry({
        itemSelector: '.gcontainer',
        gutter: 15,
        columnWidth: 230
    });
});