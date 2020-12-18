// 维修状态值数字转文字 0:受理中，1：审核通过 2：审核不通过
let repairStatus = value => {
    let status='';
    if(value==0){
        status= '受理中';
    }else if(value==1){
        status= '审核通过';
    }else{
        status= '审核不通过';
    }
    return status;
}

// 身份证号脱敏('331082199708094687' 转换成 '33108219********87') 第8位开始替换8个

export default {
    repairStatus
}
