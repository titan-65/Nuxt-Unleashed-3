import express, {Request, Response, Express} from "express";
import {coffeeRouter} from "~/routes";

const app: Express = express()
const port: number = 5000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Express')
})

app.get('/menu', coffeeRouter)

const server = app.listen(port, () => {
    console.log("Listening 8002")
})

server.on('close', () => {
    console.log("server closed")
})
