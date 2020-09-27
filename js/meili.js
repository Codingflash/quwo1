$(function () {
    // 侧边导航栏
    $(".ce-list").hover(function () {
        // over
        $(this).css("background", "#cec19f");
        $("ce-list-img1").css("display", "none");
        $("ce-list-img2").css("display", "block");
        
    }, function () {
        // out
        $(this).css("background", "#191919");
        $("ce-list-img1").css("display", "block");
        $("ce-list-img2").css("display", "none");
    }
    );

    $(".menu a").hover(function () {
        // over
        $(this).css({
            "color": "white",
            "background": "url('http://quwolvyou.com/templates/default/img/nav_bg.jpg')"
        })
    }, function () {
        // out
        $(this).css({
            "color": "black",
            "background": "none"
        })

    }
    );
    $(".ml-youji-list-more1").hover(function () {
            // over
       
        var index = $(this).index(".ml-youji-list-more img");

        $(".ml-youji-list-more img:eq(" + (index+1) + ")").css("display", "block");
        $(this).css("display", "none");
        
    }, function () {
            // out
            // var index1 = $(this).index(".ml-youji-list-more img");
            // $(".ml-youji-list-more img:eq(" + (index1+1) + ")").css("display", "block");
            
            var index = $(this).index(".ml-youji-list-more img");

        $(".ml-youji-list-more img:eq(" + (index+1) + ")").css("display", "none");
            $(this).css("display", "block");

        }
    );
})