$(document).ready(function () {
    let widthScreen = $(window).width();
    let heightScreen = $(window).height();
    let ballHeight = $('.ball').height()+10;
    let ballWidth = $('.ball').width()+10;


    setInterval(randomPosition, 1000, widthScreen, heightScreen);
    setInterval(randomColor, 500, 0, 255);

    function randomPosition(widthScreen, heightScreen) {
        let top, left;
        top = Math.floor(Math.random() * heightScreen - ballHeight);
        left = Math.floor(Math.random() * widthScreen - ballWidth);
        $(".ball").animate({
            top: `${top}px`,
            left: `${left}px`
        },1000)
    }

    function randomColor(min, max) {
        let r, g, b, a, rBorder, gBorder, bBorder;
        r = Math.floor(min + Math.random() * (max-min));
        g = Math.floor(min + Math.random() * (max-min));
        b = Math.floor(min + Math.random() * (max-min));
        a = Math.random() * 100;
        rBorder = Math.floor(min + Math.random() * (max-min));
        gBorder = Math.floor(min + Math.random() * (max-min));
        bBorder = Math.floor(min + Math.random() * (max-min));

        $('.ball').css({
            backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
            boxShadow: `10px 5px 20px rgba(${r}, ${g}, ${b}, ${a})`,
            border: `3px solid rgb(${rBorder}, ${gBorder}, ${bBorder})`
        })
    }

})