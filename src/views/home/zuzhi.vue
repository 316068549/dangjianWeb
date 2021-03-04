<template>
    <div class="main">
        <div class="container">
            <div class="box">
                <div class="big_nav text-left">当前位置：
                    <router-link to='/home' style="margin-top: -16px;">
                        <a class="daohang">网站首页</a>&gt;&nbsp;
                    </router-link>
                    <router-link to='/home/zuzhiji' style="margin-top: -16px;">
                        <a class="daohang">组织机构</a>
                    </router-link>
                </div>
                <h2 class="col-md-12 m-tit">
                    <em>组织机构</em>
                </h2>
                <div class="lalala">

<!--                        <el-input-->

<!--                                  placeholder="输入关键字进行过滤"-->

<!--                                  v-model="filterText"-->

<!--                                class="search">-->

<!--                        </el-input>-->

                        <el-tree

                                  :data="treeData"

                                  node-key="id"

                                  default-expand-all

                                  @node-click="handleLeftclick"

                                  @node-drag-start="handleDragStart"

                                  @node-drag-enter="handleDragEnter"

                                  @node-drag-leave="handleDragLeave"

                                  @node-drag-over="handleDragOver"

                                  @node-drag-end="handleDragEnd"

                                  @node-drop="handleDrop"

                                  @node-contextmenu="rightClick"

                                  :filter-node-method="filterNode"

                                  draggable

                                  :allow-drop="allowDrop"

                                  :allow-drag="allowDrag"
                                class="col-xs-2"

                                ref="tree">

                                <span class="slot-t-node" slot-scope="{ node, data }">

                <span v-show="!data.isEdit">

                <span :class="[data.id>= 99 ? 'slot-t-node--label' : '']">{{node.label}}</span>

                </span>

            <span v-show="data.isEdit">

                <el-input class="slot-t-input" size="mini" autofocus

                                                v-model="data.label"

                                                :ref="'slotTreeInput'+data.id"

                                                @blur.stop="NodeBlur(node,data)"

                                                @keydown.native.enter="NodeBlur(node,data)"></el-input>

            </span>

        </span>

                        </el-tree>
                    <section class="col-xs-9" style="width: 80%">
                        <section class="hot" style="margin-top: 40px">
                            <el-col :span="24" class="warp-main">
                                <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                                    <el-form :inline="true" :model="filters" style="float: left;">
                                        <el-form-item>
                                            <el-input v-model="filters.name" placeholder="标题" style="width: 240px;"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button type="danger" size="small" v-on:click="getProductPage" icon="search">查询</el-button>
                                        </el-form-item>
                                        <el-form-item >
                                            <el-button type="danger" size="small" @click="addHandle2" icon="plus">添加党员</el-button>
                                        </el-form-item>
                                        <el-form-item >
                                            <el-button type="danger" size="small" @click="addHandle" icon="plus">批量导入</el-button>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                                <el-table :data="datas" highlight-current-row v-loading="datasLoading" @selection-change="selsChange" border>
                                    <!--<el-table-column type="selection" align="center"></el-table-column>-->
                                    <!--<el-table-column type="index" align="center"></el-table-column>-->

<!--                                    <el-table-column prop="id" label="姓名" align="center"></el-table-column>-->
                                    <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                                    <el-table-column prop="name" label="性别" align="center"></el-table-column>
<!--                                    <el-table-column prop="title" label="联系电话" align="center"></el-table-column>-->
                                    <el-table-column prop="name" label="职务" align="center"></el-table-column>
                                    <el-table-column prop="createTime" label="转为正式党员日期" align="center" width="200"></el-table-column>
                                    <el-table-column prop="createTime" label="转为预备党员日期" align="center" width="200"></el-table-column>
                                    <!--<el-table-column prop="status" label="处理状态" align="center"></el-table-column>-->
                                    <el-table-column label="操作" align="center"  width="250">
                                        <template slot-scope="scope">
<!--                                            <el-button size="small" @click="goV(scope.$index,scope.row)">查看</el-button>-->
                                            <el-button size="small" @click="addHandle3(scope.row)">编辑</el-button>
                                            <el-button type="danger" @click="del(scope.$index,scope.row)" size="small">删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-col class="toolbar table-footer" style="margin-top: 30px">
                                    <el-pagination
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :page-sizes=[10,15,20,25,50]
                                            :page-size="pageSize"
                                            layout="total, sizes, prev, pager, next, jumper"
                                            :total="total" style="float:right;">
                                    </el-pagination>
                                </el-col>



                            </el-col>





                        </section>
                    </section>

                        <el-card class="box-card" ref="card" v-show="menuVisible">

                            <div @click="addSameLevelNode()" v-show="firstLevel">

                                <i class="el-icon-circle-plus-outline"></i>&nbsp;&nbsp;同级增加

                            </div>

                            <div class="add" @click="addChildNode()">

                                <i class="el-icon-circle-plus-outline"></i>&nbsp;&nbsp;子级增加

                            </div>

                            <div class="delete" @click="deleteNode()">

                                <i class="el-icon-remove-outline"></i>&nbsp;&nbsp;删除节点

                            </div>

                            <div class="edit" @click="editNode()">

                                <i class="el-icon-edit"></i>&nbsp;&nbsp;修改节点

                            </div>

                        </el-card>
<!--                    添加党员-->
                    <el-dialog title="新增" :visible.sync="addFormVisible2" width="30%" :close-on-click-modal="false" >
                        <div class="contact-edit">
                            <el-form ref="contactForm2" :model="addForm" :rules="addFormRules2" label-width="80px">
                                <el-form-item label="姓名" prop="name">
                                    <el-input v-model="addForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="性别" prop="sex">
                                    <el-radio-group v-model="addForm.sex">
                                        <el-radio :label="1">男</el-radio>
                                        <el-radio :label="2">女</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="人员类别">
                                    <el-select v-model="form.area" placeholder="请选择">
                                        <el-option label="上海" value="shanghai"></el-option>
                                        <el-option label="北京" value="beijing"></el-option>
                                        <el-option label="广州" value="guangzhou"></el-option>
                                    </el-select>
                                </el-form-item>
<!--                                <el-form-item label="角色" prop="roleId">-->
<!--                                    <el-radio-group v-model="editForm.roleId">-->
<!--                                        <el-radio v-for="item in roleArray" :label="item.roleId" :key="item.roleId">{{item.roleName}}</el-radio>-->
<!--                                    </el-radio-group>-->
<!--                                </el-form-item>-->
                                <el-form-item label="职务" prop="post">
                                    <el-input v-model="addForm.post"></el-input>
                                </el-form-item>
                                <el-form-item label="联系方式" prop="mobile">
                                    <el-input v-model="addForm.mobile"></el-input>
                                </el-form-item>
                                <el-form-item label="时间">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="addForm.date" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                                <!--                <el-form-item label="常用联系人">-->
                                <!--                    <el-switch on-text="" off-text="" v-model="form.always"></el-switch>-->
                                <!--                </el-form-item>-->
                                <!--                <el-form-item label="关系">-->
                                <!--                    <el-checkbox-group v-model="form.relationship">-->
                                <!--                        <el-checkbox label="家人" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="朋友" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="同学" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="同事" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="客户" name="type"></el-checkbox>-->
                                <!--                    </el-checkbox-group>-->
                                <!--                </el-form-item>-->
                                <el-form-item label="备注">
                                    <el-input type="textarea" v-model="addForm.desc"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit('contactForm')">确定</el-button>
                                    <el-button @click="cancelForm">取消</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-dialog>
                    <!--                    编辑党员-->
                    <el-dialog title="编辑" :visible.sync="addFormVisible3" width="30%" :close-on-click-modal="false" >
                        <div class="contact-edit">
                            <el-form ref="contactForm2" :model="addForm" :rules="addFormRules2" label-width="80px">
                                <el-form-item label="姓名" prop="name">
                                    <el-input v-model="addForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="性别" prop="sex">
                                    <el-radio-group v-model="addForm.sex">
                                        <el-radio :label="1">男</el-radio>
                                        <el-radio :label="2">女</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="人员类别">
                                    <el-select v-model="form.area" placeholder="请选择">
                                        <el-option label="上海" value="shanghai"></el-option>
                                        <el-option label="北京" value="beijing"></el-option>
                                        <el-option label="广州" value="guangzhou"></el-option>
                                    </el-select>
                                </el-form-item>
                                <!--                                <el-form-item label="角色" prop="roleId">-->
                                <!--                                    <el-radio-group v-model="editForm.roleId">-->
                                <!--                                        <el-radio v-for="item in roleArray" :label="item.roleId" :key="item.roleId">{{item.roleName}}</el-radio>-->
                                <!--                                    </el-radio-group>-->
                                <!--                                </el-form-item>-->
                                <el-form-item label="职务" prop="post">
                                    <el-input v-model="addForm.post"></el-input>
                                </el-form-item>
                                <el-form-item label="联系方式" prop="mobile">
                                    <el-input v-model="addForm.mobile"></el-input>
                                </el-form-item>
                                <el-form-item label="时间">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="addForm.date" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                                <!--                <el-form-item label="常用联系人">-->
                                <!--                    <el-switch on-text="" off-text="" v-model="form.always"></el-switch>-->
                                <!--                </el-form-item>-->
                                <!--                <el-form-item label="关系">-->
                                <!--                    <el-checkbox-group v-model="form.relationship">-->
                                <!--                        <el-checkbox label="家人" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="朋友" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="同学" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="同事" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="客户" name="type"></el-checkbox>-->
                                <!--                    </el-checkbox-group>-->
                                <!--                </el-form-item>-->
                                <el-form-item label="备注">
                                    <el-input type="textarea" v-model="addForm.desc"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit('contactForm')">确定</el-button>
                                    <el-button @click="cancelForm">取消</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-dialog>
                    <!--                    添加机构-->
                    <el-dialog title="新增" :visible.sync="addFormVisible" width="30%" :close-on-click-modal="false" >
                        <div class="contact-edit">
                            <el-form ref="contactForm" :model="form" :rules="addFormRules" label-width="80px">
                                <el-form-item label="组织机构名称" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="所属组织机构">
                                    <el-select v-model="form.sex" placeholder="请选择组织机构">
                                        <el-option label="组织机构1" value="male"></el-option>
                                        <el-option label="组织机构2" value="female"></el-option>
                                    </el-select>
                                </el-form-item>
                                <!--                <el-form-item label="所在地">-->
                                <!--                    <el-select v-model="form.area" placeholder="请选择所在地">-->
                                <!--                        <el-option label="上海" value="shanghai"></el-option>-->
                                <!--                        <el-option label="北京" value="beijing"></el-option>-->
                                <!--                        <el-option label="广州" value="guangzhou"></el-option>-->
                                <!--                    </el-select>-->
                                <!--                </el-form-item>-->
                                <el-form-item label="联系方式" prop="mobile">
                                    <el-input v-model="form.mobile"></el-input>
                                </el-form-item>
                                <!--                <el-form-item label="常用联系人">-->
                                <!--                    <el-switch on-text="" off-text="" v-model="form.always"></el-switch>-->
                                <!--                </el-form-item>-->
                                <!--                <el-form-item label="关系">-->
                                <!--                    <el-checkbox-group v-model="form.relationship">-->
                                <!--                        <el-checkbox label="家人" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="朋友" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="同学" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="同事" name="type"></el-checkbox>-->
                                <!--                        <el-checkbox label="客户" name="type"></el-checkbox>-->
                                <!--                    </el-checkbox-group>-->
                                <!--                </el-form-item>-->
                                <el-form-item label="备注">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit('contactForm')">确定</el-button>
                                    <el-button @click="cancelForm">取消</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-dialog>

                </div>


            </div>
        </div>
    </div>




</template>

<script>

    // import '../mock/mockfile.js'

    import axios from 'axios'
    import {findPageNews} from "../../api/web-api/guide-api";

    export default {


        name:'processManagement',

        data () {
            let nameValid = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('姓名不能为空'))
                } else {
                    callback()
                }
            }
            let mobileValid = (rule, value, callback) => {
                    let phonePattern = /(^\s*$)|(^[1][3,4,5,7,8][0-9]{9}$)/
                    if (value && !phonePattern.test(value)) {
                        callback(new Error('手机号格式不正确'))
                    } else {
                        callback()
                    }
                }

            return {
                type: '', // 控制是否是新建
                btnName: '',
                listData: {},
                total: 8,
                datasLoading: false,
                addLoading: false,
                filters: {
                    name: '',
                },
                addForm: {
                    name: '',
                    mobile:'',
                    sex:1,
                    title:'',
                    date: '',
                    content:'',
                },
                form: {
                    name: '',
                    phone: '',
                    sex: '',
                    area: '',
                    always: false,
                    relationship: [],
                    mobile: '',
                    id: '',
                    desc: ''
                },
                pageNum: 1,
                pageSize: 15,
                addFormRules: {
                    name: [{validator: nameValid, trigger: 'blur'}],
                    mobile: [
//            {required: true, message: '手机号不能为空', trigger: 'blur'},
                        {validator: mobileValid, trigger: 'blur'}
                    ]
                },
                addFormRules2: {
                    name: [{validator: nameValid, trigger: 'blur'}],
                    mobile: [
//            {required: true, message: '手机号不能为空', trigger: 'blur'},
                        {validator: mobileValid, trigger: 'blur'}
                    ]
                },
                eleId:'',

                isShow:false,

                currentData:'',

                currentNode:'',

                menuVisible:false,
                addFormVisible:false,
                addFormVisible2:false,
                addFormVisible3:false,
                firstLevel:false,

                filterText:'',

                maxexpandId:4,
                datas: [
                    {
                        id:1,
                        name: '测试',
                        title: '13898966666',
                        author: '测试',
                        mobile: '13898966666',
                        createTime: '2020-12-20 09:00',
                        status: '已结束',
                        content: '领导好，我是泾渭上城的业主，今年第一年住进来，发现各种问题，其他都能忍受，但是这个暖气的问题实在是不可以忍受，有老人有孩子，暖气费也交了，打电话给物业，物业推脱热力公司，给热力公司打，又说物业舍不得花钱做保温，到底是哪里的问题我们也不得而知，据我所知这个小区的暖气已经是个老大难，热力公司说是给政府建议，政府不整改，不批复，请你们核实清楚，尽快解决这个暖气问题，好让我们小区的广大居民过好一个冬天，同样的，人家小区家里20多度，我们家里冷冰冰，太寒心了！',
                    }
                ],

                treeData: [{

                    id:1,

                    label:'一级 1',
                    mobile:'13898966666',

                    isEdit:false,

                    children: [{

                        id:4,

                        label:'二级 1-1',
                        mobile:'13898966666',

                        isEdit:false,

                        children: [{

                            id:9,

                            label:'三级 1-1-1',

                            isEdit:false

                        }, {

                            id:10,

                            label:'三级 1-1-2',

                            isEdit:false

                        }]

                    }]

                }, {

                    id:2,

                    label:'一级 2',

                    isEdit:false,

                    children: [{

                        id:5,

                        label:'二级 2-1',

                        isEdit:false

                    }, {

                        id:6,

                        label:'二级 2-2',

                        isEdit:false

                    }]

                }, {

                    id:3,

                    label:'一级 3',

                    isEdit:false,

                    children: [{

                        id:7,

                        label:'二级 3-1',

                        isEdit:false

                    }, {

                        id:8,

                        label:'二级 3-2',

                        isEdit:false,

                        children: [{

                            id:11,

                            label:'三级 3-2-1',

                            isEdit:false

                        }, {

                            id:12,

                            label:'三级 3-2-2',

                            isEdit:false

                        }, {

                            id:13,

                            label:'三级 3-2-3',

                            isEdit:false

                        }]

                    }]

                }],

                defaultProps: {

                    children:'children',

                    label:'label'

                }

            }

        },

        methods: {

            test () {

                axios.get('http://test.cn')

                    .then(response => {

                        this.isShow = response.data.operations[0].pubResource.isVisiable

                        console.log(response.data.operations[0].pubResource)

                        this.eleId = response.data.operations[0].pubResource.elementId

                    })

            },

            NodeBlur (Node, data) {


                console.log(Node, data)

                if (data.label.length ===0) {

                    this.$message.error('菜单名不可为空！')

                    return false

                }else {

                    if (data.isEdit) {

                        this.$set(data,'isEdit',false)

                        console.log(data.isEdit)

                    }

                    this.$nextTick(() => {

                        this.$refs['slotTreeInput' + data.id].$refs.input.focus()

                    })

                }

            },

// 查询

            filterNode (value, data) {

                if (!value)return true

                return data.label.indexOf(value) !== -1

            },

            handleDragStart (node, ev) {

                console.log('drag start', node)

            },

            handleDragEnter (draggingNode, dropNode, ev) {

                console.log('tree drag enter: ', dropNode.label)

            },

            handleDragLeave (draggingNode, dropNode, ev) {

                console.log('tree drag leave: ', dropNode.label)

            },

            handleDragOver (draggingNode, dropNode, ev) {

                console.log('tree drag over: ', dropNode.label)

            },

            handleDragEnd (draggingNode, dropNode, dropType, ev) {

                console.log('tree drag end: ', dropNode && dropNode.label, dropType)

            },

            handleDrop (draggingNode, dropNode, dropType, ev) {

                console.log('tree drop: ', dropNode.label, dropType)

            },

            allowDrop (draggingNode, dropNode, type) {

                if (dropNode.data.label ==='二级 3-1') {

                    return type !=='inner'

                }else {

                    return true

                }

            },

            allowDrag (draggingNode) {

                return draggingNode.data.label.indexOf('三级 3-2-2') === -1

            },

// 鼠标右击事件

            rightClick (MouseEvent, object, Node, element) {

                // debugger

                this.currentData = object

                this.currentNode = Node

                if (Node.level ===1) {

                    this.firstLevel =true

                }else {

                    this.firstLevel =false

                }

                this.menuVisible =true

                // let menu = document.querySelector('#card')

// /* 菜单定位基于鼠标点击位置 */

// menu.style.left = event.clientX + 'px'

// menu.style.top = event.clientY + 'px'

                document.addEventListener('click',this.foo)

                this.$refs.card.$el.style.left =event.clientX +40 +'px'

                this.$refs.card.$el.style.top =event.clientY +10 +'px'

            },

// 鼠标左击事件

            handleLeftclick (data, node) {

                this.foo()

            },

//  取消鼠标监听事件 菜单栏

            foo () {

                this.menuVisible =false

                //  要及时关掉监听，不关掉的是一个坑，不信你试试，虽然前台显示的时候没有啥毛病，加一个alert你就知道了

                document.removeEventListener('click',this.foo)

            },

// 增加同级节点事件

            addSameLevelNode () {

                let id =Math.ceil(Math.random() *100)

                var data = {id:id,label:'新增节点'}

                this.$refs.tree.append(data,this.currentNode.parent)

            },

// 增加子级节点事件

            addChildNode () {
                this.addFormVisible =true;

                console.log(this.currentData)

                console.log(this.currentNode)

                if (this.currentNode.level >=3) {

                    this.$message.error('最多只支持三级！')

                    return false

                }

                let id =Math.ceil(Math.random() *100)

                var data = {id:id,label:'新增节点'}

                this.$refs.tree.append(data,this.currentNode)

            },

// 删除节点

            deleteNode () {


                this.$confirm('确认删除该节点吗?', '提示', {type: 'warning'}).then(() => {
                    this.$refs.tree.remove(this.currentNode)

                }).catch(() => {
                });

            },

// 编辑节点

            editNode () {

                // debugger

                if (!this.currentData.isEdit) {

                    this.$set(this.currentData,'isEdit',true)

                }

            },
            // 检查页面是新建还是编辑
            checkPageStatus: function (id) {
                let url = '/api/test/user/user'
                let vm = this
                if (id) {
                    this.type = 'edit'
                    this.btnName = '修改'
                    // this.$ajax.post(url, {id: id}).then(function (res) {
                    //     vm.form = res.data.data
                    // })
                } else {
                    this.type = 'add'
                    this.btnName = '新建'
                }
            },
            // 取消按钮事件
            cancelForm: function () {
                this.$router.push('/contact')
            },
            // 确定按钮事件
            onSubmit: function (formName) {
                // let vm = this
                // let url = '/api/test/user/add'
                // this.$refs[formName].validate((valid) => {
                //     if (valid) {
                //         let data = this.form || {}
                //         this.$ajax.post(url, data).then(function (res) {
                //             vm.$router.push('/contact')
                //         })
                //     } else {
                //         console.log('error submit!!')
                //         return false
                //     }
                // })
            },
            goV(a,b){
                console.log(a);
                console.log(b);
                this.viewVisible = true
                this.viewForm=b;
            },
            handleCurrentChange(val) {
                this.pageNum = val;
                this.getAboutPage();
            },
            handleSizeChange(val) {
                this.pageSize = val;
                this.getAboutPage();
            },
            createTimeFormat: function (row, colnm,cellValue, index) {
                // if (row.createTime) {
                //     row.createTime = row.createTime.replace(/-/g,"/");
                //     row.createTime = row.createTime.replace('T',' ');
                //     row.createTime = row.createTime.substring(0,19);
                //     return util.formatDate.format(new Date(cellValue), 'yyyy-MM-dd hh:mm:ss');
                // }
            },
            getProductPage() {
                let that=this;
                let para = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    name: this.filters.name,
                };
                // this.datasLoading = true;
                // reqProductPage(para).then((res) => {
                //     if(res.data.code===1){
                //         that.total = res.data.data.total;
                //         that.datas = res.data.data.records;
                //         that.datasLoading = false;
                //     }else {
                //         that.$message({
                //             message:"查询失败",
                //             type:'error',
                //         });
                //     }
                //
                // })
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
            addHandle: function () {
                this.addFormVisible = true;
            },
            addHandle2: function () {
                this.addFormVisible2 = true;
            },
            addHandle3: function (row) {
                this.addFormVisible3 = true;
            },
            addSubmit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.addLoading = true;
                        this.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                        this.addFormVisible = false;
                        // this.$refs['addForm'].resetFields();
                        let para = Object.assign({}, this.addForm);
                        console.log(para);
                        this.datas.push(para);
                        // reqAddUser(para).then((res) => {
                        //     this.addLoading = false;
                        //     if (res.data.code === 1) {
                        //         this.$refs['addForm'].resetFields();
                        //         this.addFormVisible = false;
                        //         this.getUsers();
                        //         this.$message({
                        //             message: '提交成功',
                        //             type: 'success'
                        //         });
                        //     }else{
                        //         this.$message({
                        //             message: res.data.msg,
                        //             type: 'error'
                        //         });
                        //     }
                        // });
                    }
                });
            },
            open:function(dialogType,obj){
            },
            //删除
            del: function (index, row) {
                this.$confirm('确认删除该记录吗?', '提示', {type: 'warning'}).then(() => {
                    this.datasLoading = true;
                    let para = {id: row.id};
                    // reqProductDel(para).then((res) => {
                    //     if (res.data.code===1) {
                    //         this.datasLoading = false;
                    //         this.$message({
                    //             message: '删除成功',
                    //             type: 'success'
                    //         });
                    //         this.getProductPage();
                    //     } else {
                    //         this.$message({
                    //             message: res.data.msg,
                    //             type: 'error'
                    //         });
                    //         this.getProductPage();
                    //     }
                    // });
                }).catch(() => {
                });
            },
            //批量删除
            batchDel: function () {
                var ids = this.sels.map(item => item.id).toString();
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.datasLoading = true;
                    let para = {ids: ids};
                    // reqProductBatchDel(para).then((res) => {
                    //     if (res.data.code===1) {
                    //         this.datasLoading = false;
                    //         this.$message({
                    //             message: '批量删除成功',
                    //             type: 'success'
                    //         });
                    //         this.getProductPage();
                    //     } else {
                    //         this.$message({
                    //             message: '批量删除失败',
                    //             type: 'error'
                    //         });
                    //     }
                    // });
                }).catch(() => {
                });
            },
            getAboutPage() {
                let that=this;
                let para = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                };
                findPageNews(para).then(
                    (res) => {
                        console.log(res);
                        if(res.code===1){
                            that.total = res.data.total;
                            that.newslist = res.data.records;
                            console.log(this.newslist)
                        }else {
                            that.$message({
                                message:"查询失败",
                                type:'error',
                            });
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            },
            gotoDetail(id){
                console.log(id)
                // $router.push({path: '/administrator/maintenance/view/'+scope.row.id})
                this.$router.push({path: '/home/xuanjudetail/'+id,query: { type: 'danggui' }});
                // this.$router.push({path: '/home/guidedetail'});
            },

        },

        watch: {

            filterText (val) {

                this.$refs.tree.filter(val)

            }

        },

        mounted () {

            this.test()

        }

    }

</script>

<style scoped lang="scss">

    /*.lalala {*/

    /*position: relative;*/

    /*}*/
    .search{
        display: block;
        margin: 15px;
    }
      .text {

        font-size:14px;

    }

    .el-tree{

        width:20%;

        margin-top:10px;

    }

    .search{

        width:20%;

    }

    .item {

        padding:18px 0;

    }

    .add{

        cursor:pointer;

        margin-top:10px;

    }

    .delete{

        margin:10px 0;

        cursor:pointer;

    }
    .newtit{text-align:center;font-size:20px;margin:20px 0px;font-weight:bold;}
    .big_nav{margin-bottom:10px;font-size:16px;}
    .m-tit {
        width: 97%;
        line-height: 30px;
        font-size: 19px;
        margin: 15px 0 15px 25px;
        font-weight: 800;
    }
    .edit{

        margin-bottom:10px;

        cursor:pointer;

    }

    .search {

        cursor:pointer;

    }

    .box-card {

        width:120px;

        position:absolute;

        z-index:1000;

    }
    .newsbox .hot ul li{    padding: 15px 0px 5px 0px;border-bottom:1px dashed #c6c6c6}
    .newslist{position:relative;}
    .new_time{position:absolute;right:0px;top:0px;font-size:16px;}
    .newslist .title{border-left:3px solid #d50f10;padding-left:10px;font-size:16px;margin-bottom:10px;}
    .newslist .title a{color:#000;}
    .newslist .title a:hover{color:#d50f10;}
    .newslist .title b{color:#d50f10;margin-right:5px;}
    .newslist .desc{margin-left: 15px;line-height: 26px;}
    @media (min-width: 768px){
        .main {
            width: 750px;
            /*padding-top: 80px;*/
        }
        .returned-box, .main {
            margin: 40px auto;
            border-radius: 5px;
        }
        .re-query-box .form-control {
            width: 300px;
        }
        .re-query-box .form-verify {
            width: 150px;
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

    .group_buying{
        padding: 50px 25px 5px 25px;
    }
    .el-upload__input {
        display: none !important;
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner {
        width: 100%;
    }
    .el-input__inner{
        border: 1px solid #ccc;
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
        width: 97%;
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
    .re-query-box {
        padding: 50px 0;
        width: 280px;
        margin: 0 auto;
    }
    .mb-sm {
        margin-bottom: 10px;
    }
    .mt-sm {
        margin-top: 10px;
    }
    .text-red {
        color: red;
    }
    .group_buying ul li{
        padding: 20px;
        background: #ebebeb;
        border-radius: 12px;
        margin-bottom: 30px;
    }

    .group_buying ul li a {
        display: inline-block;
        width: 100%;
        position: relative;
    }
    .group_buying ul li:hover{
        background: #fff;
        box-shadow: 5px 10px 10px #CACACA;
    }
    .group_buying ul li a:hover{

    }
    .group_buying ul li a img{
        width: 25%;
        float: left;
        max-height: 190px;
    }
    .group_buying ul li a .tit{
        width: 70%;
        float: right;
    }
    .tit h4{
        font-size: 24px;
        padding: 30px 0;
        text-indent: 12px;
        color:#333;
    }
    .tit p{
        font-size: 20px;
        line-height: 30px;
        text-indent: 12px;
        max-height: 64px;
        overflow: hidden;
        color:#333;
        margin-bottom: 20px;
    }
    .tit span{
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 14px;
        color:#333;

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
        /*.main{*/
        /*margin-left: 15px !important;*/
        /*margin-right: 15px !important;*/
        /*}*/
        .group_buying{
            padding: 15px 0;
        }

        .m-tit{
            margin-left: 1px !important;
        }
        .group_buying ul li{
            padding: 10px 0 5px 0;
            background: #ebebeb;
            border-radius: 12px;
            margin-bottom: 15px;
        }
        .group_buying ul li img{
            width: 40%;
            float: left;
            padding-left: 10px;
        }
        .group_buying ul li .tit{
            width: 60%;
            float: left;
        }
        .tit h4 {
            font-size: 15px;
            line-height: 25px;
            padding: 0;
            text-indent: 0;
            width: 100%;
            white-space: nowrap;
            padding-right: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .tit p {
            font-size: 13px;
            line-height: 18px;
            overflow: hidden;
            text-indent: 0;
            max-height: 34px;
        }
        .tit span,.el-pagination {
            display: none;
        }
    }

</style>