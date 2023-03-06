import {Ref} from "@vue/reactivity";
import { ref } from 'vue'
export const useLogin = () => {
    const email: Ref<string> = ref('')
    const password: Ref<string> = ref('')

    function signInPassword(email: string, password: string) {
        const users = [
            {
                email: 'user@example.com',
                password: 'password123',
                id: 1
            },
            {
                email: 'anotheruser@example.com',
                password: 'letmein',
                id: 2
            }
        ];
        // @ts-ignore
        const user = users.find(u => u.email === email);

        // If the user was not found, throw an error
        if (!user) {
            throw new Error('User not found');
        }
        // Check if the password is correct
        // @ts-ignore
        if (user.password !== password) {
            throw new Error('Incorrect password');
        }
        // Generate an authentication token (this is just a mock implementation)
        const token = 'mock-auth-token';

        // Return the token
        return {
            token: token,
            userId: user.id
        };
    }

    // const auth = await signIn(email, password)

    return {
        signInPassword
    }
}