
// ---------------图表1-------------------------
const data = [
    { week: '星期一', type: '天', playCount: 300 },
    { week: '星期二', type: '天', playCount: 600 },
    { week: '星期三', type: '天', playCount: 630 },
    { week: '星期四', type: '天', playCount: 550 },
    { week: '星期五', type: '天', playCount: 670 },
    { week: '星期一', type: '周', playCount: 120 },
    { week: '星期二', type: '周', playCount: 400 },
    { week: '星期三', type: '周', playCount: 310 },
    { week: '星期四', type: '周', playCount: 200 },
    { week: '星期五', type: '周', playCount: 900 },



];
const chart = new G2.Chart({
    container: 'course-play',
    autoFit: true,
    width:360,
    height: 200,
});
chart.data(data);
chart.scale({
    week: {
        range: [0, 1],
        tickCount: 5,
    },
    playCount: {
        nice: true,
        tickCount: 6,
    },
});
chart.tooltip({
    showCrosshairs: false,
    shared: false,
});
chart
    .path()
    .position('week*playCount')
    .color('type')
    .animate({
        appear: {
            animation: 'path-in',
            duration: 1000,
            easing: 'easeLinear',
        }
    })
    .shape('smooth');
chart
    .point()
    .position('week*playCount')
    .color('type')
    .shape('.hollow-circle')
    .style({
        stroke: '#5C8FBB',
        lineWidth: 2,
    });

chart.removeInteraction('legend-filter'); // 移除默认的 legend-filter 数据过滤交互
chart.interaction('legend-visible-filter'); // 使用分类图例的图形过滤
chart.render();
//---------------图表2-------------------------------
const data1 = [
    { course: '语文', readNumber: 19 },
    { course: '数学', readNumber: 17 },
    { course: '英语', readNumber: 33 },
    { course: '地理', readNumber: 60 },
    { course: '化学', readNumber: 49 },
    { course: '生物', readNumber: 32 },
    { course: '历史', readNumber: 23 },
    { course: '美术', readNumber: 12 },
    { course: '政治', readNumber: 23 },
    { course: '音乐', readNumber: 42 },

];
const chart1 = new G2.Chart({
    container: 'course-count',
    autoFit: true,
    height: 200,
    width:360
});
chart1.data(data1);
chart1.scale('readNumber', {
    nice: true,
    max:50,
    tickCount: 5,
});

chart1.tooltip({
    showMarkers: false
});
chart1.interaction('active-region');
chart1.interval()
    .position('course*readNumber')
    .size(20)
    .animate({
        appear: {
            animation: 'fade-in',
            duration: 1000,
            easing: 'easeLinear',
        }
    })
chart1.render();
// $(window).load(function () {
//     $("#fullback").show();
// });