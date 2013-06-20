// Adjust mobile viewport meta tag for larger devices
// This has to come directly after the meta viewport is declared in the html <head> or the 
// dimensions will not be correct for mobile devices

// setTimeout is needed for a bug in Android 2.2 and 2.3 where the
// screen width is not returning the correct value in some cases
setTimeout(function() {
    var viewport = {
        width  : $(window).width(),
        height : $(window).height()
    };

    // Reset the viewport to defaults for devices larger than 640px, like iPad and other tablets
    if (viewport.width > 640) {
        $('meta[name=viewport]').attr(
            'content',
            'width=980, user-scalable=yes'
        );
    }
},200);
