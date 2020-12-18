<template>
    <div id="myLineChart" ref="myLineChart"></div>

</template>

<script>
    export default {
        name: "bi-line",
        data(){
            return{
	            isRepeat: false,
                myChart: null,
                dateTotal:[],
            }
        },
        props:['xData', 'yData', 'flag','lineType','name'],
        mounted () {
            this.drawLine();
        },
        methods: {
            drawLine(){
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                this.myChart = this.$echarts.init(this.$refs.myLineChart);
                // if (this.xData.length){
                //     for (let i = 0; i < this.xData.length; i++){
                //         let date = {
                //             month:'',
                //             day:'',
                //         };
                //         date.month = this.xData[i].substring(5, 7);
                //         date.day = this.xData[i].substring(8, 10);
                //         this.dateTotal[i] = date.month + "月" + date.day + "日";
                //     }
                // }
                // 绘制图表
                let option = {
                    title: {
                        text: this.name,
                        subtext: '',
                        left: 'left'
                    },
                    xAxis: {
                        type: 'category',
                        data: this.xData
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: this.yData,
                        type: 'line',
                        areaStyle: this.lineType?{}:null
                    }]
                };
                this.myChart.setOption(option);
                // this.myChart.setOption({
                //     xAxis: {
                //         type: 'category',
                //         data: this.dateTotal,
                //         splitLine:{show: false},//去除网格线
                //         axisLine: {
                //             lineStyle: {
                //                 type: 'solid',
                //                 color: '#F4F4F4',//左边线的颜色
                //                 width:'2',//坐标线的宽度
                //                 opacity: 0
                //             }
                //         },
                //         axisLabel: {
                //             interval: 0,  //设置X轴数据间隔几个显示一个，为0表示都显示
                //             rotate:20,  //倾斜的程度
                //             textStyle: {
                //                 color: '#000000',//坐标值得具体的颜色
                //                 fontSize: 10,
                //                 fontWeight:400
                //             }
                //         },
                //         axisTick:{
                //             lineStyle:{
                //                 opacity: 0
                //             }
                //         }
                //     },
                //     yAxis: {
                //         type: 'value',
                //         axisLine: {
                //             lineStyle: {
                //                 type: 'solid',
                //                 color:'#F4F4F4',
                //                 width:'2',
                //                 opacity: 0
                //             }
                //         },
                //         axisLabel: {
                //             textStyle: {
                //                 color: '#000000',
                //                 fontSize: 10,
                //                 fontWeight:400
                //             }
                //         },
                //         axisTick:{
                //             lineStyle:{
                //                 opacity: 0
                //             }
                //         }
                //     },
                //     grid: {
                //         x:40,
                //         x2:3,
                //         y:30,
                //         y2:40
                //     },
                //     label: {},
                //     polar: {
                //
                //     },
                //     tooltip: {
                //         trigger: 'axis',
                //         axisPointer: {
                //             type: 'line',
                //             lineStyle: {
                //                 type: 'dashed',
                //                 color: '#78BFFC',
                //                 width:2
                //             }
                //         },
                //         formatter:function(params) {
                //         	if (!that.isRepeat) {
                //                 setTimeout(function () {
                //                     that.$parent.dynamicSwitchTime(params[0].dataIndex, that.flag);
	             //                    that.isRepeat = false;
                //                 },200);
		         //                that.isRepeat = true;
                //             }
                //         	if (that.flag == 1){
                //         	    switch (that.biLineType) {
                //         	        case 1:
                //                         params[0].seriesName = '使用人数';
                //                         break;
                //                     case 2:
                //                         params[0].seriesName = '未使用人数';
                //                         break;
                //                     case 3:
                //                         params[0].seriesName = '未登录人数';
                //                         break;
                //                 }
                //             }
                //             return params[0].name + '<br />' + params[0].seriesName+ '：' + params[0].data;
                //         }
                //     },
                //     series: [
                //         {
                //             name: that.flag == 1 ? '使用人数' : '使用次数',
                //             data: this.yData,
                //             type: 'line',
                //             symbol:'circle',
                //             symbolSize:6,
                //             lineStyle: {
                //                 normal: {
                //                     color: '#4BBAE1',
                //                     width: 2
                //                 }
                //             },
                //             itemStyle: {
                //                 normal: {
                //                     color: '#4BBAE1',
                //                     label: {
                //                         show: true,
                //                         color: '#767676',
                //                         fontSize : 11,
                //                         fontWeight:600
                //                     }
                //                 }
                //             }
                //         }
                //     ]
                // });
                // if(that.xData){
                //     this.myChart.dispatchAction({
                //         type: 'showTip',
                //         seriesIndex: 0,
                //         dataIndex: that.xData.length-1
                //     });
                // }
                // this.myChart.on("click", function (params) {
                //     that.$parent.switchTime(params.dataIndex);
                // })
            }
        }
    }
</script>

<style scoped>
    #myLineChart{
        width: 350px;
        height: 280px;
    }
</style>