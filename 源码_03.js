// 右侧柱状图1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".no1 .vedio3"));
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448"];
  // 2.指定配置项和数据
  var option = {
    color: ["#F8B448", "#56D0E3", "#F57474", "#1089E7"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['全球', '中国', '巴西', '印度', '英国', '加拿大', '日本', '美国', '德国', '意大利', '法国', '俄罗斯']
    },
    grid: {
      top: "7%",
      left: '4%',
      right: '0%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      // type: 'value'
      show: false
    },
    yAxis: [{
      type: 'category',
      data: ['全球', '中国', '巴西', '印度', '英国', '加拿大', '日本', '美国', '德国', '意大利', '法国', '俄罗斯'],
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },

      // y轴数据反转，与数组的顺序一致
      inverse: true,
      show: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      }

    }],
    series: [
      {
        name: '非常愿意(%)',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 18,
        // 层级 相当于z-index
        // 层级 相当于z-index
        yAxisIndex: 0,
        stack: 'total',

        // itemStyle: {
        //   barBorderRadius: 20,

        // },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [37, 38, 64, 44, 52, 48, 24, 35, 36, 37, 22, 19]

      },



      {
        name: '基本愿意(%)',
        type: 'bar',
        stack: 'total',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 18,
        // 层级 相当于z-index
        // 层级 相当于z-index
        yAxisIndex: 0,
        stack: 'total',

        // itemStyle: {
        //   barBorderRadius: 20,

        // },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [37, 59, 25, 44, 33, 29, 51, 32, 31, 29, 37, 34]
      },
      {
        name: '基本不愿意(%)',
        type: 'bar',
        stack: 'total',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 18,
        // 层级 相当于z-index
        // 层级 相当于z-index
        yAxisIndex: 0,
        stack: 'total',

        // itemStyle: {
        //   barBorderRadius: 20,

        // },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [15, 2, 8, 9, 9, 13, 20, 17, 20, 17, 21, 22]
      },
      {
        name: '非常不愿意(%)',
        type: 'bar',
        stack: 'total',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 18,
        // 层级 相当于z-index
        // 层级 相当于z-index
        yAxisIndex: 0,
        stack: 'total',

        // itemStyle: {
        //   barBorderRadius: 20,

        // },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [12, 1, 4, 4, 7, 11, 5, 16, 13, 17, 20, 24]
      },

      // 

    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

})();


// 中间饼状图
(function () {
  var myChart = echarts.init(document.querySelector('.no .vedio'));
  var option = {
    color: ['#60cda0', "#F8B448", '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff', "#F8B448", "#56D0E3"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 10
      }
    },
    series: [{
      name: '截至2021年3月22日',
      name: '全球累计接种新冠疫苗剂数(百万支)',
      type: 'pie',
      radius: ["30%", "68%"],
      center: ['50%', '45%'],
      // 半径模式  area面积模式
      roseType: 'radius',
      // 图形的文字标签
      label: {
        fontsize: 10
      },
      // 引导线调整
      labelLine: {
        // 连接扇形图线长(斜线)
        length: 4,
        // 连接文字线长(横线)
        length2: 6
      },
      data: [{
        value: 124.5,
        name: '美国'
      },
      {
        value: 75.3
        ,
        name: '中国'
      },
      {
        value: 29.9
        ,
        name: '英国'
      },
      {
        value: 8.5
        ,
        name: '智利'
      },
      {
        value: 7.9
        ,
        name: '印度尼西亚'
      },
      {
        value: 8.4
        ,
        name: '俄罗斯'
      },
      {
        value: 45.1
        ,
        name: '印度'
      },
      {
        value: 9.7

        ,
        name: '以色列'
      },
      {
        value: 139.0

        ,
        name: '其他'
      }
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();








// 左柱状图模块1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".rtwo .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ["以色列", "美国", "丹麦", "塞尔维亚", "罗马尼亚", "西班牙", "斯卡洛文"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '接种疫苗人口比例（%）',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [31.05, 4.49, 2.96, 2.67, 2.5, 2.35, 2.3],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();




// 折线图1
(function () {
  var myChart = echarts.init(document.querySelector('.two .chart'));

  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '30',
      left: '10',
      right: '30',
      bottom: '10',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ["贵州", "香港", "上海", "台湾", "云南", "广东", "福建", "四川", "浙江", "陕西", "海南", "江苏", "北京", "天津", "湖北", "重庆", "河南", "湖南", "山东", "内蒙古", "广西", "甘肃", "黑龙江", "河北", "安徽", "新疆", "江西", "吉林", "辽宁", "山西"]
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
      name: '累计确诊',
      type: 'line',
      smooth: true, // 圆滑的线
      // 单独修改当前线条的样式
      lineStyle: {
        color: "#0184d5",
        width: 2
      },
      // 填充区域渐变透明颜色
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [{
            offset: 0,
            color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
          },
          {
            offset: 0.8,
            color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
          }
          ],
          false
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)"
      },
      // 拐点设置为小圆点
      symbol: 'circle',
      // 设置拐点大小
      symbolSize: 5,
      // 开始不显示拐点， 鼠标经过显示
      showSymbol: false,
      // 设置拐点颜色以及边框
      itemStyle: {
        color: "#0184d5",
        borderColor: "rgba(221, 220, 107, .1)",
        borderWidth: 12
      },
      data: [75, 11770, 1984, 1121, 342, 2337, 591, 979, 1343, 590, 188, 719, 1057, 385, 68158, 596, 1312, 1044, 876, 380, 193, 1610, 1317, 994, 980, 937, 573, 408, 147, 251]
    },
    {
      name: "累计治愈",
      type: "line",
      smooth: true,
      lineStyle: {
        normal: {
          color: "#00d887",
          width: 2
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
              offset: 0,
              color: "rgba(0, 216, 135, 0.4)"
            },
            {
              offset: 0.8,
              color: "rgba(0, 216, 135, 0.1)"
            }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        }
      },
      // 设置拐点 小圆点
      symbol: "circle",
      // 拐点大小
      symbolSize: 5,
      // 设置拐点颜色以及边框
      itemStyle: {
        color: "#00d887",
        borderColor: "rgba(221, 220, 107, .1)",
        borderWidth: 12
      },
      // 开始不显示拐点， 鼠标经过显示
      showSymbol: false,
      data: [1, 11404, 1909, 1051, 286, 2283, 565, 952, 1322, 570, 165, 709, 1040, 374, 63640, 585, 1287, 1037, 866, 376, 266, 190, 1597, 1310, 988, 977, 936, 570, 406, 145, 75, 49, 18, 243]
    }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();





// 我国疫苗接种情况
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".one .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ["北京", "上海", "四川", "江西", "浙江", "内蒙古", "山西"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '疫苗接种人数（万人）',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [100, 60, 40, 38, 28, 26, 25],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图模块2
(function () {
  // 年份对应数据
  var yearData = [{
    year: "新冠病毒", // 年份
    data: [
      // 两个数组是因为有两条线
      [0.2, 6, 0, 2.5],
      [0.7, 4.5, 6, 2.4]
    ]
  },
  {
    year: "SARS病毒", // 年份
    data: [
      // 两个数组是因为有两条线
      [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
      [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
    ]
  }
  ];

  var myChart = echarts.init(document.querySelector(".three .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '10%',
      right: '15%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      fontSize: 10,
      boundaryGap: false, // 去除轴间距
      data: ['', '潜伏期(天)', '症发到具备强传染力时间间隔(天)', '传播性'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#fff" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      fontSize: 10,
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#fff" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
      type: 'line',
      smooth: true, // 圆滑的线
      name: '新冠病毒',
      data: yearData[0].data[0]
    },
    {
      type: 'line',
      smooth: true, // 圆滑的线
      name: 'SARS病毒',
      data: yearData[0].data[1]
    }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换2020 和 2021 的数据
  $('.line h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 选中年份高亮
    $('.line h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();
















