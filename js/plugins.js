// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.



//jquery.ddslick.min.js

//for drop down boxes
(function (a) {
    function g(a, b) {
        var c = a.data("ddslick");
        var d = a.find(".dd-selected"),
            e = d.siblings(".dd-selected-value"),
            f = a.find(".dd-options"),
            g = d.siblings(".dd-pointer"),
            h = a.find(".dd-option").eq(b),
            k = h.closest("li"),
            l = c.settings,
            m = c.settings.data[b];
        a.find(".dd-option").removeClass("dd-option-selected");
        h.addClass("dd-option-selected");
        c.selectedIndex = b;
        c.selectedItem = k;
        c.selectedData = m;
        if (l.showSelectedHTML) {
            d.html((m.imageSrc ? '<img class="dd-selected-image' + (l.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + m.imageSrc + '" />' : "") + (m.text ? '<label class="dd-selected-text">' + m.text + "</label>" : "") + (m.description ? '<small class="dd-selected-description dd-desc' + (l.truncateDescription ? " dd-selected-description-truncated" : "") + '" >' + m.description + "</small>" : ""))
        } else d.html(m.text);
        e.val(m.value);
        c.original.val(m.value);
        a.data("ddslick", c);
        i(a);
        j(a);
        if (typeof l.onSelected == "function") {
            l.onSelected.call(this, c)
        }
    }

    function h(b) {
        var c = b.find(".dd-select"),
            d = c.siblings(".dd-options"),
            e = c.find(".dd-pointer"),
            f = d.is(":visible");
        a(".dd-click-off-close").not(d).slideUp(50);
        a(".dd-pointer").removeClass("dd-pointer-up");
        if (f) {
            d.slideUp("fast");
            e.removeClass("dd-pointer-up")
        } else {
            d.slideDown("fast");
            e.addClass("dd-pointer-up")
        }
        k(b)
    }

    function i(a) {
        a.find(".dd-options").slideUp(50);
        a.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")
		a.find('.dd-selected').css({'color':'#787474'});
    }

    function j(a) {
        var b = a.find(".dd-select").css("height");
        var c = a.find(".dd-selected-description");
        var d = a.find(".dd-selected-image");
        if (c.length <= 0 && d.length > 0) {
            a.find(".dd-selected-text").css("lineHeight", b)
        }
    }

    function k(b) {
        b.find(".dd-option").each(function () {
            var c = a(this);
            var d = c.css("height");
            var e = c.find(".dd-option-description");
            var f = b.find(".dd-option-image");
            if (e.length <= 0 && f.length > 0) {
                c.find(".dd-option-text").css("lineHeight", d)
            }
        })
    }
    a.fn.ddslick = function (c) {
        if (b[c]) {
            return b[c].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof c === "object" || !c) {
            return b.init.apply(this, arguments)
        } else {
            a.error("Method " + c + " does not exists.")
        }
    };
    var b = {}, c = {
            data: [],
            keepJSONItemsOnTop: false,
            width: "100%",
			height: null,
            background: "#eee",
            selectText: "",
            defaultSelectedIndex: null,
            truncateDescription: true,
            imagePosition: "left",
            showSelectedHTML: true,
            clickOffToClose: true,
            onSelected: function () {}
        }, d = '<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>',
        e = '<ul class="dd-options"></ul>',
        f = '<style id="css-ddslick" type="text/css">' + ".dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}" + ".dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }" + ".dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold; background:url(../img/page/sl-bg.jpg); background-repeat: repeat-x; background-color:#f7e600}" + ".dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}" + ".dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }" + ".dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}" + ".dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}" + ".dd-option{ padding:10px; display:block; border-top: solid 3px #fff; border-bottom:solid 1px #fff; overflow:hidden; text-decoration:none;  cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }" + ".dd-options > li:last-child > .dd-option{ border-bottom:none;}" + ".dd-option:hover{ background:#f7e600; /*color:#000;*/}" + ".dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }" + ".dd-option-selected { background:#f6f6f6; }" + ".dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}" + ".dd-image-right { float:right; margin-right:15px; margin-left:5px;}" + ".dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style>";
    if (a("#css-ddslick").length <= 0) {
        a(f).appendTo("head")
    }
    b.init = function (b) {
        var b = a.extend({}, c, b);
        return this.each(function () {
            var c = a(this),
                f = c.data("ddslick");
            if (!f) {
                var i = [],
                    j = b.data;
                c.find("option").each(function () {
                    var b = a(this),
                        c = b.data();
                    i.push({
                        text: a.trim(b.text()),
                        value: b.val(),
                        selected: b.is(":selected"),
                        description: c.description,
                        imageSrc: c.imagesrc
                    })
                });
                if (b.keepJSONItemsOnTop) a.merge(b.data, i);
                else b.data = a.merge(i, b.data);
                var k = c,
                    l = a('<div id="' + c.attr("id") + '"></div>');
                c.replaceWith(l);
                c = l;
                c.addClass("dd-container").append(d).append(e);
                var i = c.find(".dd-select"),
                    m = c.find(".dd-options");
                m.css({
                    width: b.width
                });
                i.css({
                    width: b.width,
                    background: b.background
                });
                c.css({
                    width: b.width
                });
                if (b.height != null) m.css({
                    height: b.height,
                    overflow: "auto"
                });
                a.each(b.data, function (a, c) {
                    if (c.selected) b.defaultSelectedIndex = a;
                    m.append("<li>" + '<a class="dd-option">' + (c.value ? ' <input class="dd-option-value" type="hidden" value="' + c.value + '" />' : "") + (c.imageSrc ? ' <img class="dd-option-image' + (b.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + c.imageSrc + '" />' : "") + (c.text ? ' <label class="dd-option-text">' + c.text + "</label>" : "") + (c.description ? ' <small class="dd-option-description dd-desc">' + c.description + "</small>" : "") + "</a>" + "</li>")
                });
                var n = {
                    settings: b,
                    original: k,
                    selectedIndex: -1,
                    selectedItem: null,
                    selectedData: null
                };
                c.data("ddslick", n);
                if (b.selectText.length > 0 && b.defaultSelectedIndex == null) {
                    c.find(".dd-selected").html(b.selectText)
                } else {
                    var o = b.defaultSelectedIndex != null && b.defaultSelectedIndex >= 0 && b.defaultSelectedIndex < b.data.length ? b.defaultSelectedIndex : 0;
                    g(c, o)
                }
                c.find(".dd-select").on("click.ddslick", function () {
                    h(c)
                });
                c.find(".dd-option").on("click.ddslick", function () {
                    g(c, a(this).closest("li").index())
                });
                if (b.clickOffToClose) {
                    m.addClass("dd-click-off-close");
                    c.on("click.ddslick", function (a) {
                        a.stopPropagation()
                    });
                    a("body").on("click", function () {
                        a(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up")
                    })
                }
            }
        })
    };
    b.select = function (b) {
        return this.each(function () {
            if (b.index) g(a(this), b.index)
        })
    };
    b.open = function () {
        return this.each(function () {
            var b = a(this),
                c = b.data("ddslick");
            if (c) h(b)
        })
    };
    b.close = function () {
        return this.each(function () {
            var b = a(this),
                c = b.data("ddslick");
            if (c) i(b)
        })
    };
    b.destroy = function () {
        return this.each(function () {
            var b = a(this),
                c = b.data("ddslick");
            if (c) {
                var d = c.original;
                b.removeData("ddslick").unbind(".ddslick").replaceWith(d)
            }
        })
    }
})(jQuery)


/*
 * iOS.js v1.0 (compressed)
 * http://www.iOSjs.com/
 *
 * Developed by Empty Galaxy
 * http://www.emptygalaxy.com/
 *
 * Copyright (c) 2011
 * Dual-licensed under the BSD or MIT licenses.
 * http://www.iOSjs.com/license/
 */
iOS_addEventListener(window,"load",iOS_handleWindowLoad);iOS_addEventListener(window,"orientationchange",iOS_handleOrientationChange);iOS_addEventListener(window,"resize",iOS_handleReize);function iOS_addEventListener(obj,evType,fn){if(obj.addEventListener){obj.addEventListener(evType,fn,false);return true}else if(obj.attachEvent){var r=obj.attachEvent("on"+evType,fn);return r}else{return false}}function iOS_removeEventListener(obj,evType,fn){if(obj.removeEventListener){obj.removeEventListener(evType,fn,false);return true}else if(obj.detachEvent){var r=obj.detachEvent("on"+evType,fn);return r}else{return false}}function iOS_handleWindowLoad(e){iOS_initPage();iOS_updateOrientation();iOS_updateHeight();setTimeout("iOS_hideAddressBar();",100)}function iOS_handleOrientationChange(e){iOS_updateOrientation();iOS_resize();setTimeout("iOS_hideAddressBar();",100)}function iOS_handleReize(e){iOS_resize()}function iOS_initPage(){if(navigator.standalone)iOS_createWebappLinks();var ua=navigator.userAgent;if(iOS_isiOSdevice()){var html=document.documentElement;var classes=html.className.split(" ");if(classes.indexOf("iOS")==-1)classes.push("iOS");if(iOS_hasRetinaDisplay()&&classes.indexOf("retina")==-1)classes.push("retina");html.className=classes.join(" ");if(ua.indexOf("iPhone")>-1)html.setAttribute("device","iPhone");else if(ua.indexOf("iPod")>-1)html.setAttribute("device","iPod");else if(ua.indexOf("iPad")>-1)html.setAttribute("device","iPad");if(ua.indexOf("iPhone")>-1||ua.indexOf("iPod")>-1)html.setAttribute("deviceFamily","iPhone_iPod");else if(ua.indexOf("iPad")>-1)html.setAttribute("deviceFamily","iPad")}}function iOS_updateOrientation(){var orientation="portrait";if(window.orientation==90||window.orientation==-90)orientation="landscape";document.documentElement.setAttribute("orientation",orientation)}function iOS_resize(){iOS_updateHeight()}function iOS_hideAddressBar(){if(window.pageYOffset<=1)window.scrollTo(window.pageXOffset,1)}function iOS_disableScrolling(){iOS_addEventListener(document.body,"touchmove",iOS_preventScrolling)}function iOS_enableScrolling(){iOS_removeEventListener(document.body,"touchmove",iOS_preventScrolling)}function iOS_preventScrolling(e){{e.preventDefault();iOS_hideAddressBar()}}function iOS_disableZooming(){iOS_addEventListener(document.body,"touchmove",iOS_preventZooming)}function iOS_enableZooming(){iOS_removeEventListener(document.body,"touchmove",iOS_preventZooming)}function iOS_preventZooming(e){if(e.touches.length==2)e.preventDefault()}function iOS_updateHeight(){var viewportSize=iOS_getViewportSize();document.body.style.minHeight=Math.round(viewportSize.height)+"px"}function iOS_createWebappLinks(){var aList=document.getElementsByTagName("a");for(var i=0;i<aList.length;i++){var a=aList[i];if(a.href!=""&&a.target==""){a.onclick=function(){window.location=this.getAttribute("href");return false}}}}function iOS_isiOSDevice(){return navigator.userAgent.indexOf("iPhone")>-1||navigator.userAgent.indexOf("iPod")>-1||navigator.userAgent.indexOf("iPad")>-1}function iOS_isiPhone(){return navigator.userAgent.indexOf("iPhone")>-1}function iOS_isiPod(){return navigator.userAgent.indexOf("iPod")>-1}function iOS_isiPad(){return navigator.userAgent.indexOf("iPad")>-1}function iOS_hasRetinaDisplay(){return window.devicePixelRatio>1}function iOS_normalGetWindowSize(){var width=0;var heigth=0;if(typeof(window.innerWidth)=="number"){width=window.innerWidth;height=window.innerHeight}else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){width=document.documentElement.clientWidth;height=document.documentElement.clientHeight}else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){width=document.body.clientWidth;height=document.body.clientHeight}return{width:width,height:height}}function iOS_getWindowSize(){var width=0;var height=0;var ua=navigator.userAgent;if(iOS_isiOSdevice()){width=screen.width;height=screen.height;if(window.orientation!=0){var temp=width;width=height;height=temp}if(!(navigator.standalone&&iOS_getMetaContent("apple-mobile-web-app-status-bar-style").toLowerCase()=="black-translucent"))height-=20;if(ua.indexOf("iPhone")>-1||ua.indexOf("iPod")>-1){if(!navigator.standalone){if(window.orientation==0)height-=44;else height-=32}}if(ua.indexOf("iPad")>-1){if(!navigator.standalone)height-=58}}else{var size=iOS_normalGetWindowSize();width=size.width;height=size.height}return{width:width,height:height}}function iOS_getViewportSize(){var windowSize=iOS_getWindowSize();var bodySize=iOS_getElementSize(document.body);var scale=bodySize.width/windowSize.width;return{width:(windowSize.width*scale),height:(windowSize.height*scale)}}function iOS_getPageSize(){var bodySize=iOS_getElementSize(document.body);return bodySize}function iOS_getElementSize(element){var ns4;if(ns4){var elem=getObjNN4(document,element);return{width:elem.clip.width,height:elem.clip.height}}else{if(document.all)return{width:element.style.pixelWidth,height:element.style.pixelHeight};else return{width:element.offsetWidth,height:element.offsetHeight}}}function iOS_getMetaContent(name){name=name.toLowerCase();var metaList=document.getElementsByTagName("meta");for(var i=0;i<metaList.length;i++){var meta=metaList[i];if(meta.name.toLowerCase()==name){return meta.content}}return null}function iOS_isiOSdevice(){var ua=navigator.userAgent;return(ua.indexOf("iPhone")>-1||ua.indexOf("iPod")>-1||ua.indexOf("iPad")>-1)}