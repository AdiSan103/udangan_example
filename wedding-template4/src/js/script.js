



// ############################################################################

// play music
function OpenLetter() {
    // variabel
    var audio = document.getElementById("audio");
    // action
    audio.play();
    // call function system
    system();
    // call function timer
    timer();
}


// system
function system() {
    // variabel
    let i = document.querySelector('.loadingIcon2');
    let j = document.querySelector('.body');
    // action
    i.classList.add('true');
    j.classList.remove('d-none');
    // wait
    setTimeout(() => {
        // action
        i.classList.add('d-none');
        // call function system2
        system2();
    },1000)
}

// system2 
function system2() {
    // banner
    remove('.banner h4.h4-1','fade1');
    gsap.to("h1.title", { duration: 1.5, text: teks });
    setTimeout(() => {
        remove('.banner h4.h4-2','fade1');
    }, 200);

    // when scroll
    window.addEventListener("scroll", () => {

        let thisScroll = this.scrollY;
        console.log(thisScroll);

        if(thisScroll > document.getElementsByClassName('content1')[0].offsetTop - 200) {
            remove('.content1 h2', 'toUp');
            remove('.content1 p.p-content', 'toUp');
            setTimeout(() => {
                remove('.content1-person', 'toRight');
                remove('.content2-person', 'toLeft');
            },200)
        }

        if(thisScroll > document.getElementsByClassName('timer')[0].offsetTop - 200) {
            add('.content1 h2', 'toUp');
            add('.content1 p.p-content', 'toUp');
            add('.content1-person', 'toRight');
            add('.content2-person', 'toLeft');
            remove('.timer h2', 'toUp');
            remove('.timer .img-border-top', 'toUp');
            remove('.timer .img-border-bottom', 'toBottom');
            setTimeout(() => {
                remove('.timer .timer-content','fade1');
            }, 200);
        }

        if(thisScroll > document.getElementsByClassName('content2')[0].offsetTop - 100) {
            add('.timer h2', 'toUp');
            add('.timer .timer-content','fade1');
            add('.timer .img-border-top', 'toUp');
            add('.timer .img-border-bottom', 'toBottom');
            remove('.content2 p.p-content2', 'toUp');
            setTimeout(() => {
                remove('.content2 .content2-main', 'toUp');
            }, 200);
        }

        if(thisScroll > document.getElementsByClassName('content3')[0].offsetTop - 200) {
            add('.content2 p.p-content2', 'toUp');
            add('.content2 .content2-main', 'toUp');
            remove('.content3-1','fade1');
            remove('.content3-2','fade1');
        }

        if(thisScroll > document.getElementsByClassName('gallery')[0].offsetTop - 200) {
            foreachLoopRemove('.gallery .col', 'fade1', 500);
            remove('.gallery h2','toUp');
            setTimeout(() => {
                remove('.gallery .h2-border-bottom','toUp');
            }, 200);
            add('.content3-1','fade1');
            add('.content3-2','fade1');
        }

        if(thisScroll > document.getElementsByClassName('video')[0].offsetTop - 200) {
            foreachLoopAdd('.gallery .col', 'fade1');
            add('.gallery h2','toUp');
            add('.gallery .h2-border-bottom','toUp');
            remove('.video h2', 'toUp');
            remove('.video-content .video-border-bottom','fade1');
            remove('.video-content .video-border-top','fade1');
            setTimeout(() => {
                remove('.video-main','fade1');
            },200);
        }

        if(thisScroll > document.getElementsByClassName('content4')[0].offsetTop - 200) {
            add('.video h2', 'toUp');
            add('.video-main','fade1');
            add('.video-content .video-border-bottom','fade1');
            add('.video-content .video-border-top','fade1');
            remove('.content4 h2', 'toUp');
            remove('.content4 p.p-content4', 'toUp');
            foreachLoopRemove('.content4 .col', 'fade1', 200);
        }
    
    });
    
}

// ############################################################################

// play music
// function OpenLetter() {
//     // variabel
//     var audio = document.getElementById("audio");
//     // action
//     audio.play();
//     // call function system
//     system();
//     // call function timer
//     timer();
// }

function audio() {
    let audio = document.getElementsByTagName('audio')[0];
    let icon = document.querySelector('.audio-control svg');
    if(audio.classList != "play") {
        audio.play();
        audio.classList.add('play');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    } else {
        audio.pause();
        audio.classList.remove('play');
        icon.classList.add('fa-pause');
        icon.classList.remove('fa-play');
    }
}


// banner
function banner(gambar, kecepatan) {

    let k = document.querySelector('.banner');

    // action
    let j = 0;

    setInterval(() => {
        k.setAttribute(
            "style", 
            `
            background : url(` + gambar[j] +  `);
            position: relative;
            background-position: center;
            background-repeat: no-repeat;
            transition: 0.25s;
            animation: background-scale ` + kecepatan * 2 /1000 + `s infinite;
            height: 100vh;
            `
        );

        j++;

        // condition
        if(j == gambar.length) {
            j = 0;
        }

    }, kecepatan);

}

function defaultBanner(gambar_lama, kecepatan) {
    document.querySelector('.banner').setAttribute(
        "style", 
        `
        background : url(` + gambar_lama +  `);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        animation: background-scale ` + kecepatan * 2 /1000 + `s infinite;
        height: 100vh;
        `
    );
}

// timer 
function timer() {
    // target day
    let timeTarget = new Date('2021,10,10').getTime(); 
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

// remove class
function remove(x, classRemove) {
    document.querySelector(x).classList.remove(classRemove);
}

// add class
function add(x, classAdd) {
    document.querySelector(x).classList.add(classAdd);
}

// foreach loops Remove
function foreachLoopRemove(x, classRemove, time) {
    // variabel
    let i = 0;
    let j = document.querySelectorAll(x);
    // action
    for(let k = 0; k < j.length; k++){
        setTimeout(() => {
            j[k].classList.remove(classRemove);
        }, time * i);
        i++;
    }
}

// foreach loops Add
function foreachLoopAdd(x, classAdd) {
    // variabel
    let j = document.querySelectorAll(x);
    // action
    for(let k = 0; k < j.length; k++){
        j[k].classList.add(classAdd);
    }
} 

function imgModal(srcImg) {
    document.querySelector('img.img-modal').setAttribute("src",srcImg);
}