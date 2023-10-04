
let count=0;
let id;

playGame ();

function playGame () {

    count=0;

    $("#title").fadeOut(6000);

    id=setInterval(function marks(){
        $("#marks>h1").text(count++);

        /*level 01 complete*/
        if(count==6) {
            $("#road").css("animation-play-state", "paused");
            $("#tree1").css("animation-play-state", "paused");
            $("#tree2").css("animation-play-state", "paused");
            $("#tree3").css("animation-play-state", "paused");
            $("#restart").css("visibility", "visible");
            $("#restart>h1").text("level 01 completed").css({"left": "502px", "top": "265px", "visibility": "visible"});
            $("#title").css("animation-name", "paused").text('   ');
            $("#restart").fadeOut(6000);
            // clearInterval(id);
        }
        /*level 02 complete*/
        if(count==20){
            $("#road").css("animation-name", "paused");
            $("#tree1").css("animation-name", "paused");
            $("#tree2").css("animation-name", "paused");
            $("#tree3").css("animation-name", "paused");
            $("#restart").fadeIn(100);
            $("#restart>h1").text("level 02 completed").css({"left": "502px", "top": "265px", "visibility": "visible"});
            $("#title").css("animation-name", "paused").text('   ');
            $("#restart").fadeOut(10000);
        }

        /*level 03 complete*/
        if(count==30){
            $("#road").css("animation-name", "paused");
            $("#tree1").css("animation-name", "paused");
            $("#tree2").css("animation-name", "paused");
            $("#tree3").css("animation-name", "paused");
            $("#restart").fadeIn(100);
            $("#restart>h1").text("level 03 completed").css({"left": "502px", "top": "265px", "visibility": "visible"});
            $("#title").css("animation-name", "paused").text('   ');
            $("#restart").fadeOut(8000);
        }

        /*level 02 start*/
        if(count>6){
            $("#road").css({"animation-duration":"20s","animation-play-state":"running"});
            $("#dragon").css("border", "1px solid yellow");
            $("#tree1").css("animation-play-state","running");
            $("#tree2").css({"height": "217.5px", "width": "186px","animation-play-state":"running"});
            $("#tree3").css("animation-play-state", "running");
        }
        /*level 03 start*/
        if(count>20 && count<30){
            $("#road").css({"animation-duration":"15s","animation-name":"moveCityAndRoad"});
            $("#dragon").css("border", "1px solid pink");
            $("#forest").css("visibility", "visible");
            $("#tree1").css({"bottom":"135px","animation-name":"moveTree1",'background-image':'url("image/white_tree.png")'});
            $("#tree2").css({"bottom":"135px","height": "217.5px", "width": "186px","animation-name":"moveTree2",'background-image':'url("image/white_tree.png")'});
            $("#tree3").css({"bottom":"135px","animation-name":"moveTree3",'background-image':'url("image/white_tree.png")'});
        }
        /*level 04 start*/
        if(count>30){
            $("main").css('background-image','url("image/sky_my.png")');
            $("#cloud1,#cloud2,#cloud3,#cloud4,#cloud5").css('background-image','url("image/cloud_my.png")');
            $("#forest").css("visibility", "hidden");
            $("#forest1,#forest2,#forest3").css("visibility", "visible");
            $("#road").css({'background-image':'url("image/Road_my.png")','height': '28vh','z-index': '1','animation-duration':'10s','animation-name':'moveCityAndRoad'});
            $("#dragon").css({'background-image':'url("image/dragon_my.png")','bottom': '50px','border':'1px solid orange'});
            $("#tree1").css({"bottom":"100px","animation-name":"moveTree1","background-image":"url('image/white_tree.png')"});
            $("#tree2").css({"bottom":"100px","height": "217.5px", "width": "186px","animation-name":"moveTree2",'background-image':'url("image/white_tree.png")'});
            $("#tree3").css({"bottom":"100px","animation-name":"moveTree3",'background-image':'url("image/white_tree.png")'});
        }

    },6000);


    setInterval(function() {

        var dw= $("#dragon").width();
        var dh= $("#dragon").height();

        var t1w= $("#tree1").width();
        var t1h= $("#tree1").height();

        var t3w= $("#tree3").width();
        var t3h= $("#tree3").height();

        var t2w= $("#tree2").width();
        var t2h= $("#tree2").height();

            var dset= $("#dragon").offset();

            var t1set= $("#tree1").offset();
            var t2set= $("#tree2").offset();
            var t3set= $("#tree3").offset();

      if(dset.left < t1set.left + t1w && dset.left + dw > t1set.left && dset.top < t1set.top + t1h && dset.top + dh > t1set.top || dset.left < t2set.left + t2w && dset.left + dw > t2set.left && dset.top < t2set.top + t2h && dset.top + dh > t2set.top || dset.left < t3set.left + t3w && dset.left + dw > t3set.left && dset.top < t3set.top + t3h && dset.top + dh > t3set.top ) {
          if(count<6){
              $("#road").css("animation-play-state", "paused");
              $("#tree1").css("animation-play-state", "paused");
              $("#tree2").css("animation-play-state", "paused");
              $("#tree3").css("animation-play-state", "paused");
              $("#restart").css("visibility", "visible");
              $("#restart>h1").text("Fail").css({"left": "610px", "top": "350px", "visibility": "visible"});
              $("#restart>button").css("visibility", "visible");
              clearInterval(id);
              count = 0;
              $("#title").css("animation-name", "paused").text('Game Over').fadeIn(100);
          }else{
              $("#road").css("animation-play-state", "paused");
              $("#tree1").css("animation-play-state", "paused");
              $("#tree2").css("animation-play-state", "paused");
              $("#tree3").css("animation-play-state", "paused");
              $("#restart").fadeIn(100);
              $("#restart>h1").text("Fail").css({"left": "610px", "top": "350px", "visibility": "visible"});
              $("#restart>button").css("visibility", "visible");
              clearInterval(id);
              count = 0;
              $("#title").css("animation-name", "paused").text('Game Over').fadeIn(100);
          }
      }
    },100);

}



$("#restart>button").click(function() {
    location.reload();
});


/*not yet*/
// $("#pausedBtn").click(function() {
//     $("#road").css("animation-play-state", "paused");
//     $("#tree1").css("animation-play-state", "paused");
//     $("#tree2").css("animation-play-state", "paused");
//     $("#tree3").css("animation-play-state", "paused");
//     $("#restart").css("visibility", "visible");
//     $("#restart>button").css("visibility","visible");
//     $("#restart>button").text("play");
//     $("#title").css("animation-play-state", "paused").text('paused').fadeIn(100);
// });

/*not yet*/
// $("#continueBtn").click(function() {
// $("#road").css(animation-play-state","running");
// $("#tree1").css("animation-play-state","running");
// $("#tree2").css("animation-play-state", "running");
// $("#tree3").css("animation-play-state", "running");
// $("#title").css("animation-play-state", "running").text('continue').fadeIn(100);
// playGame ();
// });