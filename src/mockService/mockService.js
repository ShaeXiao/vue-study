const Koa = require('koa')
// const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const cors = require('koa2-cors')

// app.use(bodyParser())
app.use(koaBody({
  multipart: true
}))

// 解决跨域问题
// app.use(cors({
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//     maxAge: 5,
//     // 允许接收cookie
//     credentials: true,
//     allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }))

router.get('/', async (ctx) => {
//   console.log(ctx.request.query)
//   console.log(ctx.request.querystring)
//   console.log(ctx.request.body)
  ctx.response.set('Access-Control-Allow-Origin', '*')
  ctx.body = {
    name: 'jgmiu'
  }
})

router.post('/user', async (ctx) => {
  // console.log(ctx.request.query)
  // console.log(ctx.request.querystring)
  console.log(ctx.request.body)
  ctx.body = {
    mehod: 'post'
  }
})

router.put('/user', async (ctx) => {
    // console.log(ctx.request.query)
    // console.log(ctx.request.querystring)
    console.log(ctx.request.body)
    ctx.body = {
      mehod: 'post'
    }
  })

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, ()=>{
    console.log('serve start on 3000')
})


