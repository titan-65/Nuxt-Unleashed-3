import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  /* -------------------------------------------------------------------------- */

  /* State */

  /* -------------------------------------------------------------------------- */

  const trackUser = ref([]);
  const sessionTracking = ref(null);
  const cookiesOptions = ref(null);
  const nuxtinUser = ref(null);

  /* -------------------------------------------------------------------------- */

  /* Getters */

  /* -------------------------------------------------------------------------- */

  const getTrackUser = computed(() => {
    return trackUser.value;
  });

  const getSessionTracking = computed(() => {
    return {
      session: sessionTracking.value,
      cookies: cookiesOptions.value,
    };
  });

  /* -------------------------------------------------------------------------- */

  /* Actions */

  /* -------------------------------------------------------------------------- */

  function addTrackUser(path: any) {
    // @ts-ignore
    trackUser.value.push({
      path,
      date: new Date().toJSON(),
    });
  }

  function addNuxtinUser(user: null) {
    if (!user) {
      return;
    }

    nuxtinUser.value = user;
  }

  // @ts-ignore
  function addSession({ currentSession, cookieOptions }) {
    sessionTracking.value = currentSession;

    cookiesOptions.value = cookieOptions;
  }

  return {
    trackUser,

    cookiesOptions,

    sessionTracking,

    nuxtinUser,

    getTrackUser,

    addNuxtinUser,

    addSession,

    addTrackUser,
  };
});
