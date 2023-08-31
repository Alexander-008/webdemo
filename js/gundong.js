// function scrollList() {
//     let firstItem = $('#scroll-list li:first');
//     let itemHeight = firstItem.outerHeight();
//
//     // 使用animate方法向上滚动一个li的高度
//     $('#scroll-list').animate({marginTop: -itemHeight},700, function() {
//         // 将第一个li移到ul的末尾
//         $(this).append(firstItem).css({marginTop: 0});
//     });
// }
//
// // 每隔3秒调用一次scrollList函数
// setInterval(scrollList,2000);

function domReady(fn) {
    if (document.addEventListener) { //标准浏览器
        //当纯 HTML 被完全加载以及解析时，DOMContentLoaded 事件会被触发，而不必等待样式表，图片或者子框架完成加载。
        document.addEventListener('DOMContentLoaded', function() {
            //注销时间，避免重复触发
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            fn(); //运行函数
        }, false);
    } else if (document.attachEvent) { //IE浏览器
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState == 'complete') {
                document.detachEvent('onreadystatechange', arguments.callee);
                fn(); //函数运行
            }
        });
    }
}

function jsScroll() {
    //直接利用js实现，有点卡的感觉，没有动画，效果不佳，只提供思路，可以再琢磨优化
    var isStop = false;
    var cont = document.getElementById("scrollContent");
    cont.scrollTop = 0;
    cont.onmouseover = function() {
        isStop = true;
    }
    cont.onmouseout = function() {
        isStop = false;
    }

    function startScroll() {
        if (isStop) {
            console.log("暂停中");
        } else {
            if (cont.scrollTop >= (cont.scrollHeight - cont.offsetHeight)) {
                cont.scrollTop = 0;
            } else {
                cont.scrollTop = parseInt(cont.scrollTop) + rowHei;
            }
        }
    }
    setTimeout(fn => {
        clearInterval(tbTimer);
        tbTimer = setInterval(startScroll, speed);
    }, delay)
}

function cssScroll() {
    //此方法使用css模拟列表滚动，带有动画效果，推荐使用
    var isStop = false;
    var cont = document.getElementById('firstLine');
    if (cont) {
        var parCont = document.getElementById('scrollContent');
        var maxMargin = parCont.offsetHeight - parCont.scrollHeight;
        parCont.onmouseover = function() {
            isStop = true;
        } //鼠标移入，停止滚动
        parCont.onmouseout = function() {
            isStop = false;
        } //鼠标移出，继续滚动

        cont.style.marginTop = 0;
        cont.style.transition = 'margin 0.25s';
        var startScroll = () => {
            if (isStop) {
                console.log("暂停中");
            } else {
                let hei = parseInt(cont.style.marginTop.replace("px", "")) || 0;
                if (hei <= maxMargin) {
                    cont.style.transition = 'none'; //暂时关闭动画，让其直接滚动到顶
                    cont.style.marginTop = 0;
                    setTimeout(function() { //再打开动画
                        cont.style.transition = 'margin 0.25s';
                    }, 10)
                } else {
                    cont.style.marginTop = parseInt(hei - rowHei) + "px";
                }
            }
        }
        setTimeout(fn => {
            clearInterval(tbTimer);
            tbTimer = setInterval(startScroll, speed);
        }, delay)
    } else { //dom还没渲染出来，给他再调用一下
        setTimeout(e => {
            this.cssScroll()
        },666)
    }
}
var tbTimer = null, //定时器
    rowHei =44, //每行行高
    speed = 1500, //滚动速度/毫秒
    delay = 1500; //开始滚动的延迟/毫秒

domReady(function() {
    clearInterval(tbTimer);
    cssScroll()
})