/**
 * 接口域名的管理
 */
let interfaceUrl = ''
switch (process.env.NODE_ENV) {
  case 'development':
    interfaceUrl = 'http://0.0.0.0'
    break
  case 'test':
    interfaceUrl = 'http://1.1.1.1'
    break
  case 'production':
    interfaceUrl = 'http://2.2.2.2'
    break
}
console.log('环境',process.env.NODE_ENV, '结果',interfaceUrl)

let API = {
  getMovie: 'https://bird.ioliu.cn/v1/?url=http://api.douban.com/v2/movie/in_theaters',
}

export default API
