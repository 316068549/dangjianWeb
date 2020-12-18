<template>
    <div class="main">
        <div class="container">
            <div class="box">
                <div class="big_nav text-left">当前位置：
                    <router-link to='/home' style="margin-top: -16px;">
                        <a class="daohang">网站首页</a>&gt;&nbsp;
                    </router-link>
                    <router-link to='/home/bigdata' style="margin-top: -16px;">
                        <a class="daohang">大数据中心</a>
                    </router-link>
                </div>
                <div class="ht5"></div>
                <el-row class="warp">
                    <el-col :span="24" class="warp-main">

                        <el-row class="first-row" :gutter="20">
                            <el-col :span="8">
                                <div id="business2" class="block">


                                    <equip-pie :pie-data="pieData" :y-data="yData" :num="pieTotal" :name="pieName" :type="1" v-if="pieTotal"></equip-pie>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div id="projects222" class="block">
                                    <!--<div class="baidumap" id="allmap" style="height: 300px"></div>-->
                                    <div class="baidumap" id="allmap2" style="height: 300px"></div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div id="projects22" class="block">
                                    <equip-pie :pie-data="pieData2" :y-data="yData2" :num="pieTotal2" :name="pieName2" :type="1" v-if="pieTotal2"></equip-pie>
                                </div>
                            </el-col>
                            <!--<el-col :span="6">-->
                                <!--<div class="block b1">-->
                                    <!--统计1-->
                                    <!--<span class="number">{{business}}</span>-->
                                <!--</div>-->
                            <!--</el-col>-->
                            <!--<el-col :span="6">-->
                                <!--<div class="block b2">-->
                                    <!--统计2-->
                                    <!--<div class="number">{{projects}}</div>-->
                                <!--</div>-->
                            <!--</el-col>-->
                            <!--<el-col :span="6">-->
                                <!--<div class="block b3">-->
                                    <!--统计3-->
                                    <!--<span class="number">{{orders}}</span>-->
                                <!--</div>-->
                            <!--</el-col>-->
                            <!--<el-col :span="6">-->
                                <!--<div class="block b4">-->
                                    <!--统计4-->
                                    <!--<span class="number">{{webUsers}}</span>-->
                                <!--</div>-->
                            <!--</el-col>-->
                        </el-row>

                        <el-row class="second-row" :gutter="20">
                            <el-col :span="8">
                                <div id="business" class="block">

                                    <bi-h-bar :x-data="xData2" :y-data="yData5" :name="hName"></bi-h-bar>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div id="projects" class="block">
                                    <bi-line :x-data="xData5" :y-data="yData6" :line-type="0" :name="hName5"></bi-line>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div id="projects2" class="block">
                                    <bi-h-bar :x-data="xData" :y-data="yData4" :name="hName2"></bi-h-bar>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row class="second-row" :gutter="20">
                            <el-col :span="8">
                                <div id="orders" class="block">
                                    <equip-pie :pie-data="pieData3" :y-data="yData3" :num="pieTotal3" :name="pieName3" :type="2" v-if="pieTotal3"></equip-pie>

                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div id="users" class="block">
                                    <bi-line :x-data="xData6" :y-data="yData7" :line-type="1" :name="hName6"></bi-line>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div id="users2" class="block">
                                    <bi-line :x-data="xData7" :y-data="yData8" :line-type="1" :name="hName7"></bi-line>
                                </div>
                            </el-col>
                        </el-row>


                    </el-col>
                </el-row>
            </div>
        </div>
    </div>


</template>

<script>

    // import {reqAdminStatistic,reqProjectsAndOrders} from '../../api/system-api';
    import echarts from 'echarts'
    import BiLine from "../../components/echarts/bi-line";
    import BiHBar from "../../components/echarts/bi-h-bar";
    import EquipPie from "../../components/echarts/equip-pie";

    export default{
        name: "bigData",
        components: {EquipPie,BiLine,BiHBar},
        data(){
            return{
                yData:["0-9岁", "10-19岁", "20-29岁", "30-39岁", "40岁+"],
                yData2:["高中及以下", "大专", "本科", "硕士", "博士及以上"],
                yData3:["组织生活会", "每周学习日", "支委会议", "党员大会", "党课"],
                pieData:[
                    {value: 1, name: '0-9岁'},
                    {value: 22, name: '10-19岁'},
                    {value: 134, name: '20-29岁'},
                    {value: 135, name: '30-39岁'},
                    {value: 135, name: '40岁+'},
                ],
                pieData2:[
                    {value: 1, name: '高中及以下'},
                    {value: 22, name: '大专'},
                    {value: 134, name: '本科'},
                    {value: 135, name: '硕士'},
                    {value: 135, name: '博士及以上'},
                ], pieData3:[
                    {value: 1, name: '组织生活会'},
                    {value: 22, name: '每周学习日'},
                    {value: 134, name: '支委会议'},
                    {value: 135, name: '党员大会'},
                    {value: 135, name: '党课'},
                ],
                pieTotal:1,
                pieTotal2:1,
                pieTotal3:1,
                pieName:'党龄分布',
                pieName2:'学历分布',
                pieName3:'三会一课',
                hName:'年龄分布',
                hName2:'民族分布',
                hName5:'党员分布',
                hName6:'微课堂',
                hName7:'月考评',
                xData:["汉族","彝族","藏族"],
                xData2: ['18-29岁', "30-39岁", "40-49岁", "50-59岁", "60岁+"],
                xData5: ['西安', "咸阳", "铜川", "延安"],
                xData6: ['1月', "2月", "3月", '4月', "5月", "6月",'7月', "8月", "9月", "10月",'11月', "12月"],
                xData7: ['1月', "2月", "3月", '4月', "5月", "6月",'7月', "8月", "9月", "10月",'11月', "12月"],
                yData4:[180,40,15],
                yData5:[ 20, 40, 60, 80, 100],
                yData6:[ 22, 30, 10, 15],
                yData7:[ 5, 6, 10, 15, 20,8,5, 6, 10, 15, 20,8],
                yData8:[ 5, 6, 10, 15, 20,8,5, 6, 10, 15, 20,8],
                projects: 0,
                // echarts: require('echarts'),
                dalian: require('../../static/js/shanxi.json'),
                orders:0,
                business: 0,
                webUsers: 0,
                projectArray:[],
                ordersArray:[],
                businessArray:[],
                usersArray:[],
                position_NKYYGS: {
                    Name: '四川省农业科学院',
                    address: '成都市锦江区静居寺路20号',
                    phoneNumber: '(028)84504011',
                    bdLNG: 104.114026,
                    bdLAT: 30.630106
                }

            }
        },
        methods:{
            baiduMap2() {
                var map = new BMap.Map('allmap2');
                var point = new BMap.Point(108.95,34.27);
                map.centerAndZoom(point, 7);
                map.enableScrollWheelZoom(true);
// 创建点标记
                var marker1 = new BMap.Marker(point);
                var marker2 = new BMap.Marker(new BMap.Point(109.11,35.09));
//                 var marker3 = new BMap.Marker(new BMap.Point(108.95,34.27));
//                 var marker4 = new BMap.Marker(new BMap.Point(108.95,34.27));
// // 在地图上添加点标记
                map.addOverlay(marker1);
                map.addOverlay(marker2);
//                 map.addOverlay(marker3);
//                 map.addOverlay(marker4);
//                 // 创建信息窗口
//                 var opts = {
//                     width: 200,
//                     height: 100,
//                     title: '故宫博物院'
//                 };
                var sContent =
                    '<div style="width:100px;height: 50px">' +
                    '<p style="font-size:13px;margin: 5px 0;">地址：西安党建中心' +
                ('</p></div>');
                var infoWindow = new BMap.InfoWindow(sContent);
                marker1.addEventListener('click', function() {
                    this.openInfoWindow(infoWindow);
                });
                var sContent1 =
                    '<div style="width:100px;height: 50px">' +
                    '<p style="font-size:13px;margin: 5px 0;">地址：铜川党建中心' +
                    ('</p></div>');
                var infoWindow2 = new BMap.InfoWindow(sContent1);
                marker2.addEventListener('click', function() {
                    this.openInfoWindow(infoWindow2);
                });
            },
            baiduMap() {
                var map = new BMap.Map('allmap'); // 创建地图实例
                map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                map.addControl(new BMap.NavigationControl());
                map.addControl(new BMap.ScaleControl());
                map.addControl(new BMap.OverviewMapControl());
                map.addControl(new BMap.MapTypeControl());
                // map.setMapStyle({ style: 'midnight' }) //地图风格

                map.clearOverlays();
                //将数据遍历
                //自定义信息窗口内容
                var sContent =
                    '<div style="width:300px;"><p style="font-size:16px;font-weight:bold;margin-top: 10px;color:#D07852">' +
                    this.position_NKYYGS.Name +
                    '</p><p style="font-size:13px;margin: 5px 0;">地址：' +
                    this.position_NKYYGS.address +
                    '</p><p style="font-size:13px;margin: 5px 0;">电话：' +
                    this.position_NKYYGS.phoneNumber +
                    '</p><p style="font-size:13px;margin: 5px 0;">坐标：' +
                    this.position_NKYYGS.bdLNG +
                    ',' +
                    this.position_NKYYGS.bdLAT;
                ('</div>');
                var point = new BMap.Point(this.position_NKYYGS.bdLNG, this.position_NKYYGS.bdLAT); // 创建点坐标
                var marker = new BMap.Marker(point);
                map.addOverlay(marker);
                map.centerAndZoom(point, 8); // 初始化地图，设置中心点坐标和地图级别
                // //点击图标时候调用信息窗口
                var infoWindow = new BMap.InfoWindow(sContent);
                marker.addEventListener('click', function() {
                    this.openInfoWindow(infoWindow);
                });
            }
            ,
            init(){


                this.$nextTick(()=>{

                    var myChart = this.$echarts.init(document.getElementById('projects222'));

                    this.$echarts.registerMap('dalian', this.dalian,{});
                    var data = [
                        {name: '西安', value: 91},
                    ];
                    var geoCoordMap = {
                        '西安':[108.95,34.27],
                    };

                    var convertData = function (data) {
                        var res = [];
                        for (var i = 0; i < data.length; i++) {
                            var geoCoord = geoCoordMap[data[i].name];
                            if (geoCoord) {
                                res.push({
                                    name: data[i].name,
                                    value: geoCoord.concat(data[i].value)
                                });
                            }
                        }
                        return res;
                    };

                    myChart.setOption({
                        title: {
                            text: '全国主要城市空气质量 - 百度地图',
                            subtext: 'data from PM25.in',
                            sublink: 'http://www.pm25.in',
                            left: 'center'
                        },
                        tooltip : {
                            trigger: 'item'
                        },
                        bmap: {
                            center: [104.114129, 37.550339],
                            zoom: 3,
                            roam: true,
                            mapStyle: {
                                styleJson: [{
                                    'featureType': 'water',
                                    'elementType': 'all',
                                    'stylers': {
                                        'color': '#d1d1d1'
                                    }
                                }, {
                                    'featureType': 'land',
                                    'elementType': 'all',
                                    'stylers': {
                                        'color': '#f3f3f3'
                                    }
                                }, {
                                    'featureType': 'railway',
                                    'elementType': 'all',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                }, {
                                    'featureType': 'highway',
                                    'elementType': 'all',
                                    'stylers': {
                                        'color': '#fdfdfd'
                                    }
                                }, {
                                    'featureType': 'highway',
                                    'elementType': 'labels',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                }, {
                                    'featureType': 'arterial',
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'color': '#fefefe'
                                    }
                                }, {
                                    'featureType': 'arterial',
                                    'elementType': 'geometry.fill',
                                    'stylers': {
                                        'color': '#fefefe'
                                    }
                                }, {
                                    'featureType': 'poi',
                                    'elementType': 'all',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                }, {
                                    'featureType': 'green',
                                    'elementType': 'all',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                }, {
                                    'featureType': 'subway',
                                    'elementType': 'all',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                }, {
                                    'featureType': 'manmade',
                                    'elementType': 'all',
                                    'stylers': {
                                        'color': '#d1d1d1'
                                    }
                                }, {
                                    'featureType': 'local',
                                    'elementType': 'all',
                                    'stylers': {
                                        'color': '#d1d1d1'
                                    }
                                }, {
                                    'featureType': 'arterial',
                                    'elementType': 'labels',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                }, {
                                    'featureType': 'boundary',
                                    'elementType': 'all',
                                    'stylers': {
                                        'color': '#fefefe'
                                    }
                                }, {
                                    'featureType': 'building',
                                    'elementType': 'all',
                                    'stylers': {
                                        'color': '#d1d1d1'
                                    }
                                }, {
                                    'featureType': 'label',
                                    'elementType': 'labels.text.fill',
                                    'stylers': {
                                        'color': '#999999'
                                    }
                                }]
                            }
                        },

                        series: [
                            {
                                name: 'pm2.5',
                                type: 'scatter',
                                coordinateSystem: 'bmap',
                                data: convertData(data),
                                symbolSize: function (val) {
                                    return val[2] / 10;
                                },
                                encode: {
                                    value: 2
                                },
                                label: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: false
                                },
                                itemStyle: {
                                    color: 'purple'
                                },
                                emphasis: {
                                    label: {
                                        show: true
                                    }
                                }
                            },
                            {
                                name: 'Top 5',
                                type: 'effectScatter',
                                coordinateSystem: 'bmap',
                                data: convertData(data.sort(function (a, b) {
                                    return b.value - a.value;
                                }).slice(0, 6)),
                                symbolSize: function (val) {
                                    return val[2] / 10;
                                },
                                encode: {
                                    value: 2
                                },
                                showEffectOn: 'render',
                                rippleEffect: {
                                    brushType: 'stroke'
                                },
                                hoverAnimation: true,
                                label: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                },
                                itemStyle: {
                                    color: 'purple',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                },
                                zlevel: 1
                            },
                            {

                            name:'陕西省',

                            label: {

                                normal: {

                                    show: true,

                                },

                                emphasis: {

                                    show: true

                                }

                            },

                            itemStyle: {

                                color: '#ddb926'

                            },

                            type: 'map',

                            zoom: 3,//缩放比例

                            roam: true,

                            mapType: 'dalian',

                            emphasis: {

                                label: {

                                    show: false

                                }

                            },

                            // 文本位置修正

                            textFixed: {

                                Alaska: [20, -20]

                            },

                            data: [
                                // {name: '西安', value: 91},

                            ]

                        }],

                        //右下角数值条

                        visualMap: {

                            left: 'right',

                            min: 1,

                            max: 100,
                            show:false,

                            inRange: {

                                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']

                            },

                            //text: ['High', 'Low'], // 文本，默认为数值文本

                            calculable: true

                        },

                        // tooltip: {
                        //
                        //     trigger: 'item',
                        //
                        //     showDelay: 0,
                        //
                        //     transitionDuration: 0.2,
                        //
                        //     formatter: function(params) {
                        //
                        //         var value = (params.value + '').split('.');
                        //
                        //         value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                        //
                        //         return params.seriesName + '<br/>' + params.name + ': ' + value;
                        //
                        //     }
                        //
                        // },

                    });

                })

            },
            getStatistic(){
                // reqAdminStatistic({}).then((res) => {
                //     if (res.data.code == 1) {
                //         this.projects =  res.data.data.projects;
                //         this.orders = res.data.data.orders;
                //         this.business =  res.data.data.business;
                //         this.webUsers =  res.data.data.users;
                //     }
                // });
            },
            getProjectsAndOrders(){
                // var that = this;
                // reqProjectsAndOrders({}).then((res) => {
                //     if (res.data.code == 1) {
                //         that.projectArray = res.data.data.projects.split(',');
                //         that.ordersArray = res.data.data.orders.split(',');
                //         that.businessArray = res.data.data.businesss.split(',');
                //         that.usersArray = res.data.data.users.split(',');
                //
                //         this.createProjectChart();
                //         this.createOrdersChart();
                //         this.createBusinessChart();
                //         this.createUserChart();
                //     }
                // });
            },
            createProjectChart(){
                //  var echarts = require('echarts');
                // require('echarts/extension/bmap/bmap');
                // var myChart = this.$echarts.init(document.getElementById('orders'));
                // myChart.setOption({
                //     title: {
                //         text: 'ECharts 入门示例'
                //     },
                //     tooltip: {},
                //     xAxis: {
                //         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                //     },
                //     yAxis: {},
                //     series: [{
                //         name: '销量',
                //         type: 'bar',
                //         data: [5, 20, 36, 10, 10, 20]
                //     }]
                // });

                var data = [
                    {name: '西安', value: 91},
                ];
                var geoCoordMap = {
                    '西安':[108.95,34.27],
                };

                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };

                var labelOption =
                    {
                        title: {
                            text: '全国主要城市空气质量 - 百度地图',
                            subtext: 'data from PM25.in',
                            sublink: 'http://www.pm25.in',
                            left: 'center'
                        },
                        tooltip : {
                            trigger: 'item'
                        },
                        bmap: {
                            center: [107.8, 33.42],
                            zoom: 8,
                            roam: true,
                            mapStyle: {
                                styleJson: [{
                                    'featureType': 'water',
                                    'elementType': 'all',
                                    'stylers': {
                                        'color': '#d1d1d1'
                                    }
                                }
                                ]
                            }
                        },
                        series : [
                            {
                                name: 'pm2.5',
                                type: 'scatter',
                                coordinateSystem: 'bmap',
                                data: convertData(data),
                                symbolSize: function (val) {
                                    return val[2] / 10;
                                },
                                encode: {
                                    value: 2
                                },
                                label: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: false
                                },
                                itemStyle: {
                                    color: 'purple'
                                },
                                emphasis: {
                                    label: {
                                        show: true
                                    }
                                }
                            },
                            {
                                name: 'Top 5',
                                type: 'effectScatter',
                                coordinateSystem: 'bmap',
                                data: convertData(data.sort(function (a, b) {
                                    return b.value - a.value;
                                }).slice(0, 6)),
                                symbolSize: function (val) {
                                    return val[2] / 10;
                                },
                                encode: {
                                    value: 2
                                },
                                showEffectOn: 'render',
                                rippleEffect: {
                                    brushType: 'stroke'
                                },
                                hoverAnimation: true,
                                label: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                },
                                itemStyle: {
                                    color: 'purple',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                },
                                zlevel: 1
                            }
                        ]
                    };

                // var labelOption = {
                //     normal: {
                //         show: true,
                //         align: 'center',
                //         verticalAlign: 'middle',
                //         position: 'insideBottom',
                //         distance: 15,
                //         formatter: function(params){return params['value']==0?'':params['value']},
                //         fontSize: 16,
                //         rich: {
                //             name: {
                //                 textBorderColor: '#fff'
                //             }
                //         }
                //     }
                // };
                // let projectsChart = this.$echarts.init(document.getElementById('projects'));
                // projectsChart.setOption(
                //     labelOption
                // );
                // window.addEventListener('resize', function () {
                //     projectsChart.resize();
                // });
            },
            createOrdersChart(){
                // var labelOption = {
                //     normal: {
                //         show: true,
                //         align: 'center',
                //         verticalAlign: 'middle',
                //         position: 'insideBottom',
                //         distance: 15,
                //         formatter: function(params){return params['value']==0?'':params['value']},
                //         fontSize: 16,
                //         rich: {
                //             name: {
                //                 textBorderColor: '#fff'
                //             }
                //         }
                //     }
                // };
                // let OrdersChart = echarts.init(document.getElementById('orders'));
                // OrdersChart.setOption({
                //     title: { text: '血压统计', padding: [3, 15]},
                //     color: ['#C4A466'],
                //     tooltip: {},
                //     legend: {
                //         data: ['血压'],
                //         bottom: 0
                //     },
                //     toolbox: {
                //         show : true,
                //         feature : {
                //             dataView : {show: true, readOnly: false},
                //             magicType : {show: true, type: ['line', 'bar']},
                //             restore : {show: true},
                //             saveAsImage : {show: true}
                //         }
                //     },
                //     xAxis: [
                //         {
                //             type: 'category',
                //             axisTick: {show: true},
                //             data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                //         }
                //     ],
                //     yAxis: [
                //         {
                //             type: 'value'
                //         }
                //     ],
                //     series: [
                //         {
                //             name: '血压',
                //             type: 'bar',
                //             label: labelOption,
                //             data: this.ordersArray
                //         },
                //     ]
                // });
                // window.addEventListener('resize', function () {
                //     OrdersChart.resize();
                // });
            },
            createBusinessChart(){
                // var labelOption = {
                //     normal: {
                //         show: true,
                //         align: 'center',
                //         verticalAlign: 'middle',
                //         position: 'insideBottom',
                //         distance: 15,
                //         formatter: function(params){return params['value']==0?'':params['value']},
                //         fontSize: 16,
                //         rich: {
                //             name: {
                //                 textBorderColor: '#fff'
                //             }
                //         }
                //     }
                // };
                // let businessChart = echarts.init(document.getElementById('business'));
                // businessChart.setOption({
                //     title: { text: '计步统计', padding: [3, 15]},
                //     color: ['#C4A466'],
                //     tooltip: {},
                //     legend: {
                //         data: ['计步'],
                //         bottom: 0
                //     },
                //     toolbox: {
                //         show : true,
                //         feature : {
                //             dataView : {show: true, readOnly: false},
                //             magicType : {show: true, type: ['line', 'bar']},
                //             restore : {show: true},
                //             saveAsImage : {show: true}
                //         }
                //     },
                //     xAxis: [
                //         {
                //             type: 'category',
                //             axisTick: {show: true},
                //             data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                //         }
                //     ],
                //     yAxis: [
                //         {
                //             type: 'value'
                //         }
                //     ],
                //     series: [
                //         {
                //             name: '计步',
                //             type: 'bar',
                //             label: labelOption,
                //             data: this.businessArray
                //         },
                //     ],
                // });
                // window.addEventListener('resize', function () {
                //     businessChart.resize();
                // });
            },
            createUserChart(){
                // var labelOption = {
                //     normal: {
                //         show: true,
                //         align: 'center',
                //         verticalAlign: 'middle',
                //         position: 'insideBottom',
                //         distance: 15,
                //         formatter: function(params){return params['value']==0?'':params['value']},
                //         fontSize: 16,
                //         rich: {
                //             name: {
                //                 textBorderColor: '#fff'
                //             }
                //         }
                //     }
                // };
                // let usersChart = echarts.init(document.getElementById('users'));
                // usersChart.setOption({
                //     title: { text: 'GPS统计', padding: [3, 15]},
                //     color: ['#C4A466'],
                //     tooltip: {},
                //     legend: {
                //         data: ['GPS'],
                //         bottom: 0
                //     },
                //     toolbox: {
                //         show : true,
                //         feature : {
                //             dataView : {show: true, readOnly: false},
                //             magicType : {show: true, type: ['line', 'bar']},
                //             restore : {show: true},
                //             saveAsImage : {show: true}
                //         }
                //     },
                //     xAxis: [
                //         {
                //             type: 'category',
                //             axisTick: {show: true},
                //             data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                //         }
                //     ],
                //     yAxis: [
                //         {
                //             type: 'value'
                //         }
                //     ],
                //     series: [
                //         {
                //             name: 'GPS',
                //             type: 'bar',
                //             label: labelOption,
                //             data: this.usersArray
                //         },
                //     ],
                // });
                // window.addEventListener('resize', function () {
                //     usersChart.resize();
                // });
            },
        },
        mounted(){
            // this.baiduMap();
            this.baiduMap2();
     // this.createProjectChart();
     // this.init();
//      this.getStatistic();
//      this.getProjectsAndOrders();
        }
    }
</script>

<style scoped>

    .block {
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .newtit{text-align:center;font-size:20px;margin:20px 0px;font-weight:bold;}
    .big_nav{margin-bottom:10px;font-size:16px;}
    .news_name{height:40px;border-bottom:3px solid #e2e2e2;}
    .news_name h1{border-bottom:3px solid #d50f10;line-height:37px;display:inline-block;font-size:18px;color:#d50f10;}
    .newtime{text-align:center;font-size:16px;color:#999;margin:10px 0px;line-height:40px;border-bottom:dashed 1px #dfdfdf;padding-bottom:10px;}
    .newtime span{margin:0px 20px;}
    .newcon{line-height:28px;font-size:16px;text-indent:2em;margin:10px 0px;padding-top:10px;}
    .newsbox ul li{    padding: 15px 0px 5px 0px;border-bottom:1px dashed #c6c6c6}
    .newslist{position:relative;}
    .new_time{position:absolute;right:0px;top:0px;font-size:16px;}
    .newslist .title{border-left:3px solid #d50f10;padding-left:10px;font-size:16px;margin-bottom:10px;}
    .newslist .title a{color:#000;}
    .newslist .title a:hover{color:#d50f10;}
    .newslist .title b{color:#d50f10;margin-right:5px;}
    .newslist .desc{margin-left: 15px;line-height: 26px;}
    .block .number {
        display: inline-block;
        float: right;
        font-size: 50px;
    }
    .first-row .block { height: 300px; color: #fff; }
    .first-row .block.b1 { background-color: #C4A466; }
    .first-row .block.b2 { background-color: #006699; }
    .first-row .block.b3 { background-color: rgb(243, 105, 151); }
    .first-row .block.b4 { background-color: #4CABCE; }
    .second-row .block { height: 300px; }
</style>