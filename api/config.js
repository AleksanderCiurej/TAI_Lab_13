const config = {
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://aleksander:mongopasswd@tai-axoy7.gcp.mongodb.net/test?retryWrites=true&w=majority',
  JwtSecret: process.env.JWT_SERCRET || 'secret',
  port: 3000

}
export default config
