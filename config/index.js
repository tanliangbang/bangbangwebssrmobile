const isProd = process.env.NODE_ENV === 'production'

const proUrl = 'http://localhost:3000' // 生产环境api地址
const devUrl = 'http://www.tanliangbang.club' // 开发api地址

const FaceUrl = isProd ? proUrl : devUrl

module.exports = {
  baseUrl: FaceUrl,
  client: {
    baseurl: '/',
    timeout: 10000
  },
  server: {
    baseurl: FaceUrl + '/',
    timeout: 10000
  }
}
