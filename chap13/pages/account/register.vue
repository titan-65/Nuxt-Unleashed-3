<script setup lang="ts">
import { useFileStore } from "~/store";

const router = useRouter();
const route = useRoute();

const file = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const profileImage = ref("");
const confirmPassword = ref("");
let errorMessage = ref(null);

const handleFileUpload = (event) => {
  console.log(event.target.files[0]);
  file.value = event.target.files[0];
};

const registerHandler = async () => {
  const formData = new FormData();
  formData.append("username", username.value);
  formData.append("email", email.value);
  formData.append("password", password.value);
  formData.append("confirmPassword", confirmPassword.value);
  formData.append("profileImage", file.value);

  const { data, error } = await useFetch("/api/users/createuser", {
    method: "POST",
    body: {
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      profileImage: formData.get("profileImage"),
    },
  });

  console.log(data);
  if (data) {
    await router.push("/");
  } else {
    errorMessage.value = error;
    console.log(error);
    console.log(errorMessage.value);
  }
};

definePageMeta({
  layout: "account",
});
</script>
<template>
  <div>
    <section class="bg-white dark:bg-gray-900">
      <div
        class="container flex items-center justify-center min-h-screen px-6 mx-auto"
      >
        <form class="w-full max-w-md">
          <div class="relative flex items-center mt-8">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
              v-model="username"
            />
          </div>

          <label
            for="dropzone-file"
            class="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>

            <h2 class="mx-3 text-gray-400">Profile Photo</h2>

            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              @change="handleFileUpload"
            />
          </label>

          <div class="relative flex items-center mt-6">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              v-model="email"
            />
          </div>

          <div class="relative flex items-center mt-4">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              v-model="password"
            />
          </div>

          <div class="relative flex items-center mt-4">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm Password"
              v-model="confirmPassword"
            />
          </div>

          <div class="mt-6">
            <button
              class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              @click.prevent="registerHandler"
            >
              Sign Up
            </button>

            <div class="mt-6 text-center">
              <NuxtLink
                to="/account/sigin"
                class="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account?
              </NuxtLink>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
