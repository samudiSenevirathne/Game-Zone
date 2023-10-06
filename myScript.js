
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

        if(count==35){
            $("#grass").css("visibility", "visible");
        }

        if(count==40){
            $("#rain").css("visibility", "visible");
        }

        /*level 04 complete*/
        if(count==50){
            $("#road").css("animation-name", "paused");
            $("#tree1").css("animation-name", "paused");
            $("#tree2").css("animation-name", "paused");
            $("#tree3").css("animation-name", "paused");
            $("#restart").fadeIn(100);
            $("#restart>h1").text("level 04 completed").css({"left": "502px", "top": "265px", "visibility": "visible"});
            $("#title").css("animation-name", "paused").text('   ');
            $("#restart").fadeOut(8000);
        }

        /*level 02 start*/
        if(count>6 && count<20){
            $("#road").css({"animation-duration":"25s","animation-play-state":"running"});
            $("#dragon").css("border", "1px solid yellow");
            $("#tree1").css("animation-play-state","running");
            $("#tree2").css({"height": "217.5px", "width": "186px","animation-play-state":"running"});
            $("#tree3").css("animation-play-state", "running");
        }
        /*level 03 start*/
        if(count>20 && count<30){
            $("#road").css({"animation-duration":"20s","animation-name":"moveCityAndRoad"});
            $("#dragon").css("border", "1px solid pink");
            $("#forest").css("visibility", "visible");
            $("#tree1").css({"animation-name":"moveTree1",'background-image':'url("image/white_tree.png")'});
            $("#tree2").css({"animation-name":"moveTree2",'background-image':'url("image/white_tree.png")'});
            $("#tree3").css({"animation-name":"moveTree3",'background-image':'url("image/white_tree.png")'});
        }
        /*level 04 start*/
        if(count>30 && count<50){
            $("main").css('background-image','url("image/sky_my.png")');
            $("#cloud1,#cloud2,#cloud3,#cloud4,#cloud5").css('background-image','url("image/cloud_my.png")');
            $("#forest").css("visibility", "hidden");
            $("#forest1,#forest2,#forest3").css("visibility", "visible");
            $("#road").css({'background-image':'url("image/Road_my_original.png")','height': '28vh','z-index': '1','animation-duration':'15s','animation-name':'moveCityAndRoad'});
            $("#dragon").css({'border':'1px solid #ff7d00','background-image':'url("image/dragon_my.png")'});
            $("#tree1").css({"animation-duration":"8s","animation-name":"moveTree1"});
            $("#tree2").css({"animation-duration":"11s","animation-name":"moveTree2"});
            $("#tree3").css({"animation-duration":"17s","animation-name":"moveTree3"});
        }
        /*level 05 start*/
        if(count>50){
            $("main").css('background-image','url("image/sky_green.png")');
            $("#cloud1,#cloud2,#cloud3,#cloud4,#cloud5").css('background-image','url("image/cloud_green.png")');
            $("#forest1,#forest3").css('background-image','url("image/green_forest.png")');
            $("#forest2").css('background-image','url("image/green_forest_temp.png")');
            $("#road").css({'background-image':'url("image/Road_green_original.png")','animation-duration':'10s','animation-name':'moveCityAndRoad'});
            $("#dragon").css({'border':'1px solid green','background-image':'url("image/dragon_green.png")'});
            $("#tree1").css({"animation-duration":"8s","animation-name":"moveTree1",'background-image':'url("image/tree_green.png")'});
            $("#tree2").css({"animation-duration":"8s","animation-name":"moveTree2",'background-image':'url("image/tree_green.png")'});
            $("#tree3").css({"animation-duration":"13s","animation-name":"moveTree3",'background-image':'url("image/tree_green.png")'});
            $("#grass").css('background-image','url("image/grass_green.png")');
            $("#rain").css("visibility", "hidden");
        }

    },6000);

    const dsetInitial=$("#dragon").offset();

    setInterval(function() {

        var dw = $("#dragon").width();
        var dh = $("#dragon").height();

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

            /*dragon's  life manage*/
            if(dsetInitial.top == dset.top && $("#lifeBar").val()!= 0 ){
                $("#lifeBar").val(100);
            }
            else{
                $("#lifeBar").val($("#lifeBar").val()-1);
            }

      if(dset.left < t1set.left + t1w && dset.left + dw > t1set.left && dset.top < t1set.top + t1h && dset.top + dh > t1set.top || dset.left < t2set.left + t2w && dset.left + dw > t2set.left && dset.top < t2set.top + t2h && dset.top + dh > t2set.top || dset.left < t3set.left + t3w && dset.left + dw > t3set.left && dset.top < t3set.top + t3h && dset.top + dh > t3set.top || $("#lifeBar").val()==0 ) {
          if(count<6){
              $("#dragon").css({'top':dset.top,'left':dset.left});/*extra*/
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
              if(dsetInitial.top == dset.top) {
                  $("#lifeBar").val(0);
              }
              clearInterval();
          }else{
              $("#dragon").css({'top':dset.top,'left':dset.left});/*extra*/
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
              if(dsetInitial.top == dset.top ) {
                  $("#lifeBar").val(0);
              }
              clearInterval();
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