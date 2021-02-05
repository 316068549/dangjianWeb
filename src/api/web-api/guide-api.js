import request from '../../utils/Request'


//企业动态列表查询
export function findNews(params) {
    return request({
        url: 'V1/content_lst',
        method: 'get',
        params:params
    })
}
//企业动态详情查询
export function findPageNewsDetail(params) {
    return request({
        url: 'V1/content',
        method: 'get',
        params:params
    })
}










