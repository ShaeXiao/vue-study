// const express = require('express')
// const Mock = require('mockjs'); 
// const app = express()
// const port = 3004

// app.get('/', (req, res) => res.send('Hello World!'))

// app.get('/about', function (req, res) {
//     console.log(req.query,'req11')
//     // res.send('about')
//     res.json(Mock.mock({
//         'status': 200,
//         'dataSource|1-9':[{
//             'key|+1': 1,
//             'mockTitle|1':['肆无忌惮'],
//             'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
//             'mockAction|1': ['下载lllhhh', '试听lllhhh', '喜欢lllhhh']
//         }]
//     }))
//   })

//   app.post('/testpost', function (req, res) {
//       console.log(req.body,'req22')
//     res.send('POST request to the homepage');
//   });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


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


