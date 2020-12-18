/* 联系方式（手机和固定号码） */
export function validateContact(str) {
    const reg = /^((0\d{2,3}-\d{7,8})|(1[35784]\d{9}))$/
    return reg.test(str)
}
// 手机号验证
export function isvalidPhone(str) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
}
// 去掉特殊符号验证
export function isvalidTitle(str) {
    const reg = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/
    return reg.test(str)
}
