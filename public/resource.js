(function ($) {
    //浏览器兼容性处理
    var _prefix = (function (temp) {
        var aPrefix = ["webkit", "Moz", "o", "ms"],
            props = "";
        for (var i in aPrefix) {
            props = aPrefix[i] + "Transition";
            if (temp.style[props] != undefined) {
                return "-" + aPrefix[i].toLowerCase() + "-";
            }
        }
        return false;
    })(document.createElement(PageSwitch));

    /*
     * 闭包的运用，对外只暴露一个变量PageSwitch
     */
    var PageSwitch = (function () {
        //PageSwitch构造函数
        function PageSwitch(element, options) {
            this.settings = $.extend(true, $.fn.PageSwitch.defaults, options || {});
            this.element = element;
            this.init();
        }
        //构造函数原型上挂载实例方法
        PageSwitch.prototype = {
            //初始化
            init: function () {
                var me = this;
                me.selectors = me.settings.selectors;
                me.sections = me.element.find(me.selectors.sections);
                me.section = me.sections.find(me.selectors.section);
                me.pagesCount = me.pagesCount();
                me.index = me.settings.index;
                //页面布局初始化
                this._initPaging();
                //事件初始化
                this._initEvent();

            },
            //返回滚动页数
            pagesCount: function () {
                return this.section.length;
            },
            //向上滚动，改变对象的index属性值，每滚动一次属性值自减一
            prev: function () {
                var me = this;
                if (me.index > 0) {
                    me.index--;
                }
                //调用滚动方法，该方法根据index值确定滚动大小
                me._scrollPage();
            },
            //向下滚动，改变对象的index属性值，每滚动一次属性值自加一
            next: function () {
                var me = this;
                if (me.index < me.pagesCount) {
                    me.index++;
                }
                me._scrollPage();
            },
            _initPaging: function () {
                var me = this,
                    pagesClass = me.selectors.pages.substring(1);
                me.activeClass = me.selectors.active.substring(1);
                var pageHtml = "<ul class=" + pagesClass + ">";
                for (var i = 0; i < me.pagesCount; i++) {
                    pageHtml += "<li></li>";
                }
                pageHtml += "</ul>";
                me.element.append(pageHtml);
                var pages = me.element.find(me.selectors.pages);
                me.pageItem = pages.find("li");
                //页面初始化时，给第一个li添加active类名
                me.pageItem.eq(me.index).addClass(me.activeClass);

            },
            _initEvent: function () {
                var me = this;
                //绑定点击事件，这里使用事件委托的形式，减少资源消耗
                me.element.on("click", me.selectors.pages + " li", function () {
                    me.index = $(this).index();
                    me._scrollPage();

                });
                //绑定滚轮事件，同上
                me.element.on("mousewheel DOMMouseSroll", function (e) {
                    var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                    //console.log(delta);
                    if (delta > 0) {
                        me.prev();
                    }
                    if (delta < 0) {
                        me.next();
                    }
                })
            },
            _scrollPage: function () {
                var me = this,
                    dest = me.section.eq(me.index).position();
                if (!dest) return;
                if (_prefix) {
                    //	console.log("nihao")
                    me.sections.css(_prefix + "transition", "all " + me.settings.duration + "ms " + me.settings.easing);
                    var translate = "translateY(-" + dest.top + "px)";
                    me.sections.css(_prefix + "transform", translate);
                } else {
                    var animateCss = {
                        top: -dest.top
                    };
                    me.sections.animate(animateCss, me.settings.duration);
                }
                me.pageItem.eq(me.index).addClass(me.activeClass).siblings("li").removeClass(me.activeClass);

            }

        }
        return PageSwitch; //返回构造函数，赋给外面接受的PageSwitch
    })();
    $.fn.PageSwitch = function (options) {
        //单例模式创建实例对象
        return this.each(function () {
            var me = $(this),
                instance = me.data("PageSwitch");
            if (!instance) {
                instance = new PageSwitch(me, options);
                me.data("PageSwitch", instance);
            }

        })
    }
    $.fn.PageSwitch.defaults = {
        selectors: {
            sections: ".sections",
            section: ".section",
            pages: ".pages",
            active: ".active"

        },
        index: 0,
        easing: "ease",
        duration: 1000
    }
})(jQuery);