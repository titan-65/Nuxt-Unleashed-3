import { useAuth } from "~/store/user";
import { authenticate, isAuthenticated } from "~/utils/auth/authHelper";

export default defineNuxtRouteMiddleware((to, from) => {
  // const { getters } = useAuth();
  // const { getIsAuthenticated } = getters;
  // if (!getIsAuthenticated) {
  //   return navigateTo("/signin");
  // }

  if (!isAuthenticated()) {
    return navigateTo("/account/signin");
  }
});
