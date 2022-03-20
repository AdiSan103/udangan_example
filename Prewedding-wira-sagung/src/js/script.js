// play music
function OpenLetter() {
    var audio = document.getElementById("audio");
    audio.play();
}

// system
if(document.querySelector('.d-none')) {
    // 1.animation->first open
    setTimeout(function() {
        $('.loadingIcon2').removeClass("start");
        $('.loadingIcon2').addClass("middle");
        // 2.animation->button undangan click
        $('.click').click(function() {
            $('.body.d-none').removeClass("d-none");
            $('.loadingIcon2').addClass("end");
            // 3.animation->animation when button undangan has clicked
            setTimeout(function() {
                // 4.animation ->animation drop down for undangan button
                setTimeout(function() {
                    $('.loadingIcon2').addClass("d-none");
                },1500);
                // 5.animation
                setTimeout(function(){
                    $('.this-animate').removeClass("animate-1");
                         // 6.animation
                        setTimeout(function(){
                        $('.this-animate2').removeClass("animate-2");
                            // 7.animation->banner
                            setTimeout(function() {
                                $('.this-animate2').css({
                                'transition' : '0s',
                                });
                             // 5.animation->banner->border white
                            setTimeout(function () {
                                $('.this-animate2 h1').addClass("border-bottom");
                            },500);
                        }, 750);
                    }, 300);
                }, 300);
            },100);
        });

        // when scroll
        $(window).scroll(function () {
            // get value scroll
            let wScroll = $(this).scrollTop();
            // animate2
            $('.this-animate2').css({
                'transform': 'translateY(-' + wScroll / 15 + '%)'
            });
            // animate3
            if($('.this-animate3').offset().top - 350 < wScroll) {
                $('.this-animate3').removeClass('animate-3');
            }
            // animate4
            if($('.this-animate4').offset().top - 500 < wScroll) {
                $('.this-animate4').removeClass('animate-4');
            }
            // animate5
            if($('.this-animate5').offset().top - 300 < wScroll) {
                $('.this-animate5').removeClass('animate-5');
            }
            // animate6
            if($('.this-animate6').offset().top - 500 < wScroll) {
                $('.this-animate6').removeClass('animate-6');
            }
             // animate7
            if($('.this-animate7').offset().top - 300 < wScroll) {
                $('.this-animate7').removeClass('animate-7');
            }
            // animate 8 
            if ( $('.protocolAttention').offset().top - 300 < wScroll ) {
                //untuk masing" child clasnya / each / pada index ke i
                $('.this-animate8').each(function (i) {
                    setTimeout(function () {
                        //.eq() elemen ke berapsa
                        $('.this-animate8').eq(i).removeClass('animate-8');
                        setTimeout(function() {
                            $('.this-animate8').css({
                                'transition' : '0.25s',
                            });
                        }, 1500);
                        // console.log(i);
                    }, 100 + (i * 200));
                });
            }
        })
    }, 10);
}

// timer
// target day
if(document.querySelector('.days')) {
    let timeTarget = new Date('2021,4,2').getTime(); 
    // looping
    let thisInterval = setInterval(function() {
        // today
        let timeNow = new Date().getTime();
        // difference
        let timeDistance = timeTarget -  timeNow;
        // conditional time target is true
        if(timeDistance < 0) {
            // stop Interval
            clearInterval(thisInterval);
        } else {
            // // inner in html and change time in :
            // 1.days
            document.querySelector('.days').innerHTML = Math.floor(timeDistance / ( 1000 * 60 * 60 * 24 ));
            // 2.hours
            document.querySelector('.hours').innerHTML = Math.floor((timeDistance % ( 1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
            // 3.minutes
            document.querySelector('.minutes').innerHTML = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
            // 4.seconds
            document.querySelector('.seconds').innerHTML = Math.floor((timeDistance % ( 1000 * 60)) / 1000);
        }
    }, 100);
}
