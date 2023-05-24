$(document).ready(function ($) {
    function slider() {
        const a = document.querySelectorAll(".slide-parent > div").length
        for (let i = 2; i <= a;) {
            $(".slider-parent-btn div:first").clone().appendTo(".slider-parent-btn").attr({"id": i})
            i++
        }
        for (let i = 1; i <= a;) {
            let x = "#" + "" + "slide" + "" + i
            $(".slide:nth-of-type(" + i + ")").attr({"id": x})
            $(".slider-nav-btn:nth-of-type(" + i + ")").attr({"id": i})
            i++
        }
    }

    function hideAll() {
        $(".slide").hide()
        $(".slider-nav-btn").removeClass("active-slider-btn").removeClass("showed")
    }

    function firstSlideShow() {
        showAnimation()
        $("#1").addClass("active-slider-btn").addClass("showed")
        $(".slide-parent > div:nth-of-type(1)").show()
    }

    function hideAnimation() {
        $(".slider-left-bottom-img")
            .addClass("slider-left-bottom-img-exit")
            .removeClass("slider-left-bottom-img-enter")
        $(".slider-right-bottom-img")
            .addClass("slider-right-bottom-img-exit")
            .removeClass("slider-right-bottom-img-enter")
        $(".slider-right-top-img")
            .addClass("slider-right-top-img-exit")
            .removeClass("slider-right-top-img-enter")
        $(".animate-text")
            .addClass("slide-center-text-exit")
            .removeClass("slide-center-text-enter")
        $(".slider-left-top-img")
            .addClass("slider-left-top-img-exit")
            .removeClass("slider-left-top-img-enter")
        $(".slider-nav-btn")
            .addClass("slider-btn-exit")
            .removeClass("slider-btn-enter")
    }

    function showAnimation() {
        $(".slider-left-bottom-img")
            .removeClass("slider-left-bottom-img-exit")
            .addClass("slider-left-bottom-img-enter")
        $(".slider-right-bottom-img")
            .removeClass("slider-right-bottom-img-exit")
            .addClass("slider-right-bottom-img-enter")
        $(".slider-right-top-img")
            .removeClass("slider-right-top-img-exit")
            .addClass("slider-right-top-img-enter")
        $(".animate-text")
            .removeClass("slide-center-text-exit")
            .addClass("slide-center-text-enter")
        $(".slider-left-top-img")
            .removeClass("slider-left-top-img-exit")
            .addClass("slider-left-top-img-enter")
        $(".slider-nav-btn")
            .removeClass("slider-btn-exit")
            .addClass("slider-btn-enter")
    }

    function showItem(s) {
        var d = "#" + "" + s
        $(d).addClass("showed").addClass("active-slider-btn")
        $(".slide-parent > div:nth-of-type(" + s + ")").show()
    }

    function hideItem(s) {
        $(".showed").removeClass("showed").removeClass("active-slider-btn")
        $(".slide-parent > div:nth-of-type(" + s + ")").hide()
    }

    function next() {
        var s = $(".showed").attr("id")
        hideItem(s)
        s++
        const a = document.querySelectorAll(".slider-parent-btn div").length
        if (s > a) {
            s = 1
        }
        showItem(s)
    }

    function prev() {
        var s = $(".showed").attr("id")
        hideItem(s)
        s--
        const a = document.querySelectorAll(".slider-parent-btn div").length
        if (s < 1) {
            s = a
        }
        showItem(s)
    }

    function keyBoardFunc() {
        document.addEventListener('keyup', (event) => {
            let name = event.key;
            // Alert the key name and key code on keydown
            if (name === "ArrowDown") {
                setTimeout(function () {
                    hideAnimation();
                }, 10);
                setTimeout(function () {
                    next();
                }, 700);
                setTimeout(function () {
                    showAnimation();
                }, 700);
            }
            if (name === "ArrowUp") {
                setTimeout(function () {
                    hideAnimation();
                }, 10);
                setTimeout(function () {
                    prev();
                }, 700);
                setTimeout(function () {
                    showAnimation();
                }, 700);
            }
        }, false);
    }

    slider()
    hideAll()
    firstSlideShow()
    keyBoardFunc()
    $(".slider-next-btn").click(function () {
        setTimeout(function () {
            hideAnimation();
        }, 10);
        setTimeout(function () {
            next();
        }, 1000);
        setTimeout(function () {
            showAnimation();
        }, 1000);

    })
    $(".slider-nav-btn").click(function () {
        let thisId = $(this).attr("id")
        $(".showed").removeClass("showed").removeClass("active-slider-btn")
        $(this).addClass("showed").addClass("active-slider-btn");
        setTimeout(function () {
            hideAnimation();
        }, 10);
        setTimeout(function () {
            $(".slide").hide()
            $(".slide-parent div:nth-of-type(" + thisId + ")").show()
        }, 700);
        setTimeout(function () {
            showAnimation();
        }, 700);
    })
    const slidernext = document.querySelector('.slider-next-btn');
    const sliderNav = document.querySelector('.slider-nav-btn-section');
    let autoplayInterval1;
    autoplayInterval1 = setInterval(function () {
        setTimeout(function () {
            hideAnimation();
        }, 10);
        setTimeout(function () {
            next();
        }, 900);
        setTimeout(function () {
            showAnimation();
        }, 900);
    }, 5000);

    function stop1() {
        clearInterval(autoplayInterval1)
    }

    slidernext.addEventListener('mouseenter', () => {
        stop1()
    });
    sliderNav.addEventListener('mouseenter', () => {
        stop1()
    });
    slidernext.addEventListener('mouseleave', () => {
        autoplayInterval1 = setInterval(function () {
            setTimeout(function () {
                hideAnimation();
            }, 10);
            setTimeout(function () {
                next();
            }, 900);
            setTimeout(function () {
                showAnimation();
            }, 900);
        }, 5000);
    });
    sliderNav.addEventListener('mouseleave', () => {
        autoplayInterval1 = setInterval(function () {
            setTimeout(function () {
                hideAnimation();
            }, 10);
            setTimeout(function () {
                next();
            }, 900);
            setTimeout(function () {
                showAnimation();
            }, 900);
        }, 5000);
    });


// --------------------------slider-2----------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
    function slider2() {
        const a = document.querySelectorAll(".slide-parent-2 > div").length
        for (let i = 2; i <= a;) {
            $(".slider-parent-btn-2 div:first").clone().appendTo(".slider-parent-btn-2").attr({"id": i})
            i++
        }
        for (let i = 1; i <= a;) {
            let x = "#" + "" + "slide" + "" + i
            $(".slide-2:nth-of-type(" + i + ")").attr({"id": x})
            $(".slider-nav-btn-2:nth-of-type(" + i + ")").attr({"id": i})
            i++
        }
    }

    function hideAll2() {
        $(".slide-2").hide()
        $(".slider-nav-btn-2").removeClass("active-slider-btn-2").removeClass("showed-2")
    }

    function firstSlideShow2() {
        showAnimation2()
        $(".slider-parent-btn-2 > div:first").addClass("active-slider-btn-2").addClass("showed-2")
        $(".slide-parent-2 > div:nth-of-type(1)").show()
    }

    function hideAnimation2() {
        $(".slide-center-img-2")
            .addClass("slider-center-img-exit-2")
            .removeClass("slider-center-img-enter-2")
        $(".slide-center-text-2")
            .addClass("slide-center-text-exit-2")
            .removeClass("slide-center-text-enter-2")
    }

    function showAnimation2() {
        $(".slide-center-img-2")
            .removeClass("slider-center-img-exit-2")
            .addClass("slider-center-img-enter-2")
        $(".slide-center-text-2")
            .removeClass("slide-center-text-exit-2")
            .addClass("slide-center-text-enter-2")

    }

    function showItem2(s) {
        $(".slider-parent-btn-2 >div:nth-of-type(" + s + ")").addClass("showed-2").addClass("active-slider-btn-2")
        $(".slide-parent-2 > div:nth-of-type(" + s + ")").show()
    }

    function hideItem2(s) {
        $(".showed-2").removeClass("showed-2").removeClass("active-slider-btn-2")
        $(".slide-parent-2 > div:nth-of-type(" + s + ")").hide()
    }

    function next2() {
        var s = $(".showed-2").attr("id")
        hideItem2(s)
        s++
        const a = document.querySelectorAll(".slider-parent-btn-2 div").length
        if (s > a) {
            s = 1
        }
        showItem2(s)
    }

    function prev2() {
        var s = $(".showed-2").attr("id")
        hideItem2(s)
        s--
        const a = document.querySelectorAll(".slider-parent-btn-2 div").length
        if (s < 1) {
            s = a
        }
        showItem2(s)
    }

    function keyBoardFunc2() {
        document.addEventListener('keyup', (event) => {
            let name = event.key;
            // Alert the key name and key code on keydown
            if (name === "ArrowDown") {
                setTimeout(function () {
                    hideAnimation2();
                }, 10);
                setTimeout(function () {
                    next2();
                }, 700);
                setTimeout(function () {
                    showAnimation2();
                }, 700);
            }
            if (name === "ArrowUp") {
                setTimeout(function () {
                    hideAnimation2();
                }, 10);
                setTimeout(function () {
                    prev2();
                }, 700);
                setTimeout(function () {
                    showAnimation2();
                }, 700);
            }
        }, false);
    }

    slider2()
    hideAll2()
    firstSlideShow2()
    keyBoardFunc2()
    $(".slider-next-btn-2").click(function () {
        setTimeout(function () {
            hideAnimation2();
        }, 10);
        setTimeout(function () {
            next2();
        }, 1000);
        setTimeout(function () {
            showAnimation2();
        }, 1000);

    })
    $(".slider-nav-btn-2").click(function () {
        let thisId = $(this).attr("id")
        $(".showed-2").removeClass("showed-2").removeClass("active-slider-btn-2")
        $(this).addClass("showed-2").addClass("active-slider-btn-2");
        setTimeout(function () {
            hideAnimation2();
        }, 10);
        setTimeout(function () {
            $(".slide-2").hide()
            $(".slide-parent-2 div:nth-of-type(" + thisId + ")").show()
        }, 700);
        setTimeout(function () {
            showAnimation2();
        }, 700);
    })
    const slidernext2 = document.querySelector('.slider-next-btn-2');
    const sliderNav2 = document.querySelector('.slider-nav-btn-section-2');
    let autoplayInterval;
    autoplayInterval = setInterval(function () {
        setTimeout(function () {
            hideAnimation2();
        }, 10);
        setTimeout(function () {
            next2();
        }, 900);
        setTimeout(function () {
            showAnimation2();
        }, 900);
    }, 15000);

    function stop() {
        clearInterval(autoplayInterval)
    }

    slidernext2.addEventListener('mouseenter', () => {
        stop()
    });
    sliderNav2.addEventListener('mouseenter', () => {
        stop()
    });
    slidernext2.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(function () {
            setTimeout(function () {
                hideAnimation2();
            }, 10);
            setTimeout(function () {
                next2();
            }, 900);
            setTimeout(function () {
                showAnimation2();
            }, 900);
        }, 15000);
    });
    sliderNav2.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(function () {
            setTimeout(function () {
                hideAnimation2();
            }, 10);
            setTimeout(function () {
                next2();
            }, 900);
            setTimeout(function () {
                showAnimation2();
            }, 900);
        }, 15000);
    });
// --------------------------------end slider-2-----------------------------------------------------------------------
//----------guide panel---------------------------------------------------------------------------------------------------
    function guidePanel() {
        const b = document.querySelectorAll(".guide-panel-btns > div").length;
        for (let v = 1; v <= b;) {
            let x = "guidePanel" + "" + v;
            $(".guide-panel-btns > div:nth-of-type(" + v + ")").attr({"id": v});
            $(".guide-panel-items > img:nth-of-type(" + v + ")").attr({"id": x});
            v++
        }
    }

    function disAll() {
        $(".guide-panel-btns > div").removeClass("guide-btn-active");
        $(".guide-panel-items > img").hide();
    }

    function firstPanel() {
        $(".guide-panel-btns > div:first").addClass("guide-btn-active");
        $(".guide-panel-items > img:first").show();
    }

    guidePanel();
    disAll();
    firstPanel();
    $(".guide-panel-btns > div").mouseenter(function () {
        let g = $(this).attr("id");
        let j = "#" + "" + "guidePanel" + "" + g; // #guidePanel2
        disAll();
        $(this).addClass("guide-btn-active");
        $(j).show();
    })
// ----------end guide panel-----------------------------------------------------------------------------------------
});
jQuery(window).on("load", function () {
        jQuery(".loader").fadeOut(500);
    });

