playGame ();

function playGame () {

    let count=0;

    $("#title").fadeOut(6000);

    setInterval(function(){
        count++;
        $("#marks>h1").text(count);
    },6000);

    // var dset;
    // var dw;
    // var dh;
    // var t1set;
    // var t2set;
    // var t3set;
    // var t1w;
    // var t1h;
    // var t2w;
    // var t2h;
    // var t3w;
    // var t3h;

        setInterval(function(){

            var dset= $("#dragon").offset();
            var dw= $("#dragon").width();
            var dh= $("#dragon").height();

            var t1set= $("#tree1").offset();
            var t2set= $("#tree2").offset();
            var t3set= $("#tree3").offset();

            var t1w= $("#tree1").width();
            var t1h= $("#tree1").height();

            var t2w= $("#tree2").width();
            var t2h= $("#tree2").height();

            var t3w= $("#tree3").width();
            var t3h= $("#tree3").height();


    if(dset.left < t1set.left + t1w && dset.left + dw > t1set.left && dset.top < t1set.top + t1h && dset.top + dh > t1set.top || dset.left < t2set.left + t2w && dset.left + dw > t2set.left && dset.top < t2set.top + t2h && dset.top + dh > t2set.top || dset.left < t3set.left + t3w && dset.left + dw > t3set.left && dset.top < t3set.top + t3h && dset.top + dh > t3set.top ) {
        $("#road").css("animation-play-state", "paused");
        $("#tree1").css("animation-play-state", "paused");
        $("#tree2").css("animation-play-state", "paused");
        $("#tree3").css("animation-play-state", "paused");
        $("#restart").css("background", "rgba(43, 41, 41, 0.81)");
        $("#restart>button").css("visibility","visible");
        count=0;
        $("#title").css("animation-play-state", "paused").text('Game Over').fadeIn(100);
        clearInterval();
    }
        },100);

}

$("#restart>button").click(function() {
    $("#dragon").css({"left": "14px", "bottom": "100px"});
    $("#road").css({"bottom":'0',"animation-play-state": "running"});
    $("#tree1").css({"bottom":'155px',"left":'400px',"animation-play-state": "running"});
    $("#tree2").css({"bottom":'155px',"left":'1000px',"animation-play-state": "running"});
    $("#tree3").css({"bottom":'155px',"left":'1600px',"animation-play-state": "running"});
    $("#restart").css("visibility","hidden");
    $("#restart>button").css("visibility","hidden");
    $("#title").css("animation-play-state", "running").text('Game Start').fadeIn(100);
    playGame ();
});