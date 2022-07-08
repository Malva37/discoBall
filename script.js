$(document).ready(function () {
    let widthScreen = $(window).width();
    let heightScreen = $(window).height();
    let ballHeight = $('.ball').height()+10;
    let ballWidth = $('.ball').width()+10;


    setInterval(randomColorPosition, 1000);

    function randomColorPosition() {
        randomPosition(widthScreen, heightScreen);
        randomColor(0, 255);
    }

    function randomPosition(widthScreen, heightScreen) {
        let top, left;
    console.log(heightScreen, 'heightScreen');
    console.log(widthScreen,'widthScreen');
console.log(ballHeight);
console.log(ballWidth);
        top = Math.floor(Math.random() * heightScreen - ballHeight);
        left = Math.floor(Math.random() * widthScreen - ballWidth);
        $('.ball').css({
            top: `${top}px`,
            left: `${left}px`
        })
        console.log(top);
        console.log(left);
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