// @ts-ignore
export const apiUserCreate = async (user) => {
  try {
    return await $fetch("/api/users/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (e) {
    console.error(e);
  }
};

export const apiUserList = async () => {
  try {
    return await $fetch("/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export const apiReadUserById = async (params, token: any) => {
  try {
    return await $fetch(`/api/users/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export const apiUpdateUser = async (
  params: { id: any },
  user: any,
  token: any
) => {
  try {
    return await $fetch(`/api/users/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
  } catch (e) {
    console.error(e);
  }
};

export const apiDeleteUser = async (params: { id: any }, token: any) => {
  try {
    return await $fetch(`/api/users/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export const followUser = async (params: { id: any; }, credentials: { token: any; }, followId: any) => {
  try {
    return await $fetch(`/api/users/follow`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${credentials.token}`,
      },
      body: JSON.stringify({ userId: params.id, followId: followId }),
    });
  } catch (e) {
    console.error(e);
  }
}

export const unfollowUser = async (params: { id: any; }, credentials: { token: any; }, unfollowId: any) => {
    try {
        return await $fetch(`/api/users/unfollow`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${credentials.token}`,
        },
        body: JSON.stringify({ userId: params.id, unfollowId: unfollowId }),
        });
    } catch (e) {
        console.error(e);
    }
}
