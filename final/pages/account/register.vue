<script setup>
const client = useSupabaseClient()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)


const handleSubmit = async () => {

    try {
        const { data, error } = await client.auth.signUp({
            email: email.value,
            password: password.value
        })

        if (error) {
            new Error('Something went wrong with signup')
            return
       
        }
        console.log(data)
    } catch (error) {
            console.log(error)
        }

    router.push('/login')


}

// async function signInWithEmail(email, password) {
//         const { data, error } = await client.auth.signUp({
//             email: email,
//             password: password,
//         })
//     }
definePageMeta({
    middleware: []
})
</script>
<template>
  <div
    class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
  >
    <div class="px-6 py-4">
      <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">Nuxtin</h2>

      <h3 class="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
        Welcome Please SignUp and Have some Coffee!
      </h3>

      <p class="mt-1 text-center text-gray-500 dark:text-gray-400">
        Create Account
      </p>

      <form @submit.prevent="handleSubmit">
        <div class="w-full mt-4">
          <input
            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            placeholder="Email Address"
            v-model="email"
            aria-label="Email Address"
          />
        </div>

        <div class="w-full mt-4">
          <input
            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            v-model="password"
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
        </div>

        <div class="flex items-center justify-between mt-4">

          <button
            class="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
            type="submit"
          >
            Signup
          </button>
        </div>
      </form>
    </div>

    <div
      class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700"
    >
      <span class="text-sm text-gray-600 dark:text-gray-200"
        >Already have an account?
      </span>

      <NuxtLink
        to="/account/login"
        class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
        Login
      </NuxtLink
      >
    </div>
  </div>
</template>
