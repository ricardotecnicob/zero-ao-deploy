const Koa = require('koa');

const Router = require('koa-router');

const app = new Koa();

const router = new Router();

const port = process.env.PORT;


const index = ctx => {
    ctx.body = 'zero-ao-deploy'
}

const hello = ctx => {
    const name =  ctx.params.name || 'word'
    ctx.body = ""
}

router.get('/', index)
router.get('/hello', hello)
router.get('/hello/:name', hello)

app.use(router.routes())

app.listen(port).on('listening', () => console.log(`listeng on port ${port}`))