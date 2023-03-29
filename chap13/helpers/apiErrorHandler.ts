import {createError, H3Event} from "h3";

const getUniqueErrorMessage = (event: H3Event) => {
    let output
    try {
        sendError(event, createError({
            statusCode: 500,
            statusMessage: "Error retrieving user"
        }))
    } catch (e) {

    }
}
const getErrorMessage = (err) => {

}
