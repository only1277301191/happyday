$(document).ready(function () {
    let curindex = 0;
    let flag = false;
    let isClick = false;
    let isProgressShow = false;
    let isExperience = false;
    setNavIndexPosition(curindex);
    $(".menu-list > ul > li").hover(function () {
        curindex = $(".menu-list > ul > li.active").index();
        setNavActive($(this).index())
        setNavIndexPosition($(this).index());
    },function () {
        setNavActive(curindex);
        setNavIndexPosition(curindex);
    });
    $(".menu-list > ul > li").click(function (e) {
        let clickMode = $(this).index();
            curindex = clickMode;
            setNavActive(curindex);
            isClick = true;
            console.log("׼����ת");
            $(document.body).animate({
                scrollTop: $(".mode").eq(clickMode).offset().top - $("header").outerHeight() * 2
            }, 600, function () {
                isClick = false;
                console.log("-----------------" + $(".main").scrollTop());
                setNavIndexPosition(curindex);
                console.log("��ת�ɹ�");
            });
        // setNavActive(curindex);
        
    });
    $(".content > ul > li").click(function (e) {
        let clickMode = $(this).index();
            curindex = clickMode;
            setNavActive(curindex);
            isClick = true;
            $(document.body).animate({
                scrollTop: $(".mode").eq(clickMode).offset().top - $("header").outerHeight() * 2
            }, 600, function () {
                isClick = false;
                setNavIndexPosition(curindex);
            });
        // setNavActive(curindex);

    });
    $(window).on('scroll', function(ev) {
        console.log($(document.body).scrollTop());
        console.log("offset:" + $(".mode.skills.technical").offset().top);
        console.log("outerHeight:" + $(".mode.skills.technical").outerHeight());
        console.log("curTop:" + ($(document.body).scrollTop() + $(".mode.skills.technical").outerHeight()));
        var top = $(document.body).scrollTop() + $("header").outerHeight() * 3;
        var index = 0;
        if($(".mode.skills.technical").offset().top  + $(".mode.skills.technical").outerHeight()>= $(document.body).scrollTop() && $(".mode.skills.technical").offset().top<= $(document.body).scrollTop() + $(".mode.skills.technical").outerHeight()){
            if(!isProgressShow) {
                isProgressShow = true;
                // $(".progress > .cur-progress").css({width: 0 + "%"});
                // $(".progress > .dot").css({left: 0 + "%"});
                $(".progress > .cur-progress").each(function (index) {
                    $(this).stop().animate({
                            width: $(this).attr("data") + "%"
                    }, 2000);
                });
                $(".progress > .dot").each(function (index) {
                    $(this).stop().animate({
                        left: $(this).attr("data") + "%"
                    }, 2000);
                });
            }
        }else   if($(".mode.skills.technical").offset().top  + $(".mode.skills.technical").outerHeight()<= $(document.body).scrollTop() || $(".mode.skills.technical").offset().top>= $(document.body).scrollTop() + $(".mode.skills.technical").outerHeight()){
            if(isProgressShow) {
                isProgressShow = false
                $(".progress > .cur-progress").stop().css({width: 0 + "%"});
                $(".progress > .dot").stop().css({left: 0 + "%"});
                // $(".progress > .cur-progress").stop().animate({width: 40 + "%"}, 1000);
                // $(".progress > .dot").stop().animate({left: 40 + "%"}, 1000);
            }
        }
        if($(".skills.experience").offset().top  + $(".skills.experience").outerHeight()>= $(document.body).scrollTop() && $(".skills.experience").offset().top<= $(document.body).scrollTop() + $(".skills.experience").outerHeight()){
            if(!isExperience) {
                isExperience = true;
                // $(".progress > .cur-progress").css({width: 0 + "%"});
                // $(".progress > .dot").css({left: 0 + "%"});
                $(".experience-child > li:even").each(function (index) {
                    let cur = $(this);
                    $(this).stop().animate({
                        left: "0%"
                    }, 2000);
                });
                $(".experience-child > li:odd").each(function (index) {
                    let cur = $(this);
                    $(this).stop().animate({
                        right: "0%"
                    }, 2000);
                });
            }
        }else   if($(".skills.experience").offset().top  + $(".skills.experience").outerHeight()<= $(document.body).scrollTop() || $(".skills.experience").offset().top>= $(document.body).scrollTop() + $(".skills.experience").outerHeight()){
            if(isExperience) {
                isExperience = false
                $(".experience-child > li:even").stop().css({
                        left: "-100%"
                });
                $(".experience-child > li:odd").stop().css({
                        right: "-100%"
                });
                // $(".progress > .cur-progress").stop().animate({width: 40 + "%"}, 1000);
                // $(".progress > .dot").stop().animate({left: 40 + "%"}, 1000);
            }
        }

        $(".mode").each(function () {
            index = $(this).offset().top <= top ? $(this).index() : index;
        });
        if(!flag && !isClick) {
            flag = true;
            setNavActive(index);
            setNavIndexPosition(index);
        }
    });
    function setNavIndexPosition(index, call) {
        let cur = $(".menu-list > ul > li").eq(index);
            $(".menu-list > ul >.index").stop().animate({
                left: cur.position().left,
                width: cur.outerWidth()
            }, 400, function () {
                flag = false;
            });

    }
    function setNavActive(index) {
        $(".menu-list > ul > li.active").removeClass("active");
        $(".menu-list > ul > li").eq(index).addClass("active");
    }

    var myScroll = new IScroll('.wrapper', {
        mouseWheel: true,
        scrollbars: true,
        fadeScrollbars: true,
        interactiveScrollbars: true,
        scrollbars: 'custom'
    });
    let menuIsShow = false;
    let morelistShow = false;
    $("header.container>.menu").click(function (e) {
        $(".slidemenu").addClass("active");
        menuIsShow = true;
        e.stopPropagation();
    });
    $(".menu-list > .more").click(function (e) {
        morelistShow = true;
        if($(".menu-list > .more > .morelist").hasClass("active")){
            $(".menu-list > .more > .morelist").removeClass("active");
            return;
        }else {
            $(".menu-list > .more > .morelist").addClass("active");
        }
        e.stopImmediatePropagation();
    });
    $(".main").click(function (e) {
        if(menuIsShow){
            $(".slidemenu").removeClass("active");
        }
        if(morelistShow){
            $(".menu-list > .more > .morelist").removeClass("active");
        }
    });
    let subindex = 0;
    $(".testimonial>.row>.testimonial-main>.scrol-child>.button").click(function (e) {
       if($(e.target).hasClass("left")){
           subindex -= 1;
           if(subindex < 0){
               subindex = 0;
               return;
           }
           $(".scrol-child-main").animate({
               left: -subindex * 100 + "%"
           })
       } else if($(e.target).hasClass("right")){
            subindex += 1;
            if(subindex >= $(".scrol-child-main-child>li").length){
                subindex = $(".scrol-child-main-child>li").length - 1;
                return;
            }
            $(".scrol-child-main").animate({
                left: -subindex * 100 + "%"
            })
        }
    });

    $(".more").click(function () {
        $(".menu-list > .more > .morelist").toggleClass("active");
    });
});