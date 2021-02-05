import request from '../../utils/Request'


//列表查询
export function findCates(params) {
    return request({
        url: 'V1/cate',
        method: 'get',
        params:params
    })
}
//轮播图查询
export function findBanner(params) {
    return request({
        url: 'V1/headAd',
        method: 'get',
        params:params
    })
}











