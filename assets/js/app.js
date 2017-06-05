jQuery(function($) {

    // Variables//////////////////////////////////////////////////
    var $slider = $('.slides');
    var $slide = 'img';
    var $transition_time = 700;
    var $time_between_slides = 4000;
    var $bullets = $('.nav-bullets');
    var $bullet = 'a';

    function slides() {
        return $slider.find($slide);
    }

    function selectB() {
        return $bullets.find($bullet);
    }

    //Auto animation//////////////////////////////////////////////
    slides().fadeOut();

    slides().first().addClass('active');
    slides().first().fadeIn($transition_time);

    // selectB().removeClass('filled');

    selectB().first().addClass('filled');
    selectB().first().fadeIn($transition_time);

    $interval = setInterval(
        function() {

            var $i = $slider.find($slide + '.active').index();
            var $j = $bullets.find($bullet + '.filled').index();

            slides().eq($i).removeClass('active');
            slides().eq($i).fadeOut($transition_time);
            selectB().eq($j).removeClass('filled');

            if (slides().length == $i + 1) $i = -1; // To first image
            if (selectB().length == $j + 1) $j = -1; // To first bullet

            slides().eq($i + 1).fadeIn($transition_time);
            slides().eq($i + 1).addClass('active');
            selectB().eq($j + 1).addClass('filled');
        }, $transition_time + $time_between_slides
    );

    //Next button/////////////////////////////////////////////////
    $("#next").on('click', function(e) {
        e.preventDefault();

        var $i = $slider.find($slide + '.active').index();
        var $j = $bullets.find($bullet + '.filled').index();

        slides().eq($i).removeClass('active');
        slides().eq($i).fadeOut($transition_time);
        selectB().eq($j).removeClass('filled');

        if (slides().length == $i + 1) $i = -1; // To first image
        if (selectB().length == $j + 1) $j = -1; // To first bullet

        slides().eq($i + 1).fadeIn($transition_time);
        slides().eq($i + 1).addClass('active');
        selectB().eq($j + 1).addClass('filled');
    });

    //Previous button/////////////////////////////////////////////
    $("#prev").on('click', function(e) {
        e.preventDefault();

        var $i = $slider.find($slide + '.active').index();
        var $j = $bullets.find($bullet + '.filled').index();

        slides().eq($i).removeClass('active');
        slides().eq($i).fadeOut($transition_time);
        selectB().eq($j).removeClass('filled');

        if (slides().length == $i) $i = -1; // To first image
        if (selectB().length == $j) $j = -1; // To first bullet

        slides().eq($i - 1).fadeIn($transition_time);
        slides().eq($i - 1).addClass('active');
        selectB().eq($j - 1).addClass('filled');
    });

    $(".bullets").on('click', function(e) {
        e.preventDefault();

    });
});