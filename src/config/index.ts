let host = '' //api接口baseurl
let appId = ''

if (process.env.NODE_ENV === 'production') {
  host = 'http://game.junongyun.cn'
  // 微信环境
  // #ifdef MP-WEIXIN
  const WXENV = __wxConfig.envVersion || ''
  switch (WXENV) {
    // 开发环境
    case 'develop':
      host = 'http://game.junongyun.cn'
      break;
    // 体验版
    case 'trial':
      host = 'http://game.junongyun.cn'
      break;
    // 正式版
    case 'release':
      host = 'http://game.junongyun.cn'
      break;

    default:
      host = 'http://game.junongyun.cn'
      break;
  }
  // #endif

} else if (process.env.NODE_ENV === 'development') {
  // 开发环境接口
  host = 'http://game.junongyun.cn'
}
const configs = {
  appId,
  host,
}
export default configs
