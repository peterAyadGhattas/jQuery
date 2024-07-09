/// <reference types="../@types/jquery"/>
 //effect
//$('.test').hide(2000);
//$('.test').show(2000);
//$('.test').toggle(2000);
//margin ,padding,opacity,width ,height 
//$('.test').slideDown(2000);
//$('.test').slideUp(2000);
//$('.test').slideToggle(2000);
// height w ay haga 3la y-axis
//$('.test').fadeIn(2000);
//$('.test').fadeOut(2000);
//$('.test').fadetoggle(2000);
//$('.test').fadeTo(2000,0.2);
//opacity w ay haga b t5fy lazem t3mel display :none;

//el button 
$('.open').on('click',function(){  
   
   
   $('.sidenav').animate({'width':'300px'},10 )

 
}
);

$('.closebtn').on('click',function(){
   $('.sidenav').animate({'width':'0px'},10)
}

);
///////////

$('.bom').on('click', function() {
    let box = $(this).next('.inner');// $(this)=> the element with class toggle that was clicked
    //.next('.inner') finds the next sibling element of the clicked element that has class inner
    $('.inner').not(box).slideUp(500); //e3mel slideup l kol el (.inner) m3ada el var box el ana meskto fo2
    box.slideToggle(500); 
});


$(document).ready(function() {
    countDownToTime("20 August 2024 8:56:00");

    function countDownToTime(countTo) {
        let futureDate = new Date(countTo);
        let now = new Date();
        
        let timeDifference = Math.floor((futureDate.getTime() - now.getTime()) / 1000);
        
        let days = Math.floor(timeDifference / (24 * 60 * 60));
        let hours = Math.floor((timeDifference % (24 * 60 * 60)) / (60 * 60));
        let mins = Math.floor((timeDifference % (60 * 60)) / 60);
        let secs = Math.floor(timeDifference % 60);
        
        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".minutes").html(`${mins} m`);
        $('.seconds').html(`${secs} s`);
        
        setInterval(function() {
            countDownToTime(countTo);
        }, 1000);
    }
});

$(document).ready(function() {
    var maxLength = 100;

    $('textarea').keyup(function() {
        var length = $(this).val().length;
        var charsLeft = maxLength - length;

        if (charsLeft <= 0) {
            $("#chars").text("Your available characters have finished");
        } else {
            $("#chars").text(charsLeft);
        }
    });
});



