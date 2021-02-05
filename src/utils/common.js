import crypto from 'crypto'


/* md5加密 */
export function md5(value) {
  const md5 = crypto.createHash('md5');
  md5.update(value);
  return md5.digest("hex")
}

export function startLoading({app,text = 'Loading',spinner = 'el-icon-loading',background = 'rgba(0, 0, 0, 0.7)'}) {
  const loading = app.$loading({
    lock: app,
    text: text,
    spinner: spinner,
    background: background
  });
  return loading
}
export default {
  // 限制只能输入数字(可以输入两位小数点)
  limitInputPointNumber(val) {
    if (val === 0 || val === "0" || val === "" || val === undefined) {
      return "";
    } else {
      let value = null;
      value = val.replace(/[^\d.]/g, ""); // 清除“数字”和“.”以外的字符
      value = value.replace(/\.{2,}/g, "."); // 只保留第一个. 清除多余的
      value = value
          .replace(".", "$#$")
          .replace(/\./g, "")
          .replace("$#$", ".");
      value = value.replace(/^(-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); // 只能输入两个小数
      return value;
    }
  }
}