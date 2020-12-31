<template>
    <div id="myHBar" ref="myHBar"></div>
</template>

<script>
    export default {
        name: "bi-h-bar",
        data(){
            return{
                myChart: null,
                dateTime:'',
            }
        },
       props:['xData', 'yData','date','name'],
        mounted () {
            // this.setData();
            this.drawHBar();
        },
        watch:{
            yData() {
                if (this.myChart) {
                    this.myChart.dispose();
                }
                if (this.yData.length > 0) {
                    this.yData = this.yData;
                    this.drawHBar();
                }
            }
        },
        methods: {
            // setData(){
            //     for (let i = 0; i < this.xData2.length ; i++){
            //         this.xData[i] = this.xData2[i];
            //     }
            //     if (!this.xData){
            //         this.xData[0] = "建设单位";
            //         this.xData[1] = "监理单位";
            //         this.xData[2] = "施工单位";
            //     }
            //     for (let j = 0; j < this.yData2.length ; j++){
            //         this.yData[j] = this.yData2[j];
            //     }
            // },
            drawHBar() {
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                this.myChart = this.echarts.init(this.$refs.myHBar);
                let option = {
                    title: {
                        text: this.name,
                        subtext: '',
                        left: 'left'
                    },
                    color: ['#3398DB'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data:this.xData ,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            barWidth: '60%',
                            data: this.yData
                        }
                    ]
                };
                // 绘制图表
                this.myChart.setOption(option);
                // this.myChart.setOption({
                //     xAxis: {
                //         type: 'value',
                //         splitLine: {show: false},//去除网格线
                //         axisLine: {
                //             lineStyle: {
                //                 type: 'solid',
                //                 color: '#F4F4F4',//左边线的颜色
                //                 width: '2',//坐标线的宽度
                //                 opacity: 1
                //             }
                //         },
                //         axisLabel: {
                //             interval: 0,  //设置X轴数据间隔几个显示一个，为0表示都显示
                //             textStyle: {
                //                 color: '#000000',//坐标值得具体的颜色
                //                 fontSize: 10,
                //                 fontWeight: 400
                //             }
                //         },
                //         axisTick: {
                //             lineStyle: {
                //                 opacity: 0
                //             }
                //         }
                //     },
                //     yAxis: {
                //         type: 'category',
                //         data: this.xData,
                //         triggerEvent: true, //y轴响应点击
                //         inverse: true,
                //         axisLine: {
                //             lineStyle: {
                //                 type: 'solid',
                //                 color: '#F4F4F4',
                //                 width: '2',
                //                 opacity: 0
                //             }
                //         },
                //         axisLabel: {
                //             textStyle: {
                //                 color: '#000000',
                //                 fontSize: 12,
                //                 fontWeight: 400
                //             }
                //         },
                //         axisTick: {
                //             lineStyle: {
                //                 opacity: 0
                //             }
                //         },
                //     },
                //     grid: {
                //         x: 57,
                //         x2: 30,
                //         y: 20,
                //         y2: 30
                //     },
                //     label: {},
                //     polar: {},
                //     tooltip: {
                //         // trigger: 'axis',
                //         // axisPointer: {
                //         //     type: 'line',
                //         //     lineStyle: {
                //         //         type: 'dashed',
                //         //         color: '#78BFFC',
                //         //         width: 2
                //         //     }
                //         // }
                //     },
                //     series: [
                //         {
                //             name: '使用次数',
                //             data: this.yData,
                //             type: 'bar',
                //             barWidth: 16,
                //             // lineStyle: {
                //             //     normal: {
                //             //         color: '#19BCFF',
                //             //         width: 2
                //             //     }
                //             // },
                //             itemStyle: {
                //                 emphasis: {
                //                     barBorderRadius: 8
                //                 },
                //                 normal: {
                //                     color: '#19BCFF',
                //                     barBorderRadius: 8,
                //                     borderWidth: 0,
                //                     shadowBlur: 4,
                //                     shadowColor: 'rgba(69,137,213,1)',
                //                     shadowOffsetX: 0,
                //                     shadowOffsetY: 0,
                //                     label: {
                //                         show: true,
                //                         position: 'right',	//在上方显示
                //                         textStyle: {
                //                             color: '#000000',
                //                             fontSize: 11,
                //                             fontWeight: 400
                //                         }
                //                     }
                //                 }
                //             }
                //         }
                //     ]
                // });
            },
        }
    }
</script>

<style scoped>
    #myHBar{
        width: 350px;
        height: 280px;
    }
</style>