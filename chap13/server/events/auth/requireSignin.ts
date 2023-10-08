// Require signin middleware similar to expressJwt
import {H3Event} from "h3";

export default function (event: H3Event) {
    const { headers } = event.context.request;
    const { authorization } = headers;
    if (!authorization) {
        return {
            status: 401,
            body: {
                message: "You must be signed in to do that"
            }
        };
    }
    const [type, token] = authorization.split(" ");
    if (type !== "Bearer") {
        return {
            status: 401,
            body: {
                message: "You must be signed in to do that"
            }
        };
    }
    const { user } = event.context;
    if (!user) {
        return {
            status: 401,
            body: {
                message: "You must be signed in to do that"
            }
        };
    }
    return {
        status: 200,
        body: {
            user
        }
    };
}