import request from '../../utils/Request'


//企业动态列表查询
export function findNews(params) {
    return request({
        url: 'V1/exam',
        method: 'get',
        params:params
    })
}
//企业动态详情查询
export function goPageNewsDetail(params) {
    return request({
        url: 'V1/exam_ans',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data:params
    })
}











