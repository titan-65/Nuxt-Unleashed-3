import { useAuth } from "~/store/user";
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Plugin injected by my-module!");
  const { getters } = useAuth();
  const { getIsAuthenticated } = getters;
  if (!getIsAuthenticated) {
    return navigateTo("/signin");
  }
});
