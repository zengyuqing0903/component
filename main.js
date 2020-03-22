$(function(){

  // 语言排行榜
  var data = [
    ['Java', 1, '降', '-0.01%'],
    ['C', 2, '升','+2.44%'],
    ['Python', 3, '升', '+1.41%'],
    ['C++', 4,'降', '-2.58%'],
    ['C#', 5, '升','+2.07%'],
    ['Visual Basic .NET', 6, '降','-1.17%'],
    ['JavaScript', 7, '降','-0.85%']
  ];
  
  var container = document.getElementById('example');
  var hot = new Handsontable(container, {
    data: data,
    contextMenu: true,
    manualRowResize: true,
    manualColumnResize: true,
    rowHeaders: false,
    colWidths:'200px',
    rowHeights:40,
    colHeaders: ['语言名称','排名','升或降','变化幅度'],
    // filters: true,
    className:'htMiddle htCenter'//垂直居中
  });

  // javascript语言排名变化(Echarts)
  var myChart = echarts.init(document.getElementById('main'));

  var xData = [2000,2005,2010,2015,2020],
      yData = [6,9,8,8,7];

  var option = {
    title: {
      text: 'Javascript语言排名变化'
    },
    tooltip: {},
    legend: {

    },
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [{
      // name: '排名',
      type: 'line',
      data: yData
    }]
  };

  myChart.setOption(option);
})