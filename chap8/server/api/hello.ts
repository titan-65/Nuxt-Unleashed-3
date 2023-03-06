import express, {Request, Response} from "express";

export default defineEventHandler(async (event) => {
    // const app = express()
    // const port = 8000
    //
    // app.get('/', (req: Request, res: Response) => {
    //     res.send('Hello Express')
    // })
    //
    // app.listen(port, () => {
    //     console.log("Listening 8000")
    // })
    //
    return {
        api: "Success"
    }
})