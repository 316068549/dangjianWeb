<template>
    <div id="equipPie" ref="equipPie"></div>
</template>

<script>
    export default {
        name: "equip-pie",
        data(){
            return{
                myChart: null,
                standSize: document.body.clientWidth,
            }
        },
        props:['pieData', 'num', 'yData','name','type'],
        mounted () {
            this.drawPie();
        },
        watch:{
            num: function (val) {
                if (this.myChart) {
                    this.myChart.dispose();
                }
                this.drawPie();

            }
        },
        methods: {
            drawPie(){
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                this.myChart = this.$echarts.init(this.$refs.equipPie);
                // 绘制图表
                if(this.type==1){
                    this.myChart.setOption({
                        title: {
                            text: this.name,
                            subtext: '',
                            left: 'left'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        legend: {
                            type: 'scroll',
                            orient: 'vertical',
                            right: 10,
                            bottom: 30,
                            data: this.yData,
                            // data: ["0-9岁", "10-19岁", "20-29岁", "30-39岁", "40岁+"],
                            // selected: {岑施: true,
                            //     袁章闵: 1,
                            //     史赵: 1,
                            //     施毛雷: 1}
                        },
                        // title: {
                        //     text: '',
                        //     subtext: '',
                        //     left: 'center',
                        //
                        // },
                        // tooltip: {
                        //     trigger: 'item',
                        //     formatter: '{b} : {c}'
                        // },
                        // graphic:{
                        //     type:'text',
                        //     $action: 'merge',
                        //     left:'center',
                        //     top:'43%',
                        //     style:{
                        //         text:this.num+'\n'+'在场设备',
                        //         textAlign:'center',
                        //         font: '500 22px "PingFangSC-Medium,PingFang SC"',
                        //         fill:'#000',
                        //         width:30,
                        //         height:30
                        //     },
                        //     zlevel:99999,
                        //     silent: true,
                        // },
                        series: [
                            {
                                name: '姓名',
                                type: 'pie',
                                radius: '45%',
                                center: ['40%', '50%'],
                                data: this.pieData,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                            // {
                            //     name: '',
                            //     type: 'pie',
                            //     radius: ['35%', '60%'], //设置饼图大小
                            //     center: ['50%', '50%'], //设置饼图位置
                            //     // avoidLabelOverlap: false,
                            //     minAngle:5,
                            //     itemStyle: {
                            //         normal: {
                            //             label: {
                            //                 show: true,
                            //                 textStyle: {color: '#3c4858', fontSize: "14"},
                            //                 alien:'center',
                            //                 verticalAlign:'middle',
                            //                 formatter: '{b}  \n  {c}',
                            //                 borderWidth: 20,
                            //                 borderRadius: 4,
                            //                 padding: [5, 0],
                            //             },
                            //             labelLine: {
                            //                 show: true,
                            //                 lineStyle: {color: '#3c4858'},
                            //                 length: that.standSize / 70,
                            //                 length2: that.standSize / 30,
                            //             },
                            //             rich: {
                            //                 b: {
                            //                     align: 'center'
                            //                 },
                            //                 c: {
                            //                     alien:'center'
                            //                 },
                            //             }
                            //         },
                            //     },
                            //     emphasis: {
                            //         itemStyle: {
                            //             shadowBlur: 10,
                            //             shadowOffsetX: 0,
                            //             shadowColor: 'rgba(0, 0, 0, 0.5)'
                            //         }
                            //     },
                            //     data:this.pieData,
                            //     color:['#07A9D6','#21C8F7','#1B8ADC']
                            // },
                            // {
                            //     name: '',
                            //     type: 'pie',
                            //     radius: ['35%', '60%'], //设置饼图大小
                            //     center: ['50%', '50%'], //设置饼图位置
                            //     avoidLabelOverlap: false,
                            //     itemStyle: {
                            //         normal: {
                            //             label: {
                            //                 show: true,
                            //                 position: 'center',
                            //                 textStyle: {color: '#000', fontSize: "15"},
                            //                 formatter: this.num+'\n'+'在场设备',
                            //                 borderWidth: 20,
                            //                 borderRadius: 4,
                            //                 padding: [0, -20],
                            //             },
                            //             labelLine: {
                            //                 show: true,
                            //                 lineStyle: {color: '#3c4858'}
                            //             }
                            //         },
                            //     },
                            //     emphasis: {
                            //         itemStyle: {
                            //             shadowBlur: 10,
                            //             shadowOffsetX: 0,
                            //             shadowColor: 'rgba(0, 0, 0, 0.5)'
                            //         }
                            //     },
                            //     data:this.pieData,
                            //     color:['#07A9D6','#21C8F7','#1B8ADC']
                            // }
                        ]
                    })
                }else{
                    this.myChart.setOption({
                        title: {
                            text: this.name,
                            subtext: '',
                            left: 'left'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        legend: {
                            type: 'scroll',
                            orient: 'vertical',
                            right: 10,
                            bottom: 30,
                            data: this.yData,
                        },
                        series: [
                            {
                                name: '姓名',
                                type: 'pie',
                                radius: ['35%', '50%'],
                                center: ['40%', '50%'],
                                data: this.pieData,
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                show: true,
                                                textStyle: {color: '#3c4858', fontSize: "12"},
                                                alien: 'center',
                                                verticalAlign: 'middle',
                                                formatter: '{b} {d}%',
                                                borderWidth: 20,
                                                borderRadius: 4,
                                                padding: [5, 0],
                                            },
                                            labelLine: {
                                                show: true,
                                                lineStyle: {color: '#3c4858'},
                                                length: that.standSize / 70,
                                                length2: that.standSize / 30,
                                            },
                                            rich: {
                                                b: {
                                                    align: 'center'
                                                },
                                                c: {
                                                    alien: 'center'
                                                },
                                            }
                                        },
                                    },
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    })
                }

            }
        }
    }
</script>

<style scoped>
    #equipPie{
        width: 350px;
        height: 300px;
    }
</style>