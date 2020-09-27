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

        // 轮播banner
        var banner = document.getElementsByClassName("banner")[0];
        var box = document.getElementsByClassName("box")[0];
        var btns = document.querySelectorAll(".btns li");
        var bannerW = parseInt(getComputedStyle(banner, null).width);
    
        var num = 0;
        function move(){
            num++;
              if(num>btns.length-1){
                animate(box,{
                 "margin-left":-num*bannerW
             },500,Tween.Linear,function(){
                   box.style.marginLeft=0;
             })
             num=0;
    
              }else{
    
              
             animate(box,{
                 "margin-left":-num*bannerW
             },500)
            }
             for(var i=0;i<btns.length;i++){
                 btns[i].style.background="#000";
             }
            btns[num].style.background = "blue";
            
          }
          var t=setInterval(move,2000);
    
    
        //   按钮轮播
        for(let i=0;i<btns.length;i++){
            btns[i].onclick=function(){
                num=i;
                animate(box,{
                 "margin-left":-num*bannerW
             },500)
             for(var j=0;j<btns.length;j++){
                 btns[j].style.background="#000";
             }
                btns[num].style.background = "blue";
            }
        }
        // 鼠标移入移出
        banner.onmouseover=function(){
            clearInterval(t);
        }
        banner.onmouseout=function(){
           t=setInterval(move,2000);
    }
    // 轮播banner结束

    $(".jindu-list").hover(function () {
            // over
        $(this).find(".jindu-list-img1").css("display", "none");
        $(this).find(".jindu-list-img2").css("display","block");
        }, function () {
            // out
            $(this).find(".jindu-list-img1").css("display","block");
            $(this).find(".jindu-list-img2").css("display", "none");
        }
    );
    
     // 左侧轮播banner
     var banner1 = document.getElementsByClassName("banner1")[0];
     var box1 = document.getElementsByClassName("box1")[0];
     var btns1 = document.querySelectorAll(".btns1 li");
     var bannerW1 = parseInt(getComputedStyle(banner1, null).width);
 
     var num1 = 0;
     function move1(){
         num1++;
           if(num1>btns1.length-1){
             animate(box1,{
              "margin-left":-num1*bannerW1
          },500,Tween.Linear,function(){
                box1.style.marginLeft=0;
          })
          num1=0;
 
           }else{
 
           
          animate(box1,{
              "margin-left":-num1*bannerW1
          },500)
         }
          for(var i=0;i<btns1.length;i++){
              btns1[i].style.background="#000";
          }
         btns1[num1].style.background = "blue";
         
       }
       var t1=setInterval(move1,2000);
 
 
     //   按钮轮播
     for(let i=0;i<btns1.length;i++){
         btns1[i].onclick=function(){
             num1=i;
             animate(box1,{
              "margin-left":-num1*bannerW1
          },500)
          for(var j=0;j<btns1.length;j++){
              btns1[j].style.background="#000";
          }
             btns1[num1].style.background = "blue";
         }
     }
     // 鼠标移入移出
     banner1.onmouseover=function(){
         clearInterval(t1);
     }
     banner1.onmouseout=function(){
        t1=setInterval(move1,2000);
 }
 // 轮播banner结束

//  选项卡
    $(".zhuti-huodong li a").hover(function () {
            // over
        $(".xinwen").css("display", "none");
        var index = $(this).index(".zhuti-huodong li a");
        $(".xinwen:eq(" + index + ")").css("display", "block");

        $(".zhuti-huodong li a").css("color", "#333");
        $(this).css("color", "rgb(219, 206, 90)");


        }, function () {
            // out
            // $(this).css("color", "#333");
        }
    );


    var banner2 = document.getElementsByClassName("banner2")[0];
    var box2 = document.getElementsByClassName("box2")[0];
    var btns2 = document.querySelectorAll(".btns2 li");
    var bannerW2 = parseInt(getComputedStyle(banner2, null).width);

    var num2 = 0;
    function move2(){
        num2++;
          if(num2>btns2.length-1){
            animate(box2,{
             "margin-left":-num2*bannerW2
         },500,Tween.Linear,function(){
               box2.style.marginLeft=0;
         })
         num2=0;

          }else{

          
         animate(box2,{
             "margin-left":-num2*bannerW2
         },500)
        }
         for(var i=0;i<btns2.length;i++){
             btns2[i].style.background="#000";
         }
        btns2[num2].style.background = "blue";
        
      }
      var t2=setInterval(move2,2000);


    //   按钮轮播
    for(let i=0;i<btns2.length;i++){
        btns2[i].onclick=function(){
            num2=i;
            animate(box2,{
             "margin-left":-num2*bannerW2
         },500)
         for(var j=0;j<btns2.length;j++){
             btns2[j].style.background="#000";
         }
            btns2[num2].style.background = "blue";
        }
    }
    // 鼠标移入移出
    banner2.onmouseover=function(){
        clearInterval(t2);
    }
    banner2.onmouseout=function(){
       t2=setInterval(move2,2000);
    }
    window.onscroll = function () {
        var st = document.documentElement.scrollTop;
        if (st > 200) {
            $(".zhuti").css("display", "block");
            $(".zhuti").addClass("tol");
        }
        if (st > 600) {
            $(".remen").css("display", "block");
            $(".remen").addClass("tou");
        }
        if (st > 1300) {
            $(".sp").css("display", "block");
            $(".sp").addClass("tor");
            $(".ly").css("display", "block");
            $(".ly").addClass("tou");
            $(".fw").css("display", "block");
            $(".fw").addClass("tol");
        }
    }
})