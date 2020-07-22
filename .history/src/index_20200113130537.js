import d3 from "d3";
window.d3 = d3;

var funcionLineal = require('function-plot');

funcionLineal({
    target: '#lineal',
    title: 'Funcion Lineal',
    width: 1200,
    height: 520,
    yAxis: {domain: [0,10]},
    xAxis: {domain: [0,10]},

    data: [{
        fn: 'sin(x) * cos x)', color: 'orange',skipTip: true,
      }],
    
    annotations: [
        { x: 1, text: 'x = 1' },
        { x: 2, text: 'x = 2' },
        { x: 3, text: 'x = 3' },
        { y: 1, text: 'y = 1' },
        { y: 4, text: 'y = 4' },
        { y: 7, text: 'y = 7' },
    ],
});