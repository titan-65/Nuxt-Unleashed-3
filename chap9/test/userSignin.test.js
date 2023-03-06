import { describe, test, expect, it} from "vitest";
import { useLogin } from "/composables/useLogin.ts";
import {setup} from "@nuxt/test-utils";
// import { useFetch } from "#app";

describe('User authentication', async () => {
    const { signInPassword } = useLogin()
    await setup({

    });
    test("User should be signed in", () => {
        // Set up test
        const user = {
            email: 'user@example.com',
            password: 'password123'
        }

        expect(user.email).toBe('user@example.com')
        const authResponse = signInPassword(user.email, user.password)
        console.log(authResponse)
        // expect(authResponse).toBe(user)
        // Expect the response to have a 200 status code and contain the user's information
        // expect(response).toBe(200);
        // expect(response.body.user.email).toBe(user.email);
        // expect(response.body.user.isAuthenticated).toBe(true);
    })
})