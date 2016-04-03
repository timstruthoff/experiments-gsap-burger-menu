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


var ease = Power2.easeInOut;
var time = 1;
var transtioning = 0;


window.openMenu = function () {
    console.log(open)

    if (transtioning == 0) {
        open = 1;
        console.log("opn");
        transtioning = 1;
        TweenLite.to(".line1", time, {
            directionalRotation: "135_cw",
            top: "20px",
            ease: ease
        });

        TweenLite.to(".line2", time, {
            directionalRotation: "225_cw",
            top: "20px",
            ease: ease,
            onComplete: function () {
                transtioning = 0;
            }
        });
        
        TweenLite.to(".line", time, {
            backgroundColor: "#FFF",
            ease: ease
        });
        
        TweenLite.to(".content", time, {
            opacity: "1",
            ease: ease
        });
        
        /*TweenLite.to(".m-bg-rect", time, {
            transform: "scale(2550,1)",
            ease: ease,
            onComplete: function () {
            }
        });*/
        
        TweenLite.set(".m-bg-rect", {
            opacity: "1"
        });
        
        TweenLite.to(".m-bg-rect", time, {
            attr: {
                x: "-=250",
                width: "251"
            },
            ease: ease,

        });
    }


}

/*window.openMenu = function() {
    TweenLite.to(".line1", time, {
        //transform: "rotate(-45deg_cw)",
        directionalRotation:"135_cw",
        //left: "2.200165625rem",
        ease: ease
    });

    TweenLite.to(".line2", time, {
        directionalRotation:"225_cw",
        marginTop: "-0.09375rem",
        //left: "2.200165625rem",
        //top: "2.200165625rem",
        ease: ease
    });

}*/


/*window.openMenu = function() {
    TweenLite.to(".line1", time, {
        //transform: "rotate(-45deg_cw)",
        directionalRotation:"135_cw",
        //left: "2.200165625rem",
        top: "1.25rem",
        ease: ease
    });

    TweenLite.to(".line2", time, {
        directionalRotation:"225_cw",
        //left: "2.200165625rem",
        //top: "2.200165625rem",
        top: "1.25rem",
        ease: ease
    });

    TweenLite.to(".line3", time, {
        //transform: "rotate(45deg_cw)",
        directionalRotation:"225_cw",
        //left: "2.200165625rem",
        //top: "2.200165625rem",
        //top: "1.1rem",
        top: "1.25rem",
        ease: ease
    });
}*/

window.closeMenu = function () {

    if (transtioning == 0) {
        console.log(open)
        console.log("close");
        open = 0;
        transtioning = 1;
        TweenLite.to(".line2", time, {
            delay: 0.095,
            directionalRotation: "0_cw",
            top: "25px",
            ease: ease
        });

        TweenLite.to(".line1", time, {

            directionalRotation: "0_cw",
            top: "12px",
            ease: ease,
            onComplete: function () {
                transtioning = 0;
            }
        });

        TweenLite.to(".line", time, {
            backgroundColor: "#000",
            ease: ease
        });
        
        TweenLite.to(".content", time, {
            opacity: "0",
            ease: ease
        });

        TweenLite.to(".m-bg-rect", time, {
            attr: {
                //x: "+=250",
                width: "0.1"
            },
            ease: ease,
            onComplete: function () {
                TweenLite.set(".m-bg-rect", {
                    opacity: "0",
                    attr: {
                        x: "+=250"
                    }

                });
            }

        });
    }




}

window.toggleMenu = function () {
    if (open == 1) {
        window.closeMenu();
    } else {
        window.openMenu();
    }
}



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





window.addEventListener("load", function () {
    //document.getElementsByClassName("burger").addEventListener("click", toggleMenu)
})
