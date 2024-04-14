$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});


var options = {
  series: [70],
  chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    hollow: {
      size: '70%',
    }
  },
},
labels: ['Cricket'],
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();