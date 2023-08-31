var bannerSwiper = new Swiper('#index_banner_swiper', {
    loop: true,
    autoplay: true,
    speed: 1500
})
var aboutus = function() {
    // PC端轮播
    var historySwiper1 = new Swiper('#aboutus_history_swiper1', {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        navigation: {
            nextEl: '#aboutus_history_swiper_gt1',
            prevEl: '#aboutus_history_swiper_lt1',
        },
        speed: 1000
    })

    // 移动端轮播
    var historySwiper2 = new Swiper('#aboutus_history_swiper2', {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerGroup: 2,
        navigation: {
            nextEl: '#aboutus_history_swiper_gt2',
            prevEl: '#aboutus_history_swiper_lt2',
        },
        speed: 1000
    })
}