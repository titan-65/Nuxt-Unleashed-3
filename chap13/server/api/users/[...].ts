import { createRouter, useBase, defineEventHandler, H3Event} from "h3";
import addFollow from "~/server/events/user/addFollow";
import removeFollow from "~/server/events/user/removeFollow";
import getUserById from "~/server/events/user/getUser";
const router = createRouter();


router.get("/test", defineEventHandler( async (event: H3Event) => {
    return {
        message: "Hello from the router"
    }
}))

router.get("/:id", getUserById)
router.put("/follow", addFollow)
router.put("/unfollow", removeFollow)

export default useBase("/api/users", router.handler)