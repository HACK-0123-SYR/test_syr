// 柱状图模块2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 2.指定配置项和数据
  var option = {
    grid: {
      top: "10%",
      left: '18%',
      right: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      // 不显示x轴相关信息
      show: false
    },
    yAxis: [{
      type: 'category',
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
      data: ["现有确诊", "无症状", "累计确诊", "累计治愈", "累计死亡"]
    }, {
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
      },
      data: [452, 304, 102949
        , 97646
        , 4851
      ]
    }],
    series: [{
      // 第一组柱子（条状）
      name: '条',
      type: 'bar',
      // 柱子之间的距离
      barCategoryGap: 50,
      // 柱子的宽度
      barWidth: 10,
      // 层级 相当于z-index
      yAxisIndex: 0,
      // 柱子更改样式
      itemStyle: {
        barBorderRadius: 20,
        // 此时的color可以修改柱子的颜色
        color: function (params) {
          // params 传进来的是柱子的对象
          // dataIndex 是当前柱子的索引号
          // console.log(params);
          return myColor[params.dataIndex];
        }
      },
      data: [70, 34, 78, 69, 60],
      // 显示柱子内的百分比文字
      label: {
        show: true,
        position: "inside",
        // {c} 会自动解析为数据（data内的数据）
        formatter: "{c}%"
      }
    },
    {
      // 第二组柱子（框状 border）
      name: '框',
      type: 'bar',
      // 柱子之间的距离
      barCategoryGap: 50,
      // 柱子的宽度
      barWidth: 14,
      // 层级 相当于z-index
      yAxisIndex: 1,
      // 柱子修改样式
      itemStyle: {
        color: "none",
        borderColor: "#00c1de",
        borderWidth: 2,
        barBorderRadius: 15,
      },
      data: [100, 100, 100, 100, 100]
    }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();





(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));


  // 2.指定配置项和数据
  var option = {

    tooltip: {},
    legend: {
      data: ['阶段一', '阶段二']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: "#fff",


          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        { name: '', max: 12 },
        { name: '愿意首先接种的志愿者数量', max: 65000 },
        { name: '志愿者年龄情况', max: 100 },



      ]
    },
    series: [{
      name: '疫苗研发阶段性进展',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
        {
          value: [4, 500, 60],
          name: '阶段一'
        },
        {
          value: [10, 50000, 60],
          name: '阶段二'
        }

      ]
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();








(function () {
  var myChart = echarts.init(document.querySelector('.line9 .chart'));

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
      data: ["3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30"]
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
      name: '日累计接种（万）',
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
      data: [8284.6
        , 8585.97
        , 9134.6
        , 9747
        , 10241.7
        , 10661.3
        , 11096.2
        , 11469

      ]
    },
    {
      name: "日增人数（万）",
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
      data: [301.37
        , 548.63
        , 612.4
        , 494.7
        , 419.6
        , 434.9
        , 372.8
        , 513.1
      ]
    }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();




// 饼形图2
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  var option = {
    color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
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
      name: '地区分布',
      type: 'pie',
      radius: ["10%", "60%"],
      center: ['50%', '40%'],
      // 半径模式  area面积模式
      roseType: 'radius',
      // 图形的文字标签
      label: {
        fontsize: 10
      },
      // 引导线调整
      labelLine: {
        // 连接扇形图线长(斜线)
        length: 6,
        // 连接文字线长(横线)
        length2: 8
      },
      data: [{
        value: 26,
        name: '北京'
      },
      {
        value: 24,
        name: '山东'
      },
      {
        value: 25,
        name: '河北'
      },
      {
        value: 20,
        name: '江苏'
      },
      {
        value: 25,
        name: '浙江'
      },
      {
        value: 30,
        name: '四川'
      },
      {
        value: 42,
        name: '湖北'
      }
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();









// (function () {
//   // 年份对应数据
//   var myChart = echarts.init(document.querySelector(".line2 .chart"));



//   // .。。
//   var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
//     '7a', '8a', '9a', '10a', '11a',
//     '12p', '1p', '2p', '3p', '4p', '5p',
//     '6p', '7p', '8p', '9p', '10p', '11p'];
//   var days = ['Saturday', 'Friday', 'Thursday',
//     'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

//   var data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];
//   vary option = {
//     tooltip: {},
//     visualMap: {
//       max: 20,
//       inRange: {
//         color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
//       }
//     },
//     xAxis3D: {
//       type: 'category',
//       data: hours
//     },
//     yAxis3D: {
//       type: 'category',
//       data: days
//     },
//     zAxis3D: {
//       type: 'value'
//     },
//     grid3D: {
//       boxWidth: 200,
//       boxDepth: 80,
//       viewControl: {
//         // projection: 'orthographic'
//       },
//       light: {
//         main: {
//           intensity: 1.2,
//           shadow: true
//         },
//         ambient: {
//           intensity: 0.3
//         }
//       }
//     },
//     series: [{
//       type: 'bar3D',
//       data: data.map(function (item) {
//         return {
//           value: [item[1], item[0], item[2]],
//         }
//       }),
//       shading: 'lambert',

//       label: {
//         fontSize: 16,
//         borderWidth: 1
//       },

//       emphasis: {
//         label: {
//           fontSize: 20,
//           color: '#900'
//         },
//         itemStyle: {
//           color: '#900'
//         }
//       }
//     }]
//   }




//   var yearData = [{
//     year: "2020", // 年份
//     data: [
//       // 两个数组是因为有两条线
//       [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
//       [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
//     ]
//   },
//   {
//     year: "2021", // 年份
//     data: [
//       // 两个数组是因为有两条线
//       [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
//       [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
//     ]
//   }
//   ];

//   var myChart = echarts.init(document.querySelector(".line .chart"));

//   var option = {
//     // 修改两条线的颜色
//     color: ['#00f2f1', '#ed3f35'],
//     tooltip: {
//       trigger: 'axis'
//     },
//     // 图例组件
//     legend: {
//       // 当serise 有name值时， legend 不需要写data
//       // 修改图例组件文字颜色
//       textStyle: {
//         color: '#4c9bfd'
//       },
//       right: '10%',
//     },
//     grid: {
//       top: "20%",
//       left: '3%',
//       right: '4%',
//       bottom: '3%',
//       containLabel: true,
//       show: true, // 显示边框
//       borderColor: '#012f4a' // 边框颜色
//     },
//     xAxis: {
//       type: 'category',
//       boundaryGap: false, // 去除轴间距
//       data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
//       // 去除刻度线
//       axisTick: {
//         show: false
//       },
//       axisLabel: {
//         color: "#4c9bfb" // x轴文本颜色
//       },
//       axisLine: {
//         show: false // 去除轴线
//       }
//     },
//     yAxis: {
//       type: 'value',
//       // 去除刻度线
//       axisTick: {
//         show: false
//       },
//       axisLabel: {
//         color: "#4c9bfb" // x轴文本颜色
//       },
//       axisLine: {
//         show: false // 去除轴线
//       },
//       splitLine: {
//         lineStyle: {
//           color: "#012f4a"
//         }
//       }
//     },
//     series: [{
//       type: 'line',
//       smooth: true, // 圆滑的线
//       name: '新增粉丝',
//       data: yearData[0].data[0]
//     },
//     {
//       type: 'line',
//       smooth: true, // 圆滑的线
//       name: '新增游客',
//       data: yearData[0].data[1]
//     }
//     ]
//   };

//   myChart.setOption(option);

//   // 4.让图表随屏幕自适应
//   window.addEventListener('resize', function () {
//     myChart.resize();
//   })

//   // 5.点击切换2020 和 2021 的数据
//   $('.line h2 a').on('click', function () {
//     // console.log($(this).index());
//     // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
//     // console.log(yearData[$(this).index()]);
//     var obj = yearData[$(this).index()];
//     option.series[0].data = obj.data[0];
//     option.series[1].data = obj.data[1];
//     // 选中年份高亮
//     $('.line h2 a').removeClass('a-active');
//     $(this).addClass('a-active');

//     // 需要重新渲染
//     myChart.setOption(option);
//   })
// })();



