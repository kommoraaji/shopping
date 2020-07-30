import http from './axios'

//获取分类信息(首页)
export default function getcate() {
  return http.get('/getcate')
}
//获取轮播图信息(首页)
export default function getbanner() {
  return http.get('/getbanner')
}
//获取限时秒杀信息(首页)
export default function getseckill() {
  return http.get('/getseckill')
}
//获取商品信息(首页)
export default function getindexgoods() {
  return http.get('/getindexgoods')
}
//获取分类商品
export default function getcategoods() {
  return http.get('/getcategoods')
}
//获取分类信息
export default function getcate() {
  return http.get('/getcate')
}
//获取分类信息
export default function getcate() {
  return http.get('/getcate')
}
