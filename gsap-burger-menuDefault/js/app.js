// 1. Create a variable
var box = document.getElementById("line");

// 2. Create a First .to() Tween
// TweenLite.to(box, 0.7, {left: 0, x: 0});

// 3. Create a .from() Tween
// TweenLite.from(box, 2, {x: '-=200px', autoAlpha: 0});

// 4. Create a .set() Tween

//TweenLite.set(box, {x: '+=100px', scale: 0.6});
//TweenLite.set(box, {x: '-50%', scale: 1});

// 5. Create a .fromTo() Tween

//TweenMax.staggerTo(".line", 0.3, {marginLeft:"-=1300", ease:Power2.easeIn, onComplete:complete}, 0.1);
//TweenMax.staggerTo(".line", 1.3, {marginLeft:"+=1300", ease:Power2.easeIn}, 0.1);

var open = 0;

window.openAnim = function () {
    var delay = 200;
    var dur = 0.4;
    TweenLite.to(".line1", dur, {
        width: "2.5rem",
        onComplete: complete
    });
    setTimeout(function () {
        TweenLite.to(".line2", dur, {
            width: "2.5rem",
            onComplete: complete
        });
        setTimeout(function () {
            TweenLite.to(".line3", dur, {
                width: "2.5rem",
                onComplete: complete
            });
        }, delay);
    }, delay);


    // 7. Callback functions
    function start() {
        console.log('start');
    }

    function update() {
        console.log('animating');
    }

    function complete() {
        console.log('end');
    }
}

window.closeAnim = function () {
    var delay = 200;
    var dur = 0.4;
    TweenLite.to(".line3", dur, {
        width: "0",
        onComplete: complete
    });
    setTimeout(function () {
        TweenLite.to(".line2", dur, {
            width: "0",
            onComplete: complete
        });
        setTimeout(function () {
            TweenLite.to(".line1", dur, {
                width: "0",
                onComplete: complete
            });
        }, delay);
    }, delay);


    // 7. Callback functions
    function start() {
        console.log('start');
    }

    function update() {
        console.log('animating');
    }

    function complete() {
        console.log('end');
    }
};



var ease = Power2.easeInOut;
var time = 0.25;

window.openMenu = function() {
    TweenLite.to(".line1", time, {
        transform: "rotate(-45deg)",
        top: "1.1rem",
        ease: ease
    });

    TweenLite.to(".line2", time, {
        opacity: "0",
        ease: ease
    });

    TweenLite.to(".line3", time, {
        transform: "rotate(45deg)",
        top: "1.1rem",
        ease: ease
    });
}

window.closeMenu = function() {
    TweenLite.to(".line1", time, {
        transform: "",
        top: "0.375rem",
        ease: Power1.easeOut
    });

    TweenLite.to(".line2", time, {
        top: "1.125rem",
        opacity: "1",
        ease: ease
    });

    TweenLite.to(".line3", time, {
        transform: "",
        top: "1.875rem",
        ease: ease
    });
}

window.toggleMenu = function() {
    if (open == 1) {
        window.closeMenu();
        open = 0;
    } else {
        window.openMenu();
        open = 1;
    }
}

window.addEventListener("load", function() {
    //document.getElementsByClassName("burger").addEventListener("click", toggleMenu)
})


