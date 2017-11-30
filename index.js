/**
 * state 更新工具函数
 * @param  {[type]} oldO    修改的（state）对象
 * @param  {[type]} newO    更新的数据
 * @param  {[type]} key     指定对应的key进行更新
 * @return {[type]}          [description]
 */
const trans = (oldO, newO, key) => {
  if (newO !== undefined) {
    switch (Object.prototype.toString.apply(oldO)) {
      case '[object Object]':
        if (key && (Object.prototype.toString.apply(key) === '[object String]')) {
          // 对应key更新
          switch (Object.prototype.toString.apply(oldO[key])) {
            case '[object Object]':
            case '[object Array]':
              trans(oldO[key], newO)
              break
            default:
              // 布尔值， 数字， 字符串
              oldO[key] = newO
              break
          }
        } else {
          // 循环更新所有
          Object.keys(oldO).map(key => {
            trans(oldO, newO[key], key)
          })
        }
        break
      case '[object Array]':
        if (Object.prototype.toString.apply(key) === '[object Number]' && key < (oldO.length - 1)) {
          oldO.splice(key, 1, newO)
        } else {
          oldO.splice(0)
          newO.map(itm => oldO.push(itm))
        }
        break
      default:
        console.error('trans函数 传参错误')
        break
    }
  }
}
export default (...arg) => {
  trans(...arg)
}
