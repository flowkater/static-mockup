$(function () {
    $("#sparkline-morning").sparkline([0.5, 1.5, 3.0, 3.5, 4.0, 5.0, 1.5, 5.0, 3.0, 3.5, 1.0, 5.0, 3.0, 0.5], {
        type: 'line',
        lineWidth: 2,
        width: '291px',
        height: '100px',
        lineColor: '#f8ac59',
        fillColor: '#ffffff'});

    $("#sparkline-tasks").sparkline([100, 80, 90, 20, 30, 60, 70, 80, 100, 70, 50, 40, 30, 76], {
        type: 'bar',
        barWidth: 20,
        height: '100px',
        barColor: '#1ab394',
        negBarColor: '#c6c6c6'});

    $("#sparkline-time").sparkline([10, 80, 90, 20, 30, 60, 70, 80, 100, 70, 50, 40, 30, 76], {
        type: 'bar',
        barWidth: 20,
        height: '100px',
        barColor: '#23c6c8',
        negBarColor: '#c6c6c6'});

    $("#sparkline-star").sparkline([0.5, 1.5, 3.0, 3.5, 4.0, 5.0, 1.5, 5.0, 3.0, 3.5, 1.0, 5.0, 3.0, 0.5], {
        type: 'line',
        lineWidth: 2,
        width: '291px',
        height: '100px',
        lineColor: '#f8ac59',
        fillColor: '#ffffff'});
});
