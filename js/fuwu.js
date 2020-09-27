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
            "background":"url('http://quwolvyou.com/templates/default/img/nav_bg.jpg')"
            })
        }, function () {
            // out
            $(this).css({
                "color": "black",
                "background":"none"
            })

        }
    );
    window.onscroll = function () {
        var st = document.documentElement.scrollTop;
        if (st > 10) {
            $('.bm-one').addClass("todown1")
        }
        if (st > 77) {
            
            $(".bm-four").addClass("todown1");
            $(".bm-five").addClass("todown1");
            $(".bm-six").addClass("todown1");

        }
    }

})