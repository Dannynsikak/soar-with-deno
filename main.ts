import {Application, Router} from "@oak/oak"

const router = new Router();
const app = new Application();
const controller = new AbortController();

router.get("/hello", (ctx) => {
    ctx.response.body = "Hello, World!";
})
app.use(router.allowedMethods());
app.use(router.routes());

if (import.meta.main) {
    app.listen(
        {
            port: 5555,
            signal: controller.signal
        }
    )
}
