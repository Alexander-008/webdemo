$(function (){
    if (!navigator.userAgent.match(/mobile/i)) {
        // 缩放比适配
        function devicepixelratio() {
            var ratio = window.devicePixelRatio
            console.log(ratio);
            if (ratio < 0.28) {
                $(":root").css('font-size', '58px')
            } else if (ratio < 0.48) {
                $(":root").css('font-size', '48px')
            } else if (ratio < 0.58) {
                $(":root").css('font-size', '30px')
            } else if (ratio < 0.78) {
                $(":root").css('font-size', '20px')
            } else if (ratio < 0.88) {
                $(":root").css('font-size', '18px')
            } else if (ratio < 1.08) {
                $(":root").css('font-size', '16px')
            } else if (ratio < 1.18) {
                $(":root").css('font-size', '14px')
            } else if (ratio < 1.28) {
                $(":root").css('font-size', '13px')
            } else if (ratio < 1.4) {
                $(":root").css('font-size', '12px')
            } else if (ratio < 1.6) {
                $(":root").css('font-size', '10px')
            } else if (ratio < 1.8) {
                $(":root").css('font-size', '9px')
            } else if (ratio < 2.1) {
                $(":root").css('font-size', '8px')
            }
        }
        // 窗口缩放适配
        function watchChangeSize () {
            var offsetWid = document.documentElement.clientWidth;
            if (offsetWid < 1200) {
                $(":root").css('font-size', '9px')
            } else if (offsetWid < 1400) {
                $(":root").css('font-size', '12px')
            } else if (offsetWid < 1600) {
                $(":root").css('font-size', '14px')
            }
        }

        watchChangeSize()
        devicepixelratio()

        // 页面窗口大小变化时触发
        window.onresize = function() {
            devicepixelratio()
            watchChangeSize()
        }
    }

// M端右侧导航按钮
    $(".nav p").click(function() {
        $(".nav ul").show()
        $(".nav ul span").show()
    })
    $(".nav ul span").click(function() {
        $(".nav ul").hide()
        $(".nav ul span").hide()
    })
})

