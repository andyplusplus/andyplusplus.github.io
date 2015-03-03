$(document).ready(function () {
    //Show default rotator group
    showRotatorByIndex(0);

    //Speed of the slideshow   
    var speed = $(".rotator-interval").text();

    //You have to specify width and height in #slider CSS properties   
    //After that, the following script will set the width and height accordingly   
    $('#mask-gallery, #gallery li').width($('#slider').width());
    $('#gallery').width($('#slider').width() * $('#gallery li').length);
    $('#mask-gallery, #gallery li, #mask-excerpt, #excerpt li').height($('#slider').height());

    //Assign a timer, so it will run periodically   
    var run = setInterval('newsslider(0)', speed);

    $('#gallery li:first, #excerpt li:first, #links a:first, #rotator-links a:first, #controls a#play:first').addClass('selected');

    //For link/number buttons   
    $('#links a').click(
        function () {
            //stop the slide show   
            clearInterval(run);

            var current_link = $('#links a.selected').length ? $('#links a.selected') : $('#links a:first');
            current_link.removeClass('selected');

            $(this).addClass('selected');

            //go to the item   
            goto("." + $(this).attr('rel'));

            //resume the slideshow - POSSIBLE PROBLEM HERE
            run = setInterval('newsslider(0)', speed);

            return false;
        }
    );

    //For link/rotator buttons - GWPV2
    $('#rotator-links a').click(
        function () {
            //stop the slide show   
            clearInterval(run);

            var current_link = $('#rotator-links a.selected').length ? $('#rotator-links a.selected') : $('#rotator-links a:first');
            current_link.removeClass('selected');

            $(this).addClass('selected');

            //go to the item   
            goto("." + $(this).attr('rel'));

            //resume the slideshow - POSSIBLE PROBLEM HERE
            run = setInterval('newsslider(0)', speed);

            return false;
        }
    );

    //Mouse over, pause it, on mouse out, resume the slider show   
    $('#mask-gallery').hover(

    //stop the slide show   
        function () {
            clearInterval(run);
        },

    //resume the slideshow - POSSIBLE PROBLEM HERE
        function () {
            run = setInterval('newsslider(0)', speed);
        }
    );

});   
  
  
function newsslider(prev) {   
  
    //Get the current selected item (with selected class), if none was found, get the first item   
    var current_image = $('#gallery li.selected').length ? $('#gallery li.selected') : $('#gallery li:first');   
    var current_excerpt = $('#excerpt li.selected').length ? $('#excerpt li.selected') : $('#excerpt li:first');
    var current_link = $('#links a.selected').length ? $('#links a.selected') : $('#links a:first');
    //Update for GWPV2 branding rotator
    var current_rotator_link = $('#rotator-links a.selected').length ? $('#rotator-links a.selected') : $('#rotator-links a:first');
  
    //if prev is set to 1 (previous item)   
    if (prev) {   
           
        //Get previous sibling   
        var next_image = (current_image.prev().length) ? current_image.prev() : $('#gallery li:last');
        var next_excerpt = (current_excerpt.prev().length) ? current_excerpt.prev() : $('#excerpt li:last');
        var next_link = (current_link.prev().length) ? current_link.prev() : $('#links a:last');
        //Update for GWPV2 branding rotator
        var next_rotator_link = (current_rotator_link.prev().length) ? current_rotator_link.prev() : $('#rotator-links a:last');   
       
    //if prev is set to 0 (next item)   
    } else {   
           
        //Get next sibling   
        var next_image = (current_image.next().length) ? current_image.next() : $('#gallery li:first');   
        var next_excerpt = (current_excerpt.next().length) ? current_excerpt.next() : $('#excerpt li:first');
        var next_link = (current_link.next().length) ? current_link.next() : $('#links a:first');
        //Update for GWPV2 branding rotator
        var next_rotator_link = (current_rotator_link.next().length) ? current_rotator_link.next() : $('#rotator-links a:first');
    }   
  
    //clear the selected class   
    $('#excerpt li, #gallery li').removeClass('selected');   
       
    //reassign the selected class to current items   
    next_image.addClass('selected');
    next_excerpt.addClass('selected');

    current_link.removeClass('selected');
    next_link.addClass('selected');
    //Update for GWPV2 branding rotator
    current_rotator_link.removeClass('selected');
    next_rotator_link.addClass('selected');
  
    //Scroll the items   
    $('#mask-gallery').scrollTo(next_image, 800);          
    $('#mask-excerpt').scrollTo(next_excerpt, 800);
}

function showRotator(link) {
    var groupLinks = $(link).parent().children('a');
    var index = jQuery.inArray(link, groupLinks);

    groupLinks.each(function () {
        $(this).removeClass('selected');
    });

    showRotatorByIndex(index);
}

function showRotatorByIndex(index) {
    var groupLinks = $('#slider-groups a');
    var sliders = $('.slider-container');

    sliders.each(function () {
        $(this).hide();
    });

    $(groupLinks[index]).addClass('selected');
    $(sliders[index]).show();
}


//Add this function after newslider function   
function goto(item) {   
    $('#mask-gallery').scrollTo(item, 800);        
    $('#mask-excerpt').scrollTo(item, 800);
}
