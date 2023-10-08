export default defineNuxtRouteMiddleware((to, from) => {
  // @ts-ignore
  const user = useSupabaseUser();

  if (!user.value) {
    return navigateTo("/login");
  }

  return navigateTo("/");
});
