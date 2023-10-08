export const signin = async (email: string, password: string) => {
  try {
    const data = await $fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
  } catch (e) {
    console.error(e);
  }
};
export const signout = async () => {
  try {
    return await $fetch("/api/auth/signout", {
      method: "GET",
    });
  } catch (e) {
    console.error(e);
  }
};
