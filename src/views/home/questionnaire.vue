<template>
    <div class="main">
        <div class="container">
            <section class="row">
                <h2 class="col-md-12 m-tit">
                    <em>问卷调查</em>
                </h2>
                <p class="awk">
                    为了了解基层党建的工作情况，我们制作了该问卷。感谢您能抽出几分钟时间来参加本次答题，该问卷不会公布您的个人信息，请您根据实际情况作答。非常感谢您支持我们的工作！
                </p>
                <div class="col-md-12 bd-upon">

                    <!--<ol class="wl-progress active-1 clearfix">-->
                        <!--<li class="wl-progress-1">-->
                            <!--<span>提交申请</span>-->
                            <!--<i class="point"></i>-->
                        <!--</li>-->
                        <!--<li class="wl-progress-2">-->
                            <!--<span>审核</span>-->
                            <!--<i class="point"></i>-->
                        <!--</li>-->
                        <!--<li class="wl-progress-4">-->
                            <!--<span>受理中</span>-->
                            <!--<i class="point"></i>-->
                        <!--</li>-->
                        <!--<li class="wl-progress-5">-->
                            <!--<span>完成</span>-->
                            <!--<i class="point"></i>-->
                        <!--</li>-->
                    <!--</ol>-->
                    <div style="width: 100%;margin-top: 25px">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" id="fsnrRegFm" class="form-horizontal demo-ruleForm re-reg-box re-query-box" >
                            <el-form-item label="" prop="deviceIMEI" class="form-group row">
                                <label class="col-sm-4 control-label" >您的姓名：<span class="text-red"> *</span></label>
                                <el-input v-model="ruleForm.deviceIMEI" class="aa col-sm-5" placeholder="请输入姓名" tabindex="1"></el-input>
                            </el-form-item>
                            <el-form-item label="" prop="deviceIMEI" class="form-group row">
                                <label class="col-sm-4 control-label" >您的职位：<span class="text-red"> *</span></label>
                                <el-input v-model="ruleForm.deviceIMEI" class="aa col-sm-5" placeholder="请输入职位" tabindex="1"></el-input>
                            </el-form-item>
                            <el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您的政治面貌：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择政治面貌">
                                    <el-option v-for="(item,index) in navData"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您的年龄：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择年龄">
                                    <el-option v-for="(item,index) in navData2"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您认为当前的党建工作如何：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择">
                                    <el-option v-for="(item,index) in navData3"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">你了解党建工作的主要途径是：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择">
                                    <el-option v-for="(item,index) in navData4"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您所在党组织属于：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择">
                                    <el-option v-for="(item,index) in navData5"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您所在的党组织多久开展一次活动：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择">
                                    <el-option v-for="(item,index) in navData6"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item><el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您所在的党组织制度建设情况如何：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择">
                                    <el-option v-for="(item,index) in navData7"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item><el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您认为当前基层党组织在发展党员方面做得如何：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择">
                                    <el-option v-for="(item,index) in navData8"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item><el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您如何评价所在党组织对党员的管理：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择">
                                    <el-option v-for="(item,index) in navData9"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item><el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您认为当前基层党建工作存在最突出的问题是：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择">
                                    <el-option v-for="(item,index) in navData10"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item><el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您认为应该更好地去管理党员：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择">
                                    <el-option v-for="(item,index) in navData11"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item><el-form-item label="" prop="code" class="form-group row">
                                <label class="col-sm-4 control-label">您认为应该如何改善当前基层党组织日常生活：<span class="text-red"> *</span></label>
                                <el-select v-model="ruleForm.code" class="col-sm-5" placeholder="请选择">
                                    <el-option v-for="(item,index) in navData12"  :label="item.name" :value="item.name"></el-option>
                                </el-select>
                            </el-form-item>
                            <!--<el-form-item label="" prop="contacts" class="form-group row">-->
                                <!--<label class="col-sm-4 control-label" >联系电话<span class="text-red"> *</span></label>-->
                                <!--<el-input v-model="ruleForm.contacts" class="aa col-sm-5" placeholder="您的联系电话" tabindex="1"></el-input>-->
                            <!--</el-form-item>-->
                            <!--<el-form-item label="" prop="mobile" class="form-group row">-->
                                <!--<label class="col-sm-4 control-label">手机号码<span class="text-red"> *</span></label>-->
                                <!--<el-input v-model="ruleForm.mobile" class="aa col-sm-5" placeholder="您的常用号码" tabindex="1" ></el-input>-->
                            <!--</el-form-item>-->
                            <!--<el-form-item label="" class="form-group row">-->
                            <!--<label class="col-sm-4 control-label" >联系地址<span class="text-red"> *</span></label>-->
                            <!--<el-row class="aa col-sm-5">-->
                            <!--<el-col class="col-xs-12 col-sm-6 pl0 pr0">-->
                            <!--<el-form-item prop="province">-->
                            <!--<el-select v-model="ruleForm.province" @change="choseProvince" class="" placeholder="请选择省">-->
                            <!--<el-option v-for="(item,index) in province1" :key="item.province" :value-key="item.province" :label="item.province" :value="item"></el-option>-->
                            <!--</el-select>-->
                            <!--</el-form-item>-->
                            <!--</el-col>-->
                            <!--<el-col class="col-xs-12 col-sm-6 pl0 pr0">-->
                            <!--<el-form-item prop="city">-->
                            <!--<el-select v-model="ruleForm.city" @change="choseCity"  placeholder="请选择市">-->
                            <!--<el-option v-for="item in shi1"	:key="item.id"	:label="item.city"	:value="item.city"></el-option>-->
                            <!--</el-select>-->
                            <!--</el-form-item>-->
                            <!--</el-col>-->
                            <!--</el-row>-->
                            <!--</el-form-item>-->

                            <!--<el-form-item label="" prop="addr" class="form-group row">-->
                                <!--<label class="col-sm-4 control-label">其他建议</label>-->
                                <!--<el-input v-model="ruleForm.addr" class="aa col-sm-5" placeholder="其他建议" tabindex="1"></el-input>-->
                            <!--</el-form-item>-->
                            <!--<el-form-item label="" prop="buyTime" class="form-group row">-->
                                <!--<label class="col-sm-4 control-label">购买时间&nbsp;&nbsp;&nbsp;</label>-->
                                <!--<div  class="aa col-sm-5 col-xs-12 row ml0">-->
                                    <!--<el-date-picker-->
                                            <!--v-model="ruleForm.buy_time"-->
                                            <!--align="right"-->
                                            <!--type="date"-->
                                            <!--placeholder="选择日期"-->
                                            <!--format="yyyy 年 MM 月 dd 日"-->
                                            <!--value-format="yyyy-MM-dd"-->
                                            <!--:picker-options="pickerOptions1">-->
                                    <!--</el-date-picker>-->
                                <!--</div>-->
                            <!--</el-form-item>-->
                            <el-form-item label="" prop="describe" class="form-group row">
                                <label class="col-sm-4 control-label">您认为应该如何增强基层党建：</label>
                                <el-input type="textarea" class="aa col-sm-5" v-model="ruleForm.describe" placeholder="您认为应该如何增强基层党建" tabindex="1"></el-input>
                            </el-form-item>   <el-form-item label="" prop="describe" class="form-group row">
                                <label class="col-sm-4 control-label">其他建议：</label>
                                <el-input type="textarea" class="aa col-sm-5" v-model="ruleForm.describe" placeholder="其他建议" tabindex="1"></el-input>
                            </el-form-item>
                            <!--<el-form-item label="" prop="file" class="form-group row" ref="uploadElement">-->
                            <!--<label class="col-sm-4 control-label">故障图片<span class="text-red"> *</span></label>-->
                            <!--<div class="col-sm-6">-->
                            <!--<div class="nr-up-box clearfix">-->
                            <!--<el-upload-->
                            <!--ref="uploadxls"-->
                            <!--action=""-->
                            <!--:limit="3"-->
                            <!--list-type="picture-card"-->
                            <!--accept="image/png,image/gif,image/jpg,image/jpeg"-->
                            <!--:before-upload="beforeupload"-->
                            <!--:http-request="aa"-->
                            <!--:on-change="shangchuan"-->
                            <!--:on-preview="handlePictureCardPreview"-->
                            <!--:on-remove="handleRemove"-->
                            <!--&gt;-->
                            <!--<i class="el-icon-plus"></i>-->
                            <!--</el-upload>-->
                            <!--<el-dialog :visible.sync="dialogVisible">-->
                            <!--<img width="100%" :src="dialogImageUrl" alt="">-->
                            <!--</el-dialog>-->
                            <!--</div>-->
                            <!--<div class="clearfix mt-sm small"><span class="text-red">请上传产品故障照片（最多不超过三张），缺失或错误将影响审核结果</span></div>-->
                            <!--</div>-->
                            <!--</el-form-item>-->

                            <el-form-item>
                                <label class="col-sm-4 control-label"></label>
                                <div class="aa col-sm-5">
                                    <el-button type="danger" class="btn btn-primary" @click="submitForm('ruleForm')">提交</el-button>
                                    <!--<el-button class="btn btn-default" @click="resetForm('ruleForm')">重写</el-button>-->
                                </div>
                            </el-form-item>
                        </el-form>
                    </div>

                </div>
            </section>
        </div>
    </div>


</template>

<script>
    // import {addMaintenance,findProvinceCode,findCityCode} from '../../api/web-api/repair-api'
    // import {productLists} from '../../api/web-api/index'
    // import {isvalidPhone} from '../../common/validate'
//    import {removeArray} from '../../common/util'
//     var validPhone=(rule, value,callback)=>{
//         if (!value){
//             callback(new Error('请输入手机号码'))
//         }else  if (!isvalidPhone(value)){
//             callback(new Error('请输入正确的11位手机号码'))
//         }else {
//             callback()
//         }
//     }
    export default {
        data() {
            return {
                fileList: [],
                province1:[],
                navData:[
                    {
                      id:1,
                      name:'中共党员',
                    },{
                      id:1,
                      name:'共青团员',
                    },{
                      id:1,
                      name:'民主党派',
                    },{
                      id:1,
                      name:'群众',
                    },
                ],  navData2:[
                    {
                      id:1,
                      name:' 20-30岁',
                    },{
                      id:1,
                      name:'31-40岁',
                    },{
                      id:1,
                      name:'41-50岁',
                    },{
                      id:1,
                      name:'50岁以上',
                    },
                ],navData3:[
                    {
                      id:1,
                      name:'有力地促进了学校、公司等工作单位的改革发展',
                    },{
                      id:1,
                      name:'对促进学生健康成长有很大作用',
                    },{
                      id:1,
                      name:'树立了一批先进典型，发挥了党员的模范带头作用',
                    },{
                      id:1,
                      name:'内容比较陈旧，形式比较单一，作用越来越小',
                    },{
                      id:1,
                      name:'党建工作与实际工作相脱节，看起来热闹，但效果不佳',
                    },
                ],navData4:[
                    {
                      id:1,
                      name:' 党课',
                    },{
                      id:1,
                      name:' 广播、电视、报纸等新闻媒体',
                    },{
                      id:1,
                      name:' 党内生活或党组织活动',
                    },{
                      id:1,
                      name:'思想政治理论课',
                    },{
                      id:1,
                      name:'学校的思想政治教育网站',
                    },
                ],navData5:[
                    {
                      id:1,
                      name:'机关事业单位',
                    },{
                      id:1,
                      name:' 企业',
                    },{
                      id:1,
                      name:'学校',
                    },{
                      id:1,
                      name:'街道社区',
                    },{
                      id:1,
                      name:'农村',
                    },
                ],navData6:[
                    {
                      id:1,
                      name:' 一周',
                    },{
                      id:1,
                      name:' 半个月',
                    },{
                      id:1,
                      name:'一个月',
                    },{
                      id:1,
                      name:' 三个月',
                    },{
                      id:1,
                      name:'不确定',
                    },
                ],navData7:[
                    {
                      id:1,
                      name:'制度健全，并得到严格的贯彻落实',
                    },{
                      id:1,
                      name:' 制定了制度并公示，但并未很好地执行',
                    },{
                      id:1,
                      name:'制定了一些制度，但具体规定不清楚',
                    },{
                      id:1,
                      name:' 未制定任何制度',
                    },
                ],navData8:[
                    {
                      id:1,
                      name:'质量较好，速度适中',
                    },{
                      id:1,
                      name:' 质量较好，速度较慢',
                    },{
                      id:1,
                      name:'质量一般，速度减缓',
                    },{
                      id:1,
                      name:'发展情况较差',
                    },
                ],navData9:[
                    {
                      id:1,
                      name:'管理规范，科学合理',
                    },{
                      id:1,
                      name:' 管理一般，要求较严',
                    },{
                      id:1,
                      name:'管理松懈，要求不严',
                    },{
                      id:1,
                      name:'基本没管',
                    },
                ],navData10:[
                    {
                      id:1,
                      name:' 领导不重视，工作摆不上应有的位置',
                    },{
                      id:1,
                      name:' 工作内容贫乏，方式方法传统单一，缺乏吸引力',
                    },{
                      id:1,
                      name:'体制不顺，脱离实际，难以适应形势发展和工作任务的需要',
                    },{
                      id:1,
                      name:'机关党务干部队伍素质、结构参差不齐，不安心党务工作',
                    },{
                      id:1,
                      name:'挺好的，没问题',
                    },
                ],navData11:[
                    {
                      id:1,
                      name:'开展征求群众意见活动，对党员开展民主评议',
                    },{
                      id:1,
                      name:' 开展谈心谈话活动',
                    },{
                      id:1,
                      name:'开展个人党性分析',
                    },{
                      id:1,
                      name:'召开专题组织生活会和民主生活会',
                    },
                ],navData12:[
                    {
                      id:1,
                      name:'发挥党员的主体作用',
                    },{
                      id:1,
                      name:' 丰富组织生活的内容',
                    },{
                      id:1,
                      name:'增强对组织生活的经费投入',
                    },
                ],
                shi1: [],
                qu1: [],
                pageNum: 1,
                pageSize: 50,
                dialogImageUrl: '',
                dialogVisible: false,
                doUpload:false,
                formData: new FormData(),
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
//                    ,
//                    shortcuts: [{
//                        text: '今天',
//                        onClick(picker) {
//                            picker.$emit('pick', new Date());
//                        }
//                    }, {
//                        text: '昨天',
//                        onClick(picker) {
//                            const date = new Date();
//                            date.setTime(date.getTime() - 3600 * 1000 * 24);
//                            picker.$emit('pick', date);
//                        }
//                    }]
                },
                ruleForm: {
                    code:'',
                    deviceIMEI: '',
                    contacts: '',
                    mobile: '',
                    province: '',
                    city: '',
                    addr: '',
                    describe: '',
                    buy_time:''
                },
                rules: {
                    // deviceIMEI: [
                    //     {required: true, message: '请输入产品编号', trigger: 'blur'},
                    //     {min: 10, max: 20, message: '长度在 10 到 20 个字符', trigger: 'blur'}
                    // ],
                    // code: [
                    //     {required: true, message: '请选择产品型号', trigger: 'change'}
                    // ],
                    // contacts: [
                    //     {required: true, message: '请输入联系人姓名', trigger: 'blur'}
                    // ],
                    // mobile: [
                    //     {required: true, validator: validPhone, trigger: 'blur'}
                    // ],
                    // province: [
                    //     {required: true, message: '请选择省', trigger: 'change'}
                    // ],
                    // city: [
                    //     {required: true, message: '请选择市', trigger: 'change'}
                    // ],
                    // addr: [
                    //     {required: true, message: '请输入详细地址', trigger: 'blur'}
                    // ],
                    // describe: [
                    //     {required: true, message: '请填写故障描述信息', trigger: 'blur'}
                    // ],
                    // file: [
                    //     {required: true, message: '请上传图片'}
                    // ],
                    // buy_time:[
                    //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    //     ]
                }
            };
        },
        mounted() {
            // this.getNav();
            // this.getProvinceData();
        },
//         methods: {
//             getNav:function () {
//                 let para = {
//                     pageNum: this.pageNum,
//                     pageSize: this.pageSize
//                 };
//                 productLists(para).then((res) => {
//                     if (res.data.code===1) {
//                         if (res.data.data.records) {
//                             this.navData = res.data.data.records;
//                         }
//                     }else{
//                         that.$message({
//                             message: res.data.msg,
//                             type: 'error'
//                         });
//                     }
//                 })
//             },
//             submitForm(formName) {
//                 let that = this;
//                 that.formData=new FormData();
//                 if(this.fileList.length){
//                     this.$refs['ruleForm'].validateField('file');
//                 }
//                 that.rules.file = [{ required: true, message: '请上传图片' }]
//                 if ( this.doUpload) {
//                     that.rules.file = []
//                     that.$refs['uploadElement'].clearValidate()
//                 }
//                 this.$refs[formName].validate((valid) => {
//                     if (valid) {
//                         this.fileList.forEach((item,index)=> {
//                             that.formData.append('file', item)
//                         })
//                         //console.log(that.formData.getAll('file'));//查找所有的值
//                         that.formData.append('code', that.ruleForm.code)
//                         that.formData.append('productNumber', that.ruleForm.deviceIMEI)
//                         that.formData.append('contacts', that.ruleForm.contacts)
//                         that.formData.append('mobile', that.ruleForm.mobile)
//                         that.formData.append('province', that.ruleForm.province)
//                         that.formData.append('city', that.ruleForm.city)
//                         that.formData.append('addr', that.ruleForm.addr)
//                         that.formData.append('description', that.ruleForm.describe)
//                         that.formData.append('buy_time', that.ruleForm.buy_time)
//                         //console.log(that.formData.get('file'));
//                         //console.log('提交的时间',that.formData.get('buy_time'));
//                         addMaintenance(that.formData).then((res) => {
//                             if (res.data.code===1) {
//                                 that.$message({
//                                     message: '提交成功',
//                                     type: 'success'
//                                 });
//                                 that.$refs.ruleForm.dialogImageUrl = 'none'
//                                 that.$refs.uploadxls.clearFiles()
//                                 that.formData = new FormData()
//                                 that.$refs.ruleForm.resetFields();
//                                 this.fileList=[];
// //                                that.$router.push({path: "/"});
//                             }  else {
//                                 that.$message({
//                                     message: res.data.msg,
//                                     type: 'error'
//                                 });
//                             }
//                         })
//                     } else {
//                         console.log('error submit!!');
//                         return false;
//                     }
//                 });
//             },
//             resetForm(formName) {
//                 this.$refs[formName].resetFields();
//                 this.ruleForm.buy_time='';
//             },
//             // 图片预览
//             handlePictureCardPreview (file) {
//                 this.dialogImageUrl = file.url;
//                 this.dialogVisible = true;
//                 this.doUpload = true;
// //                this.$refs['ruleForm'].validateField('file');
//             },
//             // 上传
//             shangchuan (file) {
//                 this.doUpload = true;
//             },
//             aa(file){
//             },
//             //阻止upload的自己上传，进行再操作
//             beforeupload (file) {
//                 this.fileList.push(file);
// //                this.formData.append('file', file)
//                console.log(this.fileList)
//             },
//             handleRemove(file, fileList) {
//                 this.fileList.forEach((item,index)=>{
//                     if(item.name==file.name){
//                         this.fileList.splice(index, 1);
//                     }
//                 })
//                 console.log(this.fileList);
//             },
//             getProvinceData:function(){
//                 var that = this;
//                 findProvinceCode().then((res) => {
//                     if (res.data.code===1) {
//                         that.province1 = []
//                         that.shi1 = []
//                         that.qu1 = []
//                         that.province1=res.data.data;
//                     }  else {
//                         that.$message({
//                             message: res.data.msg,
//                             type: 'error'
//                         });
//                     }
//                 })
//             },
//             getCityData:function(provinceId){
//                 var that = this;
//                 let para = {
//                     provinceId: provinceId,
//                 };
//                 findCityCode(para).then((res) => {
//                     if (res.data.code===1) {
//                         that.shi1 = []
//                         that.qu1 = []
//                         that.shi1=res.data.data;
//                     }  else {
//                         that.$message({
//                             message: res.data.msg,
//                             type: 'error'
//                         });
//                     }
//                 })
//             },
//             // 选省 370000 province
//             choseProvince:function(e) {
//                 console.log(e,'province');
//                 this.ruleForm.province = e.province;
//                 this.getCityData(e.provinceid);
//             },
//             // 选市
//             choseCity:function(e) {
//                 console.log(e,'city');
//             }
//             // 选区
// //            choseBlock:function(e) {
// //                this.E=e;
// //                console.log(this.E)
// //            },
//
//         }
    }

</script>

<style scoped lang="scss">
    .mb-sm {
        margin-bottom: 10px;
    }
    .mt-sm {
        margin-top: 10px;
    }
    @media (min-width: 768px){
        .main {
            width: 750px;
        }
        .col-sm-5 {
            width: 41.66666667%;
        }
        /*.re-query-box .form-control {*/
            /*width: 300px;*/
        /*}*/
        /*.re-query-box .form-verify {*/
            /*width: 150px;*/
        /*}*/
        .returned-box, .main {
            margin: 40px auto;
            border-radius: 5px;
        }
    }
    @media (min-width: 992px){
        .main {
            width: 970px;
        }
    }
    @media (min-width: 1200px){
        .main {
            width: 1170px;
        }
    }

    /*.el-date-editor.el-input, .el-date-editor.el-input__inner {*/
        /*width: 100%;*/
    /*}*/
    .el-input__inner{
        border: 1px solid #ccc;
    }
    .returned-box, .main {
        background: #fff;
    }
    .awk{
        margin-bottom: 15px;
        font-size: 14px;
    }
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    .m-tit {
        /*width: 97%;*/
        line-height: 30px;
        font-size: 19px;
        margin: 15px 0 15px 25px;
        font-weight: 800;
    }
    .m-tit em {
        font-style: normal;
    }
    .bd-upon {
        border-top: 1px solid #ddd;
    }
    .wl-progress {
        width: 80%;
        min-width: 260px;
        height: 100px;
        margin: 20px auto 0;
        color: #999;
        list-style: none;
        padding: 0;
        overflow: visible !important;
    }
    .wl-progress li.wl-progress-1 {
        width: 15px;
    }
    .active-1 .wl-progress-1, .active-2 .wl-progress-1, .active-2 .wl-progress-2, .active-3 .wl-progress-1, .active-3 .wl-progress-2, .active-3 .wl-progress-3, .active-4 .wl-progress-1, .active-4 .wl-progress-2, .active-4 .wl-progress-3, .active-4 .wl-progress-4, .active-5 .wl-progress-1, .active-5 .wl-progress-2, .active-5 .wl-progress-3, .active-5 .wl-progress-4, .active-5 .wl-progress-5 {
        /* border-color: #338eff; */
        color: #333;
    }
    .wl-progress li.wl-progress-1 .point {
        right: -15px;
    }
    .active-1 .wl-progress-1 .point, .active-2 .wl-progress-1 .point, .active-2 .wl-progress-2 .point, .active-3 .wl-progress-1 .point, .active-3 .wl-progress-2 .point, .active-3 .wl-progress-3 .point, .active-4 .wl-progress-1 .point, .active-4 .wl-progress-2 .point, .active-4 .wl-progress-3 .point, .active-4 .wl-progress-4 .point, .active-5 .wl-progress-1 .point, .active-5 .wl-progress-2 .point, .active-5 .wl-progress-3 .point, .active-5 .wl-progress-4 .point, .active-5 .wl-progress-5 .point {
        background-color: #338eff;
    }
    .wl-progress .point {
        position: absolute;
        z-index: 1;
        right: -15px;
        top: -16px;
        display: block;
        width: 30px;
        height: 30px;
        background-color: #ddd;
        border-radius: 50%;
    }
    .wl-progress li {
        position: relative;
        float: left;
        width: 32%;
        margin-top: 14px;
        border-top: 2px solid #ddd;
        text-align: right;
        text-align: -3em;
    }
    .wl-progress li span {
        display: block;
        width: 70px;
        top: 25px;
        text-align: center;
        position: absolute;
        right: -35px;
    }
    .nr-up-img {
        position: relative;
        float: left;
        margin-right: 10px;
        width: 80px;
        height: 80px;
        overflow: hidden;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ddd;
        font-size: 14px;
        text-align: center;
        line-height: 80px;
        color: #999;
    }
    .nr-up-img img {
        position: absolute;
        left: 50%;
        top: 50%;
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
    .nr-up-img input {
        position: absolute;
        font-size: 100em;
        right: -10px;
        bottom: -10px;
        z-index: 1;
    }
    .nr-up-box{
        overflow: visible;
        margin-bottom: 10px;
    }
    .btn-default {
        color: #666;
    }
    .ml-sm {
        margin-left: 10px;
    }
    .text-red {
        color: red;
    }
    /*验证码*/
    .code {
        /*margin: 400px auto;*/
        width: 100px;
        height: 34px;
        display: inline-block;
        border: 1px solid #ddd;
        vertical-align: middle;
        margin-left: 15px;
    }

    @media (max-width: 768px){
        .grid, .page .grid {
            width: 100%;
        }
        .page-post {
            margin: 20px 20px 0;
            padding-bottom: 20px;
        }
        .page h2, .page h3 {
            margin: 1em 0 .6em;
        }
        .wl-progress {
            height: 60px;
        }
        .wl-progress li {
            width: 30%;
            font-size: 12px;
        }
        .el-select {
            width: 100%;
        }
    }
    .el-carousel__mask, .el-cascader-menu, .el-cascader-menu__item.is-disabled:hover, .el-collapse-item__header, .el-collapse-item__wrap {
        /*background-color: #25aad6;*/
        background-color: #252525;
    }
    .el-collapse-item__header {
        height: 40px;
        line-height: 40px;
        color: #fff;
    }
    .el-collapse-item__arrow {
        margin-right: 5px;
        line-height: 40px;
    }
    .el-collapse-item__content {
        padding-bottom: 25px;
        font-size: 13px;
        color: #fff;
        line-height: 1.769230769230769;
    }
    .el-upload__input {
        display:none !important;
    }
    .re-query-box .el-form-item__content{
        margin-left: 0 !important;
    }
    /*.re-query-box .el-input__inner {*/
        /*height: 34px !important;*/
        /*width: 100%;*/
        /*color: #555;*/
        /*line-height: 1.42857143 !important;*/
        /*border: 1px solid #ccc;*/
        /*border-radius: 4px;*/
    /*}*/
    .re-query-box .el-form-item__error {
        padding-top: 0px;
    }
    input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color:    #999 !important;
    }
    input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:    #999 !important;
    }
    input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:    #999 !important;
    }
    input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color:    #999 !important;
    }
    #fsnrRegFm .el-form-item__content {
        line-height: inherit;
        position: relative;
        font-size: inherit;
    }
    #fsnrRegFm .el-form-item__error {
        padding-left: 15px;
    }
    .page h2, .shouhou h2, .shouhou h3{
        font-size: 2rem;
    }
    .page h2:first-child {
        margin-top: 40px;
    }
    .page h2, .page h3 {
        clear: both;
        margin: 1.5em 0 1em;
    }
    /*#fsnrRegFm .el-select {*/
    /*width: 100%;*/
    /*}*/
    @media (min-width: 768px){
        #fsnrRegFm .el-form-item__error {
            padding-top: 2px;
            left: 34%;
        }
        .mt-70{
            margin-top: -70px !important;
        }
    }
    @media (max-width: 768px) {
        .el-select-dropdown {
            left: 0px !important;
        }
        .newsdet img{
            width: 100% !important;
            height: auto !important;
        }
        .mt-70{
            margin-top: -50px !important;
        }
        .el-collapse-item__header{
            font-size: 14px;
        }
    }
    @media (min-width: 768px){
        .main {
            width: 750px;
            /*padding-top: 70px;*/
        }
        .re-query-box .form-control {
            width: 300px;
        }
        .re-query-box .form-verify {
            width: 150px;
        }
        .returned-box, .main {
            margin: 40px auto;
            border-radius: 5px;
        }
    }
    @media (min-width: 992px){
        .main {
            width: 970px;
        }
    }
    @media (min-width: 1200px){
        .main {
            width: 1170px;
        }
    }

    .returned-box, .main {
        background: #fff;
    }
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .m-tit {
        /*width: 97%;*/
        line-height: 30px;
        font-size: 19px;
        margin: 15px 0 15px 25px;
        font-weight: 800;
    }
    .m-tit em {
        font-style: normal;
    }
    .bd-upon {
        border-top: 1px solid #ddd;
    }
    .mb-sm {
        margin-bottom: 10px;
    }
    .mt-sm {
        margin-top: 10px;
    }

    @media (max-width: 768px){
        .grid, .page .grid {
            width: 100%;
        }
        .page-post {
            margin: 20px 20px 0;
            padding-bottom: 20px;
        }
        .page h2, .page h3 {
            margin: 1em 0 .6em;
        }
    }
</style>
