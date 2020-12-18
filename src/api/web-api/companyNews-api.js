import request from '../../utils/Request'


//企业动态列表查询
export function findNews(params) {
    return request({
        url: 'companyNews/page',
        method: 'get',
        params:params
    })
}










