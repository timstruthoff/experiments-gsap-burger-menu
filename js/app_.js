window.tm = {};
tm.browser = {};
tm.elements = {};
tm.anim = {};
tm.navigator = {};
tm.function = {};

var open = 0;


var ease = Power2.easeInOut;
var time = 1;
var transtioning = 0;

tm.function.newHTML = function (html) {
    return (function newElement(element) {
        if (element.tag == "svg") {
            var hElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            hElement.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        } else {
            var hElement = document.createElement(element.tag != undefined ? element.tag : "div");
        }

        if (element.id != undefined) hElement.id = element.id
        if (element.text != undefined) hElement.innerHTML = element.text;
        if (element.func != undefined) element.func(hElement);

        for (key in element.attr) {
            if (element.tag == "svg") {
                hElement.setAttributeNS(null, key, element.attr[key]);
            } else {
                hElement.setAttribute(key, element.attr[key]);
            }

        }
        //setTimeout(function () {
        //console.log(element.id);
        if (element.child != undefined)(function () {
            var i = 0;
            for (i = 0; i < element.child.length; i++) {
                (function () {
                    var iLocal = i
                    var childElement = newElement(element.child[iLocal]);
                    //element.child[i].func(childElement);
                    hElement.appendChild(childElement);

                }())

            }
        }())

        //}, 0)
        return hElement;

    }(html));
    //return element;
}

tm.menu = {};
tm.store = {};
tm.store.modalHtml = {
    attr: {
        "class": "modal"
    },
    child: [{
        attr: {
            "class": "content"
        },
        child: [{
            attr: {
                "class": "menu"
            },
            child: [{
                attr: {
                    "class": "div-1"
                }
                /*,
                                    func: function (element) {
                                        setTimeout(function () {
                                            linkAnim(element);
                                        }, time * 1000 / 4)

                                    }*/
                }, {
                attr: {
                    "class": "spacer"
                }
                }, {
                tag: "ul",
                attr: {
                    "class": "div-2"
                },
                child: [{
                    tag: "li",
                    child: [{
                        tag: "a",
                        text: "About",
                        attr: {
                            "class": "nav-a",
                            "href": "#",
                            "style": "color: rgba(255, 255, 255, 0);"
                        },
                        func: function (element) {
                            setTimeout(function () {
                                //linkAnim(element);
                                tm.function.makeLink(element);
                            }, time * 1000 / 4 + 0)

                        }
                        }]
                    }, {
                    tag: "li",
                    child: [{
                        tag: "a",
                        text: "Projects",
                        attr: {
                            "class": "nav-a",
                            "href": "/test/test2/",
                            "style": "color: rgba(255, 255, 255, 0);"
                        },
                        func: function (element) {
                            setTimeout(function () {
                                //inkAnim(element);
                                tm.function.makeLink(element);
                            }, time * 1000 / 4)

                        }
                        }]
                    }, {
                    tag: "li",
                    child: [{
                        tag: "a",
                        text: "Experiments",
                        attr: {
                            "class": "nav-a",
                            "href": "/test/test3/",
                            "style": "color: rgba(255, 255, 255, 0);"
                        },
                        func: function (element) {
                            setTimeout(function () {
                                //linkAnim(element);
                                tm.function.makeLink(element);
                            }, time * 1000 / 4)

                        }
                        }]
                    }, {
                    tag: "li",
                    child: [{
                        tag: "a",
                        text: "Blog",
                        attr: {
                            "class": "nav-a",
                            "href": "/test/test4/",
                            "style": "color: rgba(255, 255, 255, 0);"
                        },
                        func: function (element) {
                            setTimeout(function () {
                                //linkAnim(element);
                                tm.function.makeLink(element);
                            }, time * 1000 / 4)

                        }
                        }]
                    }]
                }]
            }]
        }, {
        tag: "svg",
        text: '<rect class="m-bg-rect" x="249" width="0.1" height="1000" /><rect class="m-bg-rect" x="499" width="0.1" height="1000" /><rect class="m-bg-rect" x="749" width="0.1" height="1000" /><rect class="m-bg-rect" x="999" width="0.1" height="1000" />',
        attr: {
            "class": "modal-bg",
            "viewBox": "0 0 1000 1000",
            "preserveAspectRatio": "none"
        }
        }]
};


tm.function.makeLink = function (element) {
    var currentElement = {};
    //currentElement.numIndex = i;
    currentElement.element = element;
    currentElement.animPlaying = 0;


    /*if (tm.browser.mobile == true) {
        currentElement.element.addEventListener("touchstart", function () {
            elementEnter();
        });
        currentElement.element.addEventListener("touchend", function () {
            elementLeave();
        });
        currentElement.element.addEventListener("touchcancel", function () {
            elementLeave();
        });
    } else {*/
    currentElement.element.addEventListener("mouseenter", function () {
        elementEnter();
    });
    currentElement.element.addEventListener("mouseleave", function () {
        elementLeave();
    });
    //}

    currentElement.element.addEventListener("click", function () {
        tm.navigator.goto(this.getAttribute("href"));
        event.preventDefault();
    });


    var elementEnter = function () {
        if (currentElement.animPlaying == 0) {
            TweenLite.set(currentElement.element, {
                backgroundImage: "linear-gradient(to bottom,  rgba(255, 255, 255, 0) 50%, #F5F6F8 50%)",
                backgroundPosition: "0px 0%"
            });
            TweenLite.to(currentElement.element, 0.175, {
                backgroundPosition: "0px 100%",
                color: "#0B0C0E",
                //ease: Power2.easeInOut
                ease: Power1.easeOut
            });
        } else {
            setTimeout(function () {
                elementEnter()
            }, 10);
        }

    }

    var elementLeave = function () {
        if (currentElement.animPlaying == 0) {
            TweenLite.set(currentElement.element, {
                backgroundImage: "linear-gradient(to bottom,  #F5F6F8 50%, rgba(255, 255, 255, 0) 50%)",
                backgroundPosition: "0px 0%"
            });
            TweenLite.to(currentElement.element, 0.175, {
                backgroundPosition: "0px 100%",
                color: "#F5F6F8",
                //ease: Power2.easeInOut
                ease: Power1.easeIn
            });
        } else {
            setTimeout(function () {
                elementLeave()
            }, 10);
        }
    }



    console.log(currentElement);
    currentElement.animPlaying = 1;
    TweenLite.set(currentElement.element, {
        color: "rgba(255, 255, 255, 0)",
        backgroundPosition: "0 100%",
        backgroundImage: "linear-gradient(to bottom,  #F5F6F8 50%, rgba(255, 255, 255, 0) 50%)"
    });
    setTimeout(function () {

            setTimeout(function () {

                TweenLite.to(currentElement.element, 0.35, {
                    backgroundPosition: "0px 0%",
                    //ease: Power2.easeInOut
                    ease: Power1.easeOut,
                    onComplete: function () {
                        TweenLite.set(currentElement.element, {
                            color: "#F5F6F8",
                            backgroundPosition: "0 100%",
                            backgroundImage: "linear-gradient(to bottom,  rgba(255, 255, 255, 0) 50%, #F5F6F8 50%)"
                        });
                        TweenLite.to(currentElement.element, 0.35, {
                            backgroundPosition: "0px 0%",
                            //ease: Power2.easeInOut
                            ease: Power1.easeIn,
                            onComplete: function () {
                                currentElement.animPlaying = 0;
                            }
                        });
                    }
                });

            }, 350);


        }, /*currentElement.numIndex * */ 0) //75 For a delay between the animations set delay in ms


};

window.openMenu = function () {
    console.log(open)

    if (transtioning == 0) {
        tm.menu.element = tm.function.newHTML(tm.store.modalHtml);
        document.body.appendChild(tm.menu.element);
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
                document.body.removeChild(tm.menu.element);
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
        width: "2.5rem"
    });
    setTimeout(function () {
        TweenLite.to(".line2", dur, {
            width: "2.5rem"
        });
        setTimeout(function () {
            TweenLite.to(".line3", dur, {
                width: "2.5rem"
            });
        }, delay);
    }, delay);
}

window.closeAnim = function () {
    var delay = 200;
    var dur = 0.4;
    TweenLite.to(".line3", dur, {
        width: "0"
    });
    setTimeout(function () {
        TweenLite.to(".line2", dur, {
            width: "0"
        });
        setTimeout(function () {
            TweenLite.to(".line1", dur, {
                width: "0"
            });
        }, delay);
    }, delay);


};
