let count=0;
let id;

$("#title").fadeOut(6000);

setTimeout(function (){
    clearInterval(id);
    id=setInterval(function(){
        count++;
        $("#marks>h1").text(count);
    },2000);
},6000);

$("#dragon").draggable();


$("#tree1,#tree2,#tree3").droppable({
        drop: function () {
            $("#road").css("animation-play-state", "paused");
            $("#tree1").css("animation-play-state", "paused");
            $("#tree2").css("animation-play-state", "paused");
            $("#tree3").css("animation-play-state", "paused");
            clearInterval(id);
            count=0;
            $("#title").css("animation-play-state", "paused").text('Game Over').fadeIn(100);
            $("#dragon").draggable(drop);
        }
    }
);
