import { ref } from "vue";
import { User } from "~/types/user.types";

// State
const token = ref(null);
const user = ref(null);
const isAuthenticated = ref(false);

export const useAuth = () => {
  // Getters
  /*
 Getters are computed properties for the store. They are used to get the state of the store.
 
 */
  const getters = {
    getToken: computed((token) => {
      token.value = localStorage.getItem("token");
      isAuthenticated.value = !!token.value;
      return token.value;
    }),
    getUser: computed(() => user.value),
    getIsAuthenticated: computed(() => isAuthenticated.value),
  };

  // Actions
  /*
    Actions are methods that are used to commit mutations. They can be asynchronous and can call mutations.
   
 */
  const actions = {
    async signIn(credentials: User) {
      try {
        const response = await $fetch("/api/auth/signin", {
          method: "POST",
          body: credentials,
        });
        const { token, user } = response;
        user.value = user;
      } catch (e) {
        console.error(e);
        throw new Error("Something went wrong! Could not sign in!");
      }
    },
    async signOut() {
      try {
        await $fetch("/api/auth/signout", {
          method: "GET",
        });
        user.value = null;
        token.value = null;
        isAuthenticated.value = false;
      } catch (e) {
        console.error(e);
        throw new Error("Something went wrong! Could not sign out!");
      }
    },
  };

  return {
    token,
    user,
    isAuthenticated,
    getters,
    actions,
  };
};
