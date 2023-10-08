//user.ts

import { useUserStore } from "../store/user";

export default defineNuxtRouteMiddleware((to, from) => {
  //Check if user is present

  // @ts-ignore
  const user = useSupabaseUser();

  const { addTrackUser } = useUserStore();

  if (user) {
    addTrackUser(to.path);
  }
});
