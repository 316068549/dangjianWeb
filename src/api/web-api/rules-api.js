import request from '../../utils/Request'


//企业动态列表查询
export function findPageNews(params) {
    return request({
        url: 'companyNews/page',
        method: 'get',
        params:params
    })
}
//企业动态详情查询
export function findPageNewsDetail(params) {
    return request({
        url: 'companyNews/one',
        method: 'get',
        params:params
    })
}










